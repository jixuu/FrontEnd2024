// Tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) => {
    console.log(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10);
};

// Dengan rest parameter
const func2 = (...params) => {
    console.log(params);  // params adalah array yang berisi semua argumen yang diterima
};

func2("A", "B", "C", "D", "E");  // Output: ["A", "B", "C", "D", "E"]

// Rest parameter harus berada di akhir dalam parameter
const func3 = (param1, param2, ...params) => {
    console.log(params);  // params adalah array berisi semua argumen setelah param1 dan param2
};

func3("A", "B", "C", "D", "E");  // Output: ["C", "D", "E"]

// Mini exercise
const penjumlahan = (a, b, c, d, e, f) => {
    let arr = [a, b, c, d, e, f];
    let hasil = 0;

    // Menggunakan forEach untuk menjumlahkan
    arr.forEach((item) => {
        hasil += item;
    });

    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));  // Output: 21

// Alternatif: menggunakan rest parameter
const penjumlahanRest = (...arr) => {
    let hasil = 0;

    // Menggunakan forEach untuk menjumlahkan semua elemen dalam arr
    arr.forEach((item) => {
        hasil += item;
    });

    return hasil;
};

console.log(penjumlahanRest(1, 2, 3, 4, 5, 6));  // Output: 21



//2. Spread Operator
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

//Array
//1.Duplikasi array
let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers);
console.log(numbers2);


//2. Menggabungkan array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9,10];

let numbers3 = arr1.concat(arr2,arr3);
let numbers4 ={...arr1,...arr2,...arr3};


