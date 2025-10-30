import express from "express";
import bodyParser from "body-parser";
import loginRouter from "./routers/loginRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verifyToken } from "./middleware/verifyToken.js";


const app = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5500", 
  credentials: true
}));

app.use("/auth", loginRouter);
// app.get("/profile", verifyToken, (req, res) => {
//   res.json({
//     message: "Token valid, user terautentikasi.",
//     user: req.user
//   });
// });

// app.get("/admin", verifyToken, (req, res) => {
//   if (req.data.user.role !== "admin") {
//     return res.status(403).json({ message: "Akses ditolak. Hanya admin yang boleh mengakses." });
//   }
//   res.json({
//     message: `Selamat datang Admin ${req.data.user.first_name} ${req.data.user.last_name}!`,
//     user: req.data.user
//   });
// });

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
