import db from "../database/connection.js";
import bcrypt from "bcrypt";

export const dataAdmin = async (req, res) => {
  try {
    const role = "admin";
    const [dataAdmin] = await db.query("SELECT * FROM users WHERE role = ?", [
      role,
    ]);

    if (dataAdmin.length >= 0) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data Admin",
        dataAdmin,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

export const tambahAdmin = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({
        statusCode: 400,
        status: "Fail",
        error: true,
        message: "First name, last name, email & password wajib diisi",
      });
    }

    const [checkUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (checkUser.length > 0) {
      return res.status(409).json({
        statusCode: 409,
        status: "Fail",
        error: true,
        message: "Email sudah terdaftar",
      });
    }

    const passToString = password.toString();
    const hashPassword = await bcrypt.hash(passToString, 10);
    const role = "admin"

    const [insertData] = await db.query(
      "INSERT INTO users (role, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)",
      [role, first_name, last_name, email, hashPassword]
    );

    if (insertData.affectedRows == 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Admin Berhasil Ditambahkan",
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const [query] = await db.query("DELETE FROM users WHERE id_user = ?", [id]);

    if (query.affectedRows > 0) {
      return res.status(200).json({
        statusCode: 200,
        message: "Data admin berhasil dihapus",
      });
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      statusCode: 500,
      message: "Server error",
    });
  }
};


export const detailAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const [query] = await db.query("SELECT * FROM users WHERE id_user = ?", [id]);

    if (query.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: "failed",
        error: true,
        message: "Data admin tidak ditemukan",
      });
    }

    return res.status(200).json({
      statusCode: 200,
      status: "success",
      error: false,
      message: "Data admin",
      data: query[0]
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      statusCode: 500,
      message: "Server error",
    });
  }
};


export const updateAdmin = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const { id } = req.params;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({
        statusCode: 400,
        status: "Fail",
        error: true,
        message: "First name, last name, dan email wajib diisi",
      });
    }

    const [query] = await db.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id_user = ?",
      [first_name, last_name, email, id]
    )

    if (query.affectedRows === 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "Success",
        error: false,
        message: "Data admin berhasil diupdate"
      })
      
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};