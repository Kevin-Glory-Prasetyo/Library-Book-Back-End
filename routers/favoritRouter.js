import { Router } from "express";
import {
  addFavorit,
  deleteFavorit,
  getFavoritByUser,
  checkFavoritStatus,
} from "../controller/favoritController.js";

const router = Router();

// Endpoint
router.post("/add", addFavorit);           // Tambah
router.delete("/remove", deleteFavorit);   // Hapus (Pakai method DELETE tapi kirim body JSON)
router.get("/list/:id_user", getFavoritByUser); // Get List
router.get("/check/:id_user/:id_buku", checkFavoritStatus); // Cek status

export default router;