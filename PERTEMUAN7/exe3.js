let person = {
    firstName: "Diky",
    weight: 55, // berat dalam kilogram
    height: 172, // tinggi dalam centimeter


    // Fungsi untuk menghitung BMI dan menampilkan kategori
    calculateBMI: function() {
        let heightInMeters = this.height / 100; // Mengubah tinggi menjadi meter
        let bmi = this.weight / (heightInMeters * heightInMeters); // Menghitung BMI

        console.log(" firstName :" + this.firstName);
        console.log(" weight :" + this.weight);
        console.log(" height:" + this.height);
        console.log(" Hasil BMI adalah : " + bmi);
        
 
        // Klasifikasi kategori BMI berdasarkan nilai BMI menggunakan if - else
        if (bmi <= 16.0) {
            console.log(" Category: Severely Underweight");
        } else if (bmi > 16.0 && bmi <= 18.4) {
            console.log(" Category: Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log(" Category: Normal t");
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            console.log(" Category: Overweight");
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            console.log(" Category:(Moderately obese)");
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            console.log(" Category:(Severely obese)");
        } else {
            console.log(" Category:(Very severely obese)");
        }
    }
};

//
person.calculateBMI();
