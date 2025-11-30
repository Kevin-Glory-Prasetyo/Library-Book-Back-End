import { Router } from "express";
const router = Router();

import { dataPeminjaman, dataPeminjamanUser, pinjam, updateStatus, kembalikanBuku } from "../controller/dataPeminjamanController.js";

router.get('/peminjaman',dataPeminjaman)
router.get('/peminjaman/:id',dataPeminjamanUser)
router.post('/tambahpeminjaman',pinjam)
router.put('/terima/:id',updateStatus)
router.patch('/kembalikan/:id',kembalikanBuku)

export default router;