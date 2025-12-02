// controller/passwordController.js
import db from "../database/connection.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Pastikan env loaded

// Konfigurasi Transporter Email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 1. SEND OTP
export const sendOtp = async (req, res) => {
  const { user_email } = req.body;

  if (!user_email) {
    return res.status(400).json({ statusCode: 400, message: "Email wajib diisi." });
  }

  try {
    // Cek apakah user ada
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [user_email]);
    if (user.length === 0) {
      return res.status(404).json({ statusCode: 404, message: "Email tidak terdaftar." });
    }

    // Generate OTP & Expiry
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 Menit dari sekarang

    // BERSIHKAN OTP LAMA: Hapus OTP lama user ini agar tidak menumpuk
    await db.query("DELETE FROM password_resets WHERE email = ?", [user_email]);

    // Simpan OTP Baru
    await db.query("INSERT INTO password_resets (email, otp, expires_at) VALUES (?, ?, ?)", [
      user_email,
      otp,
      expiresAt,
    ]);

    // Template Email (Format Modern)
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4A90E2; padding: 20px; text-align: center;">
          <h2 style="color: #fff; margin: 0;">Library App</h2>
        </div>
        <div style="padding: 20px;">
          <p>Halo,</p>
          <p>Kami menerima permintaan untuk mengatur ulang kata sandi akun Anda di <b>Library App</b>.</p>
          <p>Gunakan kode verifikasi berikut:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #4A90E2; border: 1px dashed #4A90E2; padding: 10px 20px; border-radius: 5px; background-color: #f9f9f9;">
              ${otp}
            </span>
          </div>

          <p style="font-size: 14px; color: #555;">Kode berlaku selama <b>5 menit</b>.</p>
          <p style="font-size: 14px; color: #555;">Jika Anda tidak meminta reset password, abaikan email ini.</p>
        </div>
        <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
          <p>&copy; ${new Date().getFullYear()} XCode Library App. All rights reserved.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"XCode Library" <${process.env.EMAIL_USER}>`,
      to: user_email,
      subject: "Verifikasi Reset Password - Library App",
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ statusCode: 200, message: "OTP berhasil dikirim ke email." });

  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ statusCode: 500, message: "Terjadi kesalahan server.", error: error.message });
  }
};

// 2. VERIFY OTP
export const verifyOtp = async (req, res) => {
  const { user_email, otp } = req.body;

  if (!user_email || !otp) {
    return res.status(400).json({ statusCode: 400, message: "Email dan OTP wajib diisi." });
  }

  try {
    // Gunakan parameter ? untuk waktu sekarang agar aman dari perbedaan zona waktu DB
    const currentTime = new Date();

    const [result] = await db.query(
      "SELECT * FROM password_resets WHERE email = ? AND otp = ? AND expires_at > ? ORDER BY created_at DESC LIMIT 1",
      [user_email, otp, currentTime]
    );

    if (result.length === 0) {
      return res.status(400).json({ statusCode: 400, message: "Kode OTP salah atau sudah kadaluarsa." });
    }

    // Opsional: Langsung hapus OTP setelah berhasil diverifikasi agar tidak bisa dipakai ulang
    // await db.query("DELETE FROM password_resets WHERE email = ?", [user_email]);

    res.status(200).json({ statusCode: 200, message: "OTP Valid." });

  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ statusCode: 500, message: "Terjadi kesalahan server." });
  }
};

// 3. RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { user_email, new_password, confirm_password } = req.body;

  if (!user_email || !new_password || !confirm_password) {
    return res.status(400).json({ statusCode: 400, message: "Semua kolom wajib diisi." });
  }

  if (new_password !== confirm_password) {
    return res.status(400).json({ statusCode: 400, message: "Password konfirmasi tidak cocok." });
  }
  
  // Validasi panjang password (Opsional tapi disarankan)
  if (new_password.length < 6) {
    return res.status(400).json({ statusCode: 400, message: "Password minimal 6 karakter." });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);

    // Update password user
    const [updateResult] = await db.query("UPDATE users SET password = ? WHERE email = ?", [hashedPassword, user_email]);

    // Cek apakah ada baris yang ter-update (mengantisipasi jika email tidak ada di tabel users)
    if (updateResult.affectedRows === 0) {
       return res.status(404).json({ statusCode: 404, message: "User tidak ditemukan." });
    }

    // Hapus data di password_resets agar bersih
    await db.query("DELETE FROM password_resets WHERE email = ?", [user_email]);

    res.status(200).json({ statusCode: 200, message: "Password berhasil diubah. Silahkan login." });

  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ statusCode: 500, message: "Gagal mereset password." });
  }
};