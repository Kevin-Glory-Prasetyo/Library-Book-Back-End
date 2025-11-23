import db from "../database/connection.js";

export const dataPeminjaman = async (req, res) => {
  try {
    const [peminjaman] = await db.query(`
      SELECT 
      p.*,
      u.*,
      b.*
  FROM data_peminjaman AS p
  JOIN users AS u ON p.id_user = u.id_user
  JOIN data_buku AS b ON p.id_buku = b.id_buku;

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

export const pinjam = async (req, res) => {
  try {
    const { id_buku, id_user, tanggal_pinjam, tanggal_kembali } = req.body;
    const status_peminjaman = "menunggu";
    const [query] = await db.query(
      "INSERT INTO data_peminjaman (id_buku, id_user, tanggal_pinjam, tanggal_kembali, status_peminjaman) VALUES(?, ?, ?, ?, ?)",
      [id_buku, id_user, tanggal_pinjam, tanggal_kembali, status_peminjaman]
    );

    const [result] = await db.query(
      "UPDATE data_buku SET available_stock = available_stock - 1 WHERE id_buku = ?",
      [id_buku]
    );

    if (query.affectedRows == 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Peminjaman Berhasil",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = "dipinjam";
    const [query] = await db.query(
      "UPDATE data_peminjaman SET status_peminjaman = ? WHERE id_peminjaman = ?",
      [status, id]
    );

    if (query.affectedRows == 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

export const dataPeminjamanUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [peminjaman] = await db.query(
      `
      SELECT 
      p.*,
      u.*,
      b.*
  FROM data_peminjaman AS p
  JOIN users AS u ON p.id_user = u.id_user
  JOIN data_buku AS b ON p.id_buku = b.id_buku WHERE id_user = ?;

    `,
      [id]
    );

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

export const kembalikanBuku = async (req, res) => {
  try {
    const { id } = req.params; 

    const [peminjamanResult] = await db.query(
      `SELECT * FROM data_peminjaman WHERE id_peminjaman = ?`,
      [id]
    );

    if (peminjamanResult.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: "error",
        error: true,
        message: "Peminjaman tidak ditemukan",
      });
    }

    const peminjaman = peminjamanResult[0];
    const { id_buku, tanggal_kembali } = peminjaman;

    await db.query(
      `UPDATE data_buku SET available_stock = available_stock + 1 WHERE id_buku = ?`,
      [id_buku]
    );

    const sekarang = new Date();
    const statusPengembalian = sekarang <= new Date(tanggal_kembali) ? "tepat waktu" : "terlambat";

    const [updateResult] = await db.query(
      `
      UPDATE data_peminjaman
      SET 
        tanggal_pengembalian = ?,
        status_peminjaman = 'selesai',
        status_pengembalian = ?
      WHERE id_peminjaman = ?
      `,
      [sekarang, statusPengembalian, id]
    );

    if (updateResult.affectedRows === 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Buku berhasil dikembalikan",
      });
    }

    return res.status(500).json({
      statusCode: 500,
      status: "error",
      error: true,
      message: "Gagal mengupdate peminjaman",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      status: "error",
      error: true,
      message: "Error server",
    });
  }
};

