"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware untuk meng-handle JSON dalam body request
app.use(express_1.default.json());
const categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
];
const products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' },
    { id: 3, name: 'Smartphone', category: 'Elektronik' },
    { id: 4, name: 'Kursi', category: 'Perabotan' },
    { id: 5, name: 'Sepatu', category: 'Fashion' }
];
function init() {
    app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });
    // Route GET untuk mengambil daftar kategori
    app.get('/categories', (req, res) => {
        res.json(categories);
    });
    // Route GET untuk mengambil kategori berdasarkan ID
    app.get('/categories/:id', (req, res) => {
        // Mendapatkan id dari parameter URL
        const categoryId = parseInt(req.params.id, 10);
        // Mencari kategori dengan ID yang sesuai
        const category = categories.find(cat => cat.id === categoryId);
        if (category) {
            // Jika kategori ditemukan, kembalikan detail kategori
            res.json(category);
        }
        else {
            // Jika kategori tidak ditemukan, kembalikan status 404
            res.status(404).json({ message: 'Kategori tidak ditemukan' });
        }
    });
    // Route POST untuk menambahkan kategori baru
    app.post('/categories', (req, res) => {
        const { name } = req.body;
        // Validasi agar 'name' tidak kosong
        if (!name) {
            return res.status(400).json({ message: 'Nama kategori harus disediakan' });
        }
        // Membuat ID baru dengan increment dari ID kategori terakhir
        const newId = categories.length ? categories[categories.length - 1].id + 1 : 1;
        // Membuat kategori baru
        const newCategory = { id: newId, name };
        // Menambahkan kategori baru ke array
        categories.push(newCategory);
        // Mengembalikan kategori yang baru ditambahkan
        res.status(201).json(newCategory);
    });
    // Route PUT untuk memperbarui kategori berdasarkan ID
    app.put('/categories/:id', (req, res) => {
        const categoryId = parseInt(req.params.id, 10);
        const { name } = req.body;
        // Mencari kategori berdasarkan ID
        const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
        if (categoryIndex === -1) {
            // Jika kategori tidak ditemukan
            return res.status(404).json({ message: 'Kategori tidak ditemukan' });
        }
        // Validasi data baru
        if (!name) {
            return res.status(400).json({ message: 'Nama kategori harus disediakan' });
        }
        // Memperbarui kategori
        categories[categoryIndex].name = name;
        // Mengembalikan kategori yang telah diperbarui
        res.json(categories[categoryIndex]);
    });
    // Route DELETE untuk menghapus kategori berdasarkan ID
    app.delete('/categories/:id', (req, res) => {
        const categoryId = parseInt(req.params.id, 10);
        // Mencari index kategori yang akan dihapus
        const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
        if (categoryIndex === -1) {
            // Jika kategori tidak ditemukan
            return res.status(404).json({ message: 'Kategori tidak ditemukan' });
        }
        // Menghapus kategori dari array
        const deletedCategory = categories.splice(categoryIndex, 1);
        // Mengembalikan respons sukses dengan kategori yang dihapus
        res.json({
            message: 'Kategori berhasil dihapus',
            deletedCategory: deletedCategory[0]
        });
    });
    // Route GET untuk mencari produk berdasarkan nama (menggunakan query string)
    app.get('/products', (req, res) => {
        const { name } = req.query;
        // Jika query parameter 'name' tidak ada
        if (!name) {
            return res.status(400).json({ message: 'Query parameter "name" harus disediakan' });
        }
        // Memastikan nama yang diberikan adalah string dan aman untuk diproses
        const nameToSearch = name ? name.toLocaleString() : '';
        const filteredProducts = products.filter(product => product.name && product.name.toLowerCase().includes(nameToSearch) // Memastikan nama produk valid
        );
        if (filteredProducts.length === 0) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }
        res.json(filteredProducts);
    });
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
