import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

const buildAttachmentPaths = (files = []) => (files || []).map((f) => f.filename);

// USER: create a new ticket
const createTicket = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;

  if (!subject || !message) {
    res.status(400);
    throw new Error("Subject and message are required");
  }

  const ticket = await Ticket.create({
    userId: req.user._id,
    subject,
    messages: [
      {
        sender: req.user._id,
        senderModel: "User",
        message,
        attachments: buildAttachmentPaths(req.files),
      },
    ],
  });

  res.status(201).json({ message: "Ticket created", ticket });
});

// USER: list own tickets
const getMyTickets = asyncHandler(async (req, res) => {
  const pageNumber = parseInt(req.query.pageNumber) || 1;
  const pageSize = 10;

  const query = { userId: req.user._id };
  const total = await Ticket.countDocuments(query);

  const tickets = await Ticket.find(query)
    .select("-messages")
    .sort({ updatedAt: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  res.json({ tickets, pages: Math.ceil(total / pageSize) });
});

// USER: get own ticket detail (with messages)
const getMyTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }).populate("messages.sender", "email userId");

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.json({ ticket });
});

// USER: reply to own ticket
const replyTicketByUser = asyncHandler(async (req, res) => {
  const { message } = req.body;

  const ticket = await Ticket.findOne({ _id: req.params.id, userId: req.user._id });
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  if (ticket.status === "CLOSED") {
    res.status(400);
    throw new Error("This ticket is closed");
  }
  if (!message && !(req.files && req.files.length)) {
    res.status(400);
    throw new Error("Message or attachment is required");
  }

  ticket.messages.push({
    sender: req.user._id,
    senderModel: "User",
    message: message || "",
    attachments: buildAttachmentPaths(req.files),
  });
  await ticket.save();

  res.json({ message: "Reply sent", ticket });
});

// ADMIN: list all tickets
const getAllTickets = asyncHandler(async (req, res) => {
  const pageNumber = parseInt(req.query.pageNumber) || 1;
  const { status, keyword } = req.query;
  const pageSize = 10;

  const matchStage = {};
  if (status && status !== "all") {
    matchStage.status = status;
  }

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

  if (keyword) {
    const keywordRegex = { $regex: keyword, $options: "i" };
    aggregationPipeline.push({
      $match: {
        $or: [
          { subject: keywordRegex },
          { "userInfo.userId": keywordRegex },
          { "userInfo.email": keywordRegex },
        ],
      },
    });
  }

  const countAggregation = await Ticket.aggregate([...aggregationPipeline, { $count: "total" }]);
  const count = countAggregation[0]?.total || 0;

  aggregationPipeline.push(
    { $sort: { updatedAt: -1 } },
    { $skip: pageSize * (pageNumber - 1) },
    { $limit: pageSize },
    {
      $project: {
        _id: 1,
        subject: 1,
        status: 1,
        createdAt: 1,
        updatedAt: 1,
        messageCount: { $size: "$messages" },
        userInfo: { _id: 1, userId: 1, email: 1 },
      },
    }
  );

  const tickets = await Ticket.aggregate(aggregationPipeline);

  res.json({ tickets, pages: Math.ceil(count / pageSize) });
});

// ADMIN: get ticket detail
const getTicketByIdAdmin = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)
    .populate("userId", "userId email")
    .populate("messages.sender", "email userId");

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.json({ ticket });
});

// ADMIN: reply to a ticket
const replyTicketByAdmin = asyncHandler(async (req, res) => {
  const { message } = req.body;

  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  if (ticket.status === "CLOSED") {
    res.status(400);
    throw new Error("This ticket is closed");
  }
  if (!message && !(req.files && req.files.length)) {
    res.status(400);
    throw new Error("Message or attachment is required");
  }

  ticket.messages.push({
    sender: req.user._id,
    senderModel: "Admin",
    message: message || "",
    attachments: buildAttachmentPaths(req.files),
  });
  await ticket.save();

  res.json({ message: "Reply sent", ticket });
});

// ADMIN: close a ticket
const closeTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  ticket.status = "CLOSED";
  await ticket.save();

  res.json({ message: "Ticket closed", ticket });
});

export {
  createTicket,
  getMyTickets,
  getMyTicketById,
  replyTicketByUser,
  getAllTickets,
  getTicketByIdAdmin,
  replyTicketByAdmin,
  closeTicket,
};
