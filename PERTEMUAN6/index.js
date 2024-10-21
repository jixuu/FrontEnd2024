//Array dan Objek

//1.Array
//Deklarasi variable array
//Cara 1. Array Literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);


//Cara 2. Kata kunci new

// let numbers2 = new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(numbers2 +"");

//Tipe data dalam array
// let numbers3 = [1,2,3,4,5,6,7,8,9]; //Number
// let students = ["john","jane","jixuu","bobi"]; //String
// let jixuu = ["jixuu", 20,true, [10,20,30]]; //Campuran

// console.log(jixuu);
// console.log(numbers3);
// console.log(students);

//Array lengts
// console.log(numbers3.length);
// console.log(students.length);
// console.log(jixuu.length);

//Mengakses element tertentu dalam array
//Melalui index. Index selalau dimulai dari 0
// console.log(numbers3[2]);
// console.log(students[1]);
// console.log(jixuu[3]);
// console.log(jixuu [2][4]);


//Mengakses element terakhir dalam array 
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("Element terakhir adalah:",numbers[numbers.length -1]);

//Array Method
let array = [1,2,3, "Hallo",false,true];
console.log(array);
//1.toString
console.log(array.toString());
//2.join
console.log(array.join(" "));
console.log(array.join("!")); 
//3.pop()
array.pop();
console.log("Good Mornig");
//4.push
array.push("Good Morning");
console.log(array);
//5.shift()
array.shift();
console.log(array);
//6.unshft()
array.unshift("Good Mornign");
console.log(array);
//7.splice()
array.splice(3,0,4,5);
console.log(array);
//8.concat()
let buah = ["pisang","apel","jeruk"];
let sayur = ["tomat","bayam","wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9.slice()
let sayuran = makanan.slice(3.6);
console.log(sayuuran);
