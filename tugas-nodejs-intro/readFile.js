// Nomor 1
const fs = require('fs');

// Membaca file teks
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    // Mencetak isi file ke konsol
    console.log(data);
});