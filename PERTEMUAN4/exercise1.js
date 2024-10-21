//Buatla fungsi untuk menghitung BMI (Body Mass Idex)
//Rumus : BMI = berat /(tinggi * tinggi)
//berta dalam kg dan tinggi dalam meterr
//170 cm = 1,7
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi 
//Dan mengembalikan output  berupa BMI

function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi
  }
  
  let berat = 60 // kg
  let tinggi = 1.70 // cm
  let bmi = hitungBMI(berat, tinggi);
  console.log("BMI saya adalah : " + bmi);