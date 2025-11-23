import { Router } from "express";
const router = Router();

import { dataPeminjaman, pinjam, updateStatus, kembalikanBuku } from "../controller/dataPeminjamanController.js";

router.get('/peminjaman',dataPeminjaman)
router.get('/peminjaman/:id',dataPeminjaman)
router.post('/tambahpeminjaman',pinjam)
router.put('/terima/:id',updateStatus)
router.patch('/kembalikan/:id',kembalikanBuku)

export default router;