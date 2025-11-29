// controller/dataUserController.js
import db from "../database/connection.js";
import bcrypt from "bcrypt";
import fs from "fs";

// ================== LIST USER ROLE "user" (yang lama) ==================
export const dataUser = async (req, res) => {
  try {
    const role = "user";
    const [dataUser] = await db.query(
      "SELECT * FROM users WHERE role = ?",
      [role]
    );

    if (dataUser.length >= 0) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data User",
        dataUser,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};

// ================== GET PROFILE USER LOGIN ==================
export const getUserProfile = async (req, res) => {
  try {
    // dari verifyToken: req.data = { user: decoded }
    const { id } = req.data.user; // id = id_user di tabel

    const [rows] = await db.query(
      "SELECT id_user, role, first_name, last_name, email, photo FROM users WHERE id_user = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: "Fail",
        error: true,
        message: "User tidak ditemukan",
      });
    }

    return res.status(200).json({
      statusCode: 200,
      status: "success",
      error: false,
      message: "Get profile user",
      data: rows[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      status: "Fail",
      error: true,
      message: "Error server",
    });
  }
};

// ================== UPDATE PROFILE USER LOGIN ==================
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.data.user; // id_user
    const { first_name, last_name, email, password } = req.body;
    const file = req.file;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({
        statusCode: 400,
        status: "Fail",
        error: true,
        message: "First name, last name & email wajib diisi",
      });
    }

    const [rows] = await db.query(
      "SELECT * FROM users WHERE id_user = ?",
      [id]
    );

    if (rows.length === 0) {
      if (file) fs.existsSync(`uploads/${file.filename}`) && fs.unlinkSync(`uploads/${file.filename}`);
      return res.status(404).json({
        statusCode: 404,
        status: "Fail",
        error: true,
        message: "User tidak ditemukan",
      });
    }

    const user = rows[0];

    let newPassword = user.password;
    if (password && password.toString().trim() !== "") {
      const passToString = password.toString();
      newPassword = await bcrypt.hash(passToString, 10);
    }

    // Update Foto Profil 
    let newPhoto = user.photo;
    if(file){
      if(user.photo){
        const oldPath = 'uploads/${user.photo}';
        if(fs.existsSync(oldPath)){
          fs.unlink(oldPath,(err)=>{
            if(err) console.error ("Gagal menghapus foto lama",err.message)
          })
        }
      }
      newPhoto = file.filename;
    }

    const [updateResult] = await db.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?,photo = ? WHERE id_user = ?",
      [first_name, last_name, email, newPassword, newPhoto,id]
    );

    if (updateResult.affectedRows === 1) {
      return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Profile berhasil diupdate",
        data: {
          id_user: id,
          role: user.role,
          first_name,
          last_name,
          email,
          photo:newPhoto,
        },
      });
    } else {
      return res.status(500).json({
        statusCode: 500,
        status: "Fail",
        error: true,
        message: "Gagal mengupdate profile",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      status: "Fail",
      error: true,
      message: "Error server",
    });
  }
};
