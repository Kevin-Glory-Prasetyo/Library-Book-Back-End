import db from "../database/connection.js";

// 1. Tambah ke Favorit
export const addFavorit = async (req, res) => {
  try {
    const { id_user, id_buku } = req.body;

    // Cek apakah sudah ada
    const [existing] = await db.query(
      "SELECT * FROM favorit WHERE id_user = ? AND id_buku = ?",
      [id_user, id_buku]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        statusCode: 400,
        message: "Buku sudah ada di favorit",
      });
    }

    await db.query("INSERT INTO favorit (id_user, id_buku) VALUES (?, ?)", [
      id_user,
      id_buku,
    ]);

    res.status(201).json({
      statusCode: 201,
      message: "Berhasil ditambahkan ke favorit",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// 2. Hapus dari Favorit
export const deleteFavorit = async (req, res) => {
  try {
    const { id_user, id_buku } = req.body;

    await db.query("DELETE FROM favorit WHERE id_user = ? AND id_buku = ?", [
      id_user,
      id_buku,
    ]);

    res.status(200).json({
      statusCode: 200,
      message: "Berhasil dihapus dari favorit",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// 3. Ambil List Favorit User (Untuk Halaman Favorit)
export const getFavoritByUser = async (req, res) => {
  try {
    const { id_user } = req.params;

    const [rows] = await db.query(
      `SELECT f.id_favorit, f.created_at, b.* FROM favorit f
       JOIN data_buku b ON f.id_buku = b.id_buku
       WHERE f.id_user = ?
       ORDER BY f.created_at DESC`,
      [id_user]
    );

    res.status(200).json({
      statusCode: 200,
      message: "List Favorit",
      data: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// 4. Cek Status Favorit (Untuk Halaman Detail Buku - warna bintang)
export const checkFavoritStatus = async (req, res) => {
  try {
    const { id_user, id_buku } = req.params;

    const [rows] = await db.query(
      "SELECT * FROM favorit WHERE id_user = ? AND id_buku = ?",
      [id_user, id_buku]
    );

    const isFavorite = rows.length > 0;

    res.status(200).json({
      statusCode: 200,
      isFavorite: isFavorite,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};