import asyncHandler from "express-async-handler";
import Withdraw from "../models/withdrawModel.js";
import User from "../models/userModel.js";
import { removeAccents } from "../utils/methods.js";
import mongoose from "mongoose";
import sendHewe from "../services/sendHewe.js";

const getAllWithdraws = asyncHandler(async (req, res) => {
  let { pageNumber, status, keyword } = req.query;
  const page = Number(pageNumber) || 1;
  const pageSize = 10;

  const matchStage = {};

  if (status && status !== "all") {
    matchStage.status = status;
  }

  const keywordRegex = keyword ? { $regex: removeAccents(keyword), $options: "i" } : null;

  const aggregationPipeline = [
    { $match: matchStage },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    { $unwind: "$userInfo" },
  ];

  if (keywordRegex) {
    aggregationPipeline.push({
      $match: {
        "userInfo.userId": keywordRegex,
      },
    });
  }

  // Đếm số bản ghi sau khi lọc
  const countAggregation = await Withdraw.aggregate([...aggregationPipeline, { $count: "total" }]);
  const count = countAggregation[0]?.total || 0;

  // Thêm phân trang và sắp xếp
  aggregationPipeline.push(
    { $sort: { createdAt: -1 } },
    { $skip: pageSize * (page - 1) },
    { $limit: pageSize },
    {
      $project: {
        _id: 1,
        status: 1,
        amount: 1,
        hash: 1,
        coin: 1,
        createdAt: 1,
        userInfo: {
          _id: 1,
          userId: 1,
          email: 1,
          walletAddress: 1,
        },
      },
    }
  );

  const withdraws = await Withdraw.aggregate(aggregationPipeline);

  res.json({
    withdraws,
    pages: Math.ceil(count / pageSize),
  });
});

const getAllWithdrawsForExport = asyncHandler(async (req, res) => {
  let fromDate, toDate;
  let match = {};

  if (req.body.fromDate) {
    fromDate = req.body.fromDate.split("T")[0];
    match.createdAt = {
      $gte: new Date(new Date(fromDate).valueOf() + 1000 * 3600 * 24),
    };
  }
  if (req.body.toDate) {
    toDate = req.body.toDate.split("T")[0];
    match.createdAt = {
      ...match.createdAt,
      $lte: new Date(new Date(toDate).valueOf() + 1000 * 3600 * 24),
    };
  }

  const withdraws = await Withdraw.aggregate([
    { $match: match },
    {
      $lookup: {
        from: "users", // tên collection User (nên viết thường và dạng số nhiều)
        localField: "userId", // field trong Claim
        foreignField: "_id", // field trong User
        as: "userInfo", // tên field chứa dữ liệu join
      },
    },
    {
      $unwind: "$userInfo", // biến mảng userInfo thành object
    },
    { $sort: { createdAt: -1 } },
  ]);

  const totalCount = await Withdraw.countDocuments(match);

  const result = [];

  for (let withdraw of withdraws) {
    result.push({
      user: withdraw.userInfo?.userId,
      email: withdraw.userInfo?.email,
      amount: withdraw.amount,
      coin: withdraw.coin || "USDT",
      status: withdraw.status,
      hash: withdraw.hash,
      createdAt: withdraw.createdAt,
    });
  }

  res.json({ totalCount, result });
});

const updateWithdraw = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { hash, status } = req.body;

  try {
    const withdraw = await Withdraw.findById(id);
    const user = await User.findById(withdraw.userId);
    if (status === "APPROVED") {
      if (withdraw.coin === "HEWE") {
        // Gửi HEWE tự động
        const receipt = await sendHewe({
          amount: withdraw.amount,
          receiverAddress: user.walletAddress,
        });
        withdraw.hash = receipt.hash;
        user.claimedHewe = user.claimedHewe + withdraw.amount;
      } else {
        // Đối với USDT, hash được truyền từ frontend (sau khi thanh toán qua MetaMask)
        withdraw.hash = hash;
        user.claimedUsdt = user.claimedUsdt + withdraw.amount;
      }
    }
    if (status === "CANCEL") {
      if (withdraw.coin === "HEWE") {
        user.availableHewe = user.availableHewe + withdraw.amount;
      } else {
        user.availableUsdt = user.availableUsdt + withdraw.amount;
      }
    }
    withdraw.status = status;
    await user.save();
    await withdraw.save();

    res.status(200).json({ message: status === "APPROVED" ? "Withdraw successful" : "Cancel!" });
  } catch (err) {
    res.status(400).json({ error: "Internal Error" });
  }
});

const getWithdrawsOfUser = asyncHandler(async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.id);

  const aggregationPipeline = [
    { $match: { userId } },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    { $unwind: "$userInfo" },
    { $sort: { createdAt: -1 } },
    {
      $project: {
        _id: 1,
        status: 1,
        amount: 1,
        hash: 1,
        coin: 1,
        createdAt: 1,
        userInfo: {
          _id: 1,
          userId: 1,
          email: 1,
          walletAddress: 1,
        },
      },
    },
  ];

  const withdraws = await Withdraw.aggregate(aggregationPipeline);

  res.json({ withdraws });
});

export { getAllWithdraws, updateWithdraw, getAllWithdrawsForExport, getWithdrawsOfUser };
