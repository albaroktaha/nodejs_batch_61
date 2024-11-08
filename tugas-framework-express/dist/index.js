"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const app = express();
// // const path = require('path');
// const PORT = 3000;
// const express = require('express');
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 }
];
// GET semua produk
app.get('/api/products', (req, res) => {
    res.json(products);
});
// GET produk berdasarkan ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
// POST produk baru
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PUT update produk
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = Object.assign({ id: productId }, req.body);
        res.json(products[productIndex]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
// DELETE produk
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});
app.listen(port, () => {
    console.log(`Server is running at <http://localhost>:${port}`);
});
// function init() {
//   // Middleware untuk log setiap permintaan
//   app.use((req, res, next) => {
//     console.log(`${req.method} request for '${req.url}'`);
//     next();
//   });
//   app.get("/", (req: Request, res: Response) => {
//     res.status(200).json({
//       message: "OK",
//       data: null,
//     });
//   });
//   // Route untuk /hello
//   app.get('/hello', (req, res) => {
//     res.json({
//       message: 'Success fetch message',
//       data: 'Hello World!'
//     });
//   });
//   // Route untuk /user
//   app.get('/user', (req, res) => {
//     res.json({
//       message: 'Success fetch user',
//       data: {
//         id: 1,
//         name: 'Budi',
//         username: 'budidu',
//         email: 'budidu@mail.com'
//       }
//     });
//   });
// // Melayani file statis dari direktori "public"
// app.use(express.static('public'));
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// }
// init();
