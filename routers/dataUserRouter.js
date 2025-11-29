// routers/dataUserRouter.js
import { Router } from "express";
const router = Router();

import {
  dataUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/dataUserController.js";

import { verifyToken } from "../middleware/verifyToken.js";
import uploadCover from "../middleware/upload_file.js";

// list semua user role "user"
router.get("/user", dataUser);

// ambil profile user yang sedang login
router.get("/profile", verifyToken, getUserProfile);

// update profile user yang sedang login + foto
router.put(
  "/profile",
  verifyToken,
  uploadCover.single("photo"), // field name = "photo"
  updateUserProfile
);

export default router;
