import express from "express";
import {
  getAllWithdraws,
  updateWithdraw,
  getAllWithdrawsForExport,
  getWithdrawsOfUser,
} from "../controllers/withdrawControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/").get(protectAdminRoute, isAdmin, getAllWithdraws);
router.route("/export").post(protectAdminRoute, isAdmin, getAllWithdrawsForExport);
router.route("/user").get(protectRoute, getWithdrawsOfUser);
router.route("/:id").put(protectAdminRoute, isAdmin, updateWithdraw);

export default router;
