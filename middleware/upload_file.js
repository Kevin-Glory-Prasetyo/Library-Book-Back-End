import multer from "multer";
import path from "path";

const penyimpananCover = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const namaFileBaru = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
        cb(null, namaFileBaru);
    },
});

const uploadCover = multer({ storage: penyimpananCover });

export default uploadCover;