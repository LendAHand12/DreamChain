import express from "express";
import {
  createTicket,
  getMyTickets,
  getMyTicketById,
  replyTicketByUser,
  getAllTickets,
  getTicketByIdAdmin,
  replyTicketByAdmin,
  closeTicket,
} from "../controllers/ticketControllers.js";
import { isAdmin, protectRoute } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";
import uploadTicket from "../middleware/uploadTicket.js";

const router = express.Router();

// User routes
router.route("/").post(protectRoute, uploadTicket.array("attachments", 5), createTicket);
router.route("/user").get(protectRoute, getMyTickets);
router.route("/user/:id").get(protectRoute, getMyTicketById);
router
  .route("/user/:id/reply")
  .post(protectRoute, uploadTicket.array("attachments", 5), replyTicketByUser);

// Admin routes
router.route("/").get(protectAdminRoute, isAdmin, getAllTickets);
router.route("/:id").get(protectAdminRoute, isAdmin, getTicketByIdAdmin);
router
  .route("/:id/reply")
  .post(protectAdminRoute, isAdmin, uploadTicket.array("attachments", 5), replyTicketByAdmin);
router.route("/:id/close").put(protectAdminRoute, isAdmin, closeTicket);

export default router;
