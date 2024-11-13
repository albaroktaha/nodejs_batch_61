import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";

const router = express.Router();

router.post("/upload/single", single, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
        }
        res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file,
        });
});
router.post("/upload/multiple", multiple, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
        }
        res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file,
        });
});

export default router;
