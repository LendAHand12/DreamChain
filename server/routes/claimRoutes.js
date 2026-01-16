import express from "express";
import {
  claimHewe,
  claimUsdt,
  getAllClaims,
  getAllClaimsForExport,
  getAllClaimsOfUser,
  resetProcessing,
} from "../controllers/claimHeweControllers.js";
import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/hewe").post(protectRoute, claimHewe);
router.route("/usdt").post(claimUsdt);
router.route("/list").get(protectAdminRoute, isAdmin, getAllClaims);
router.route("/export").post(protectAdminRoute, isAdmin, getAllClaimsForExport);
router.route("/user").get(protectRoute, getAllClaimsOfUser);
router.route("/reset").get(protectAdminRoute, isAdmin, resetProcessing);

export default router;
