import express from "express";
import {
  getUserProfile,
  getAllUsers,
  getUserById,
  updateUser,
  changeStatusUser,
  getTree,
  getListChildOfUser,
  getTreeOfUser,
  getChildsOfUserForTree,
  getAllUsersWithKeyword,
  changeSystem,
  getChildrenList,
  getAllDeletedUsers,
  getAllUsersForExport,
  mailForChangeWallet,
  changeWallet,
  adminUpdateUser,
  adminDeleteUser,
  onAcceptIncreaseTier,
  adminCreateUser,
  getListNextUserWithTier,
  getUsersWithTier,
  changeNextUserTier,
  getLastUserInTier,
  removeLastUserInTier,
  createAdmin,
  getListAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById,
  getUserInfo,
  adminChangeWalletUser,
  getListChildNotEnoughBranchOfUser,
  getListUserForCreateAdmin,
  getAllUsersTier2,
} from "../controllers/userControllers.js";
import { protectRoute, isAdmin, isSuperAdmin } from "../middleware/authMiddleware.js";
import uploadCCCD from "../middleware/uploadCCCD.js";
import { protectAdminRoute } from "../controllers/adminControllers.js";

const router = express.Router();

router.route("/").get(protectAdminRoute, isAdmin, getAllUsers);
router.route("/info").get(protectRoute, getUserInfo);
router.route("/getAllDeletedUsers").get(protectAdminRoute, isAdmin, getAllDeletedUsers);
router.route("/profile").get(protectRoute, getUserProfile);
router
  .route("/changeWallet")
  .get(protectRoute, mailForChangeWallet)
  .post(protectRoute, changeWallet);
router.route("/status").put(protectAdminRoute, isAdmin, changeStatusUser);
router.route("/tree").get(protectRoute, getTree);
router.route("/tree/:id").get(protectAdminRoute, isAdmin, getTreeOfUser);
router.route("/treeNode").post(protectRoute, getChildsOfUserForTree);
router.route("/changeSystem").post(protectAdminRoute, isAdmin, changeSystem);
router.route("/getAllUsersForExport").post(protectAdminRoute, isAdmin, getAllUsersForExport);

router.route("/getAllUsersWithKeyword").post(protectAdminRoute, isAdmin, getAllUsersWithKeyword);
router.route("/listChild").get(protectRoute, getListChildOfUser);
router.route("/listChildLteBranch").get(protectRoute, getListChildNotEnoughBranchOfUser);
router.route("/listChildForCreateAdmin").get(protectAdminRoute, isAdmin, getListUserForCreateAdmin);
router.route("/change-wallet").put(protectAdminRoute, isAdmin, adminChangeWalletUser);

router
  .route("/admin")
  .get(protectAdminRoute, isSuperAdmin, getListAdmin)
  .post(protectAdminRoute, isSuperAdmin, createAdmin);

router
  .route("/admin/:id")
  .get(protectAdminRoute, isSuperAdmin, getAdminById)
  .put(protectAdminRoute, isSuperAdmin, updateAdmin)
  .delete(protectAdminRoute, isSuperAdmin, deleteAdmin);

router.route("/tiers/2").get(protectRoute, getAllUsersTier2);

router
  .route("/:id")
  .delete(protectAdminRoute, isAdmin, adminDeleteUser)
  .get(protectAdminRoute, isAdmin, getUserById)
  .put(
    protectRoute,
    uploadCCCD.fields([
      { name: "imgFront", maxCount: 1 },
      { name: "imgBack", maxCount: 1 },
    ]),
    updateUser
  );

router.route("/update/:id").post(
  protectAdminRoute,
  isAdmin,
  uploadCCCD.fields([
    { name: "imgFront", maxCount: 1 },
    { name: "imgBack", maxCount: 1 },
  ]),
  adminUpdateUser
);

router.route("/tier/increase").post(protectRoute, onAcceptIncreaseTier);

router.route("/create").post(
  uploadCCCD.fields([
    { name: "imgFront", maxCount: 1 },
    { name: "imgBack", maxCount: 1 },
  ]),
  protectAdminRoute,
  isAdmin,
  adminCreateUser
);

router.route("/listNextUserTier").post(protectAdminRoute, isAdmin, getListNextUserWithTier);

router.route("/getUsersWithTier").post(protectAdminRoute, isAdmin, getUsersWithTier);

router.route("/changeNextUserTier").post(protectAdminRoute, isAdmin, changeNextUserTier);

router.route("/getLastUserInTier").post(protectAdminRoute, isAdmin, getLastUserInTier);

router.route("/removeLastUserInTier").post(protectAdminRoute, isAdmin, removeLastUserInTier);

export default router;
