// routers/passwordRouter.js
import express from "express";
import { sendOtp, verifyOtp, resetPassword } from "../controller/passwordController.js";

const router = express.Router();

// Route: /auth/password/...
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset", resetPassword);

export default router;