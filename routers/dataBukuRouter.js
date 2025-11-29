import { Router } from "express";
const router = Router();

import { dataBuku, detailBuku, addBuku, kategoriBuku, deleteBukuById, updateBuku, bukuTopPeminjam, getBukuByKategori } from "../controller/dataBukuController.js";
import uploadCover from "../middleware/upload_file.js";

router.get('/buku',dataBuku)

router.get('/topPeminjam',bukuTopPeminjam)
router.get('/detailbuku/:id',detailBuku)
// router.post("/tambahbuku", uploadCover.single("gambar"), addBuku);

router.post("/tambahbuku", uploadCover.single("gambar"), addBuku);
router.get("/kategori", kategoriBuku);
router.delete("/delete/:id", deleteBukuById);

router.put("/updatebuku/:id", uploadCover.single("gambar"), updateBuku);

router.get("/kategori",kategoriBuku);
router.get("/kategori/:id_kategori",getBukuByKategori);

export default router;