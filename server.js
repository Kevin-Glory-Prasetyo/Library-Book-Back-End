import express from "express";
import bodyParser from "body-parser";
import loginRouter from "./routers/loginRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verifyToken } from "./middleware/verifyToken.js";
import dataUserRouter from "./routers/dataUserRouter.js"
import dataAdminRouter from "./routers/dataAdminRouter.js"
import dataBukuRouter from "./routers/dataBukuRouter.js"
import dataPeminjamanRputer from "./routers/dataPeminjamanRouter.js"


const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors({
  origin: ["http://localhost:5500", "http://localhost:5501"],
  credentials: true
}));
app.use("/buku", dataBukuRouter);

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", loginRouter);
app.use("/users", dataUserRouter);
app.use("/users", dataAdminRouter);
app.use("/peminjaman", dataPeminjamanRputer);
app.use("/uploads", express.static("uploads"));



app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
