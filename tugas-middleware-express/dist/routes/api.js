"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_middleware_1 = require("../middlewares/upload.middleware");
const router = express_1.default.Router();
router.post("/upload/single", upload_middleware_1.single, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file,
    });
});
router.post("/upload/multiple", upload_middleware_1.multiple, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file,
    });
});
exports.default = router;
