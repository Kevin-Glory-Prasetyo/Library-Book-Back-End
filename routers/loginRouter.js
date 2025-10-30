import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
const router = Router();

import {userRegister, userLogin, userLogout} from '../controller/loginController.js';

router.post('/userRegister',userRegister)
router.post('/userLogin', userLogin)
// router.put('/changePassword', changePassword)
router.get("/checkLogin", verifyToken, (req, res) => {
  res.json({
    user: req.data.user
  });
});
router.get("/checkLogout", verifyToken, (req, res) => {
  res.status(200).json({
    user: req.data.user
  });
});
router.post("/logout", userLogout);


export default router

