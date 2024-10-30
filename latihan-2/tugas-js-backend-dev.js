// Nomor 1
const greet = (name, age) => {    

    const stringName = `name: ${name}`;

    const stringAge = `\nage: ${age}`;

    return stringName + stringAge;
}

console.log(greet("Albar", 25))


// Nomor 2
function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

// Kode ini mendefinisikan fungsi sumOfNumbers yang menjumlahkan angka-angka yang diberikan. 
// Dengan sintaks ...numbers, fungsi bisa menerima banyak argumen dan mengubahnya menjadi array. 
// Metode reduce digunakan untuk menambahkan semua angka dalam array, dimulai dari 0.
// Saat memanggil fungsi dengan sumOfNumbers(1, 2, 3, 4, 5), hasil penjumlahan disimpan dalam result dan dicetak dengan console.log, menampilkan totalnya. Jadi, ini adalah cara sederhana untuk menjumlahkan beberapa angka.
