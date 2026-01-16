import express from "express";
import {
  getAllConfigs, update
} from "../controllers/configControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/").get(protectAdminRoute, isAdmin, getAllConfigs).post(protectAdminRoute, isAdmin, update);;

export default router;
