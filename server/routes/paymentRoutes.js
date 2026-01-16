import express from "express";
import {
  getPaymentInfo,
  addPayment,
  getAllPayments,
  getPaymentsOfUser,
  getPaymentDetail,
  checkCanRefundPayment,
  changeToRefunded,
  onAdminDoneRefund,
  getParentWithCount,
  getAllTransForExport,
  onDonePayment,
  getPaymentNextTierInfo,
  onDoneNextTierPayment,
  getDebt175PaymentInfo,
  onDoneDebt175Payment
} from "../controllers/paymentControllers.js";
import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/getParentWithCount").post(getParentWithCount);

router.route("/info").get(protectRoute, getPaymentInfo);
router.route("/infoNextTier").get(protectRoute, getPaymentNextTierInfo);
router.route("/user").get(protectAdminRoute, isAdmin, getAllPayments);
router
  .route("/getAllTransForExport")
  .post(protectAdminRoute, isAdmin, getAllTransForExport);
router
  .route("/")
  .get(protectRoute, getPaymentsOfUser)
  .post(protectRoute, addPayment);

router.route("/done").post(protectRoute, onDonePayment);
router.route("/doneNextTier").post(protectRoute, onDoneNextTierPayment);
router.route("/debt175/info").get(protectRoute, getDebt175PaymentInfo);
router.route("/debt175/done").post(protectRoute, onDoneDebt175Payment);

router.route("/:id").get(protectAdminRoute, isAdmin, getPaymentDetail);
router
  .route("/checkCanRefund")
  .post(protectAdminRoute, isAdmin, checkCanRefundPayment);

router.route("/changeToRefunded").post(protectAdminRoute, isAdmin, changeToRefunded);
router
  .route("/onAdminDoneRefund")
  .post(protectAdminRoute, isAdmin, onAdminDoneRefund);

export default router;
