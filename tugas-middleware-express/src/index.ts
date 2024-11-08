import express, { Request, Response } from 'express';
import multer from 'multer';
const cloudinary = require('./utils/cloudinary');
const multerStorageCloudinary = require('./middlewares/upload.middleware');

const PORT = 3000;
const app = express();

// Inisialisasi Multer Storage untuk Cloudinary
const storage = multerStorageCloudinary({
  cloudinary: cloudinary,
  allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
});

const uploadSingle = multer({ storage: storage }).single('file');  // Untuk upload satu file
const uploadMultiple = multer({ storage: storage }).array('files', 10);  // Untuk upload banyak file

function init() {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Route untuk upload file satuan
  app.post('/single', (req: Request, res: Response) => {
    uploadSingle(req, res, (err: any) => {  // Tipe 'err' bisa 'Error' atau 'null'
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
  app.post('/multiple', (req: Request, res: Response) => {
    uploadMultiple(req, res, (err: any) => {  // Tipe 'err' bisa 'Error' atau 'null'
      if (err) {
        return res.status(500).json({ message: 'Error uploading files', error: err });
      }

      // Pengecekan apakah req.files ada
      if (!req.files) {
        return res.status(400).json({ message: 'No files uploaded' });
      }

      // Mendapatkan URL untuk setiap file yang diupload
      const fileUrls = (req.files as Express.Multer.File[]).map((file: Express.Multer.File) => file.path); // Mendeklarasikan tipe 'file'
      res.json({ message: 'Files uploaded successfully', urls: fileUrls });
    });
  });

  // Menjalankan server pada port 3000
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
