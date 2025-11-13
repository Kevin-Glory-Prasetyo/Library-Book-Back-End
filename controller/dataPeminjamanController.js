import db from "../database/connection.js";

export const dataPeminjaman = async (req, res) => {
  try {
    const [peminjaman] = await db.query(`
      SELECT 
        p.id_peminjaman,
        u.first_name AS nama_depan,
        u.last_name AS nama_belakang,
        b.judul_buku,
        p.tanggal_pinjam,
        p.tanggal_kembali,
        p.tanggal_pengembalian,
        p.status_peminjaman
      FROM data_peminjaman AS p
      JOIN users AS u ON p.id_user = u.id_user
      JOIN data_buku AS b ON p.id_buku = b.id_buku
    `);

    if (peminjaman.length >= 0) {
        return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data Peminjaman",
        peminjaman,
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};
