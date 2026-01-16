import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Permission from "../models/permissionModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  // if the header includes a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get only the token string
      token = req.headers.authorization.split(" ")[1];

      // decode the token to get the corresponding user's id
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_ACCESS_TOKEN_SECRET
      );

      // Try to find as User first, then as Admin
      req.user = await User.findById(decodedToken.id).select("-password");
      if (!req.user) {
        // If not found as User, try Admin
        req.admin = await Admin.findById(decodedToken.id).select("-password -googleAuthenticatorSecret");
        if (!req.admin || !req.admin.isActive) {
          res.status(401);
          throw new Error("Not authorised. User/Admin not found or inactive");
        }
        // Set user object for compatibility with existing code
        req.user = {
          _id: req.admin._id,
          email: req.admin.email,
          isAdmin: true,
          role: req.admin.role || "admin", // Use actual role from Admin model
          isRootAdmin: req.admin.isRootAdmin,
        };
      }
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorised. Token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorised. No token provided");
  }
});

const isAdmin = asyncHandler((req, res, next) => {
  if (req.user.isAdmin || (req.user && req.user.role !== "user")) next();
  else {
    res.status(401);
    throw new Error("Not authorised admin");
  }
});

const isSuperAdmin = asyncHandler((req, res, next) => {
  if (req.user.isAdmin || (req.user && req.user.role === "admin")) next();
  else {
    res.status(401);
    throw new Error("Not authorised admin");
  }
});

const checkPermission = asyncHandler(async (req, res, next) => {
  const method = req.method;
  const pageNameHeader = req.headers["page-path"];
  if (req.user && req.user.role) {
    const userRole = req.user.role;
    if (userRole === "admin") {
      next();
    } else {
      const permission = pagePermissions.find(
        (ele) => ele.pageName === pageNameHeader && ele.method === method
      );
      console.log({ permission });
      const permissions = await Permission.findOne({ role: userRole }).populate(
        "pagePermissions.page"
      );
      for (let page of permissions.pagePermissions) {
        console.log({ page });
      }
      const page = permissions.pagePermissions.find(
        (ele) => ele.page.pageName === pageNameHeader
      );
      if (page) {
      } else {
        res.status(401);
        throw new Error("Access denied");
      }
      console.log({ page });
    }
  } else {
    res.status(401);
    throw new Error("Not authorised");
  }
});

export { protectRoute, isAdmin, checkPermission, isSuperAdmin };
