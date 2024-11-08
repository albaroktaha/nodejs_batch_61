"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cloudinary = require('./utils/cloudinary');
const multerStorageCloudinary = require('./middlewares/upload.middleware');
const PORT = 3000;
const app = (0, express_1.default)();
// Inisialisasi Multer Storage untuk Cloudinary
const storage = multerStorageCloudinary({
    cloudinary: cloudinary,
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
});
const uploadSingle = (0, multer_1.default)({ storage: storage }).single('file'); // Untuk upload satu file
const uploadMultiple = (0, multer_1.default)({ storage: storage }).array('files', 10); // Untuk upload banyak file
function init() {
    app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });
    // Route untuk upload file satuan
    app.post('/single', (req, res) => {
        uploadSingle(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error uploading file', error: err });
            }
            // Pengecekan apakah req.file ada
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            res.json({ message: 'File uploaded successfully', url: req.file.path });
        });
    });
    // Route untuk upload file lebih dari satu
    app.post('/multiple', (req, res) => {
        uploadMultiple(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error uploading files', error: err });
            }
            // Pengecekan apakah req.files ada
            if (!req.files) {
                return res.status(400).json({ message: 'No files uploaded' });
            }
            // Mendapatkan URL untuk setiap file yang diupload
            const fileUrls = req.files.map((file) => file.path); // Mendeklarasikan tipe 'file'
            res.json({ message: 'Files uploaded successfully', urls: fileUrls });
        });
    });
    // Menjalankan server pada port 3000
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
