import express from "express";
import {
  checkLinkRef,
  authUser,
  getAccessToken,
  registerUser,
  confirmUser,
  mailForEmailVerification,
  mailForPasswordReset,
  resetUserPassword,
  checkSendMail,
  getLinkVerify,
  updateData,
  getNewPass,
  registerSerepay,
  verifyOtp,
  resendOtp,
} from "../controllers/authControllers.js";

const router = express.Router();

router.route("/ref").post(checkLinkRef);
router.route("/checkSendMail").post(checkSendMail);
router.route("/updateData").get(updateData);
router.route("/getNewPass").get(getNewPass);
router.route("/register").post(registerUser);
// User login disabled by request — admin login is unaffected (see adminRoutes.js).
// authUser now just returns a 403 "disabled" response; uncomment the next line
// together with the original logic in authControllers.js to re-enable.
router.route("/login").post(authUser);
router.route("/confirm/:token").get(confirmUser);
router.route("/confirm").post(mailForEmailVerification);
router.route("/forgotPassword").post(mailForPasswordReset);
router.route("/resetPassword").put(resetUserPassword);
router.route("/refresh").post(getAccessToken);
router.route("/getLinkVerify").post(getLinkVerify);
router.route("/registerSerepay").post(registerSerepay);
router.route("/verify-otp").post(verifyOtp);
router.route("/resend-otp").post(resendOtp);

export default router;
