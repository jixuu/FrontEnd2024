//Ubah exercise 1 dari function biasa menjadi 
//IIFE dan callback




//menggunakan function callback
(function(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi); //logic
    callback(bmi);
})(60, 1.70, function(bmi) {
    console.log("BMI saya adalah : " + bmi);
});



//menggunaka funciton IIFE
let bmi = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(60, 1.70);

console.log("BMI saya adalah : " + bmi);
