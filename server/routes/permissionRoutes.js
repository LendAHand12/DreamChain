import express from "express";
import {
  getAllPermissions,
  getPermissionsById,
  createPermission,
  updatePermission,
} from "../controllers/permissionControllers.js";
import {
  checkPermission,
  isAdmin,
  protectRoute,
} from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router
  .route("/")
  .get(protectAdminRoute, getAllPermissions)
  .post(protectAdminRoute, createPermission);

router
  .route("/:id")
  .get(protectAdminRoute, getPermissionsById)
  .put(protectAdminRoute, updatePermission);

export default router;
