import db from "../database/connection.js";
import fs from "fs";
import path from "path";

export const dataBuku = async (req, res) => {
  try {
    const [dataBuku] = await db.query(
      "SELECT data_buku.*,categories.name FROM data_buku INNER JOIN categories ON data_buku.id_kategori = categories.id_kategori"
    );

    if (dataBuku.length >= 0) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data Buku",
        dataBuku,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

export const detailBuku = async (req, res) => {
  try {
    const { id } = req.params;

    const [data] = await db.query(
      `SELECT data_buku.*, categories.name 
       FROM data_buku 
       INNER JOIN categories 
       ON data_buku.id_kategori = categories.id_kategori
       WHERE data_buku.id_buku = ?`,
      [id]
    );

    if (data.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: "failed",
        error: true,
        message: "Buku tidak ditemukan",
      });
    }

    return res.status(200).json({
      statusCode: 200,
      status: "success",
      error: false,
      message: "Detail Buku",
      data: data[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error server",
    });
  }
};

export const addBuku = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        statusCode: 400,
        status: "error",
        error: true,
        message: "Gambar buku wajib diupload",
      });
    }

    const {
      judul_buku,
      penulis_buku,
      id_kategori,
      penerbit_buku,
      tahun_terbit,
      deskripsi_buku,
      total_stock,
    } = req.body;

    const idKategori = parseInt(id_kategori, 10);
    const tahunTerbit = parseInt(tahun_terbit, 10);
    const stokTotal = parseInt(total_stock, 10);
    const availableStock = stokTotal;

    const gambar = `/uploads/${req.file.filename}`;

    const [result] = await db.query(
      `INSERT INTO data_buku 
        (judul_buku, penulis_buku, id_kategori, penerbit_buku, tahun_terbit, deskripsi_buku, total_stock, available_stock, gambar_buku)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        judul_buku,
        penulis_buku,
        idKategori,
        penerbit_buku,
        tahunTerbit,
        deskripsi_buku,
        stokTotal,
        availableStock,
        gambar,
      ]
    );

    if (result.affectedRows > 0) {
      return res.status(201).json({
        statusCode: 201,
        status: "success",
        error: false,
        message: "Buku berhasil ditambahkan",
      });
    }
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

export const kategoriBuku = async (req, res) => {
  try {
    const [kategori] = await db.query("SELECT * FROM categories");
    res.status(200).json({
      statusCode: 200,
      status: "success",
      kategori,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error server" });
  }
};

export const deleteBukuById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query("SELECT * FROM data_buku WHERE id_buku = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        message: "Buku tidak ditemukan",
      });
    }

    const buku = rows[0];

    if (buku.gambar_buku) {
      const cleanedPath = buku.gambar_buku.replace(/^\//, "");
      const filePath = path.join(process.cwd(), cleanedPath);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await db.query("DELETE FROM data_buku WHERE id_buku = ?", [id]);

    return res.status(200).json({
      statusCode: 200,
      message: "Buku dan file berhasil dihapus",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: "Server error",
    });
  }
};

export const updateBuku = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query("SELECT * FROM data_buku WHERE id_buku = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: "failed",
        error: true,
        message: "Buku tidak ditemukan",
      });
    }

    const bukuLama = rows[0];

    // Ambil data dari request
    const {
      judul_buku,
      penulis_buku,
      id_kategori,
      penerbit_buku,
      tahun_terbit,
      total_stock,
      deskripsi_buku,
    } = req.body;


    let gambar = bukuLama.gambar_buku; 
    if (req.file) {
      if (bukuLama.gambar_buku) {
        const cleanedPath = bukuLama.gambar_buku.replace(/^\//, "");
        const filePath = path.join(process.cwd(), cleanedPath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      gambar = `/uploads/${req.file.filename}`;
    }

    let stokBaru = total_stock - bukuLama.total_stock
    let stokTersedia = bukuLama.available_stock + stokBaru


    const [result] = await db.query(
      `UPDATE data_buku SET 
        judul_buku = ?, 
        penulis_buku = ?, 
        id_kategori = ?, 
        penerbit_buku = ?, 
        tahun_terbit = ?, 
        deskripsi_buku = ?, 
        total_stock = ?, 
        available_stock = ?, 
        gambar_buku = ?
       WHERE id_buku = ?`,
      [
        judul_buku,
        penulis_buku,
        parseInt(id_kategori, 10),
        penerbit_buku,
        parseInt(tahun_terbit, 10),
        deskripsi_buku,
        parseInt(total_stock, 10),
        parseInt(stokTersedia, 10),
        gambar,
        id,
      ]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Buku berhasil diperbarui",
      });
    }

    return res.status(400).json({
      statusCode: 400,
      status: "failed",
      error: true,
      message: "Tidak ada perubahan data",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      status: "error",
      error: true,
      message: "Server error",
    });
  }
};

export const bukuTopPeminjam = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        id_buku,
        judul_buku,
        penulis_buku,
        penerbit_buku,
        total_stock,
        available_stock,
        gambar_buku,
        (total_stock - available_stock) AS jumlah_dipinjam
      FROM data_buku
      ORDER BY jumlah_dipinjam DESC
      LIMIT 5
    `);

    res.status(200).json({
      status: "success",
      data: rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


