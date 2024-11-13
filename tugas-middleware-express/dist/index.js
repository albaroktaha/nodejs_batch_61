"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var fileUpload = require("express-fileupload");
const PORT = 3000;
function init() {
    const app = (0, express_1.default)();
    app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    }));
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
