// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"; 


dotenv.config();

// Import Routers
import loginRouter from "./routers/loginRouter.js";
import dataUserRouter from "./routers/dataUserRouter.js";
import dataAdminRouter from "./routers/dataAdminRouter.js";
import dataBukuRouter from "./routers/dataBukuRouter.js";
import dataPeminjamanRputer from "./routers/dataPeminjamanRouter.js";
import favoritRouter from "./routers/favoritRouter.js";
import passwordRouter from "./routers/passwordRouter.js"; 


const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:5500", "http://localhost:5501", "http://127.0.0.1:5500"], // Tambahkan IP local jika perlu
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

// ROUTES
app.use("/auth", loginRouter);
app.use("/buku", dataBukuRouter);
app.use("/users", dataUserRouter);
app.use("/users", dataAdminRouter);
app.use("/peminjaman", dataPeminjamanRputer);

// untuk akses gambar: http://localhost:8000/uploads/namafile.jpg
app.use("/uploads", express.static("uploads"));

// Favorit 
app.use("/favorit", favoritRouter);

// OTP Password ---
app.use("/auth/password", passwordRouter);

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});