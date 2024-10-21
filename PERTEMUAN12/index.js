// 1. fungsi untuk menghitung Age
const calculateAge = (birthYear) => 2019 - birthYear;

// 2. fungsi untuk menghitung years until retirement
const yearUntilRetirement = (object) => {
  const age = calculateAge(object.year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};

//call function untuk yearUntinlRetirement
yearUntilRetirement({ year: 1987, firstName: "John" });

// 3. fungsi untuk menambahkan numbers using spread operator and reduce
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// Call function
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 4. Variables for calculating area
const phi = 3.14;

// Function to calculate area
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// Calculate areas
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

// Log results
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 5. Function with default parameter for AJAX request
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

// Call AJAX request function
makeAjaxRequest("www.google.com");
