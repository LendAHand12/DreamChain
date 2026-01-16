import express from "express";
import {
  getAllUserHisotry,
  updateUserHistory,
  connectWallet,
  getAllConnectWallets,
} from "../controllers/userHistoryControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router
  .route("/")
  .get(protectAdminRoute, isAdmin, getAllUserHisotry)
  .put(protectAdminRoute, isAdmin, updateUserHistory);
router.route("/connect-wallet").post(protectRoute, connectWallet);
router.route("/connect-wallet-list").get(protectAdminRoute, isAdmin, getAllConnectWallets);

export default router;
