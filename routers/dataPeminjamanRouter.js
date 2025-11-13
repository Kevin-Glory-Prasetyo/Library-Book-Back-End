import { Router } from "express";
const router = Router();

import { dataPeminjaman } from "../controller/dataPeminjamanController.js";

router.get('/peminjaman',dataPeminjaman)

export default router;