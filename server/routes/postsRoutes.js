import express from "express";
import {
  createPosts,
  getAllPosts,
  getPostById,
  updatePosts,
  deletePostById,
} from "../controllers/postControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import uploadLocal from "../middleware/uploadLocal.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router
  .route("/")
  .get(getAllPosts)
  .post(
    uploadLocal.fields([
      { name: "file_vn", maxCount: 1 },
      ,
      { name: "file_en", maxCount: 1 },
    ]),
    protectAdminRoute,
    isAdmin,
    createPosts
  );

router
  .route("/:id")
  .get(getPostById)
  .put(
    uploadLocal.fields([
      { name: "file_vn", maxCount: 1 },
      ,
      { name: "file_en", maxCount: 1 },
    ]),
    protectAdminRoute,
    isAdmin,
    updatePosts
  )
  .delete(protectAdminRoute, isAdmin, deletePostById);

export default router;
