import { Router } from "express";
const router = Router();

import { dataPeminjaman, pinjam } from "../controller/dataPeminjamanController.js";

router.get('/peminjaman',dataPeminjaman)
router.post('/tambahpeminjaman',pinjam)

export default router;