import express from "express";
import {
  runCronjob
} from "../controllers/cronjobControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/run").post(protectAdminRoute, isAdmin, runCronjob);

export default router;
