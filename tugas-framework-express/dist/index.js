"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path = require('path');
const PORT = 3000;
function init() {
    // Middleware untuk log setiap permintaan
    app.use((req, res, next) => {
        console.log(`${req.method} request for '${req.url}'`);
        next();
    });
    // Melayani file statis dari direktori "public"
    app.use(express_1.default.static(path.join(__dirname, '../public')));
    app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });
    // Route untuk /hello
    app.get('/hello', (req, res) => {
        res.json({
            message: 'Success fetch message',
            data: 'Hello World!'
        });
    });
    // Route untuk /user
    app.get('/user', (req, res) => {
        res.json({
            message: 'Success fetch user',
            data: {
                id: 1,
                name: 'Budi',
                username: 'budidu',
                email: 'budidu@mail.com'
            }
        });
    });
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
