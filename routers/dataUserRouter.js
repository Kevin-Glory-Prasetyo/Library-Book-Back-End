import { Router } from "express";
const router = Router();

import { dataUser } from "../controller/dataUserController.js";

router.get('/user',dataUser)

export default router;