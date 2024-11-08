"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_middleware_1 = require("../middlewares/upload.middleware");
const router = express_1.default.Router();
router.get("/upload/single", upload_middleware_1.single, (req, res) => { });
router.get("/upload/multiple", upload_middleware_1.multiple, (req, res) => { });
exports.default = router;
