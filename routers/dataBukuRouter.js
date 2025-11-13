import { Router } from "express";
const router = Router();

import { dataBuku } from "../controller/dataBukuController.js";

router.get('/buku',dataBuku)

export default router;