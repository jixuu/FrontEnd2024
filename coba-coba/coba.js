let me = {
    firstName: "Diky",
    berat: 56,
    tinggi: 172,
};

// Menggunakan function callback
(function (berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi); // Hitung BMI
    callback(bmi); // Kirimkan hasil BMI ke fungsi callback
})(60, 1.7, function (bmi) {
    console.log("BMI saya adalah : " + bmi);
});
