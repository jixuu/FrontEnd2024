// Destructuring

// 1. Destructuring (Array & Object)
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30

// 2. Destructuring dengan Mengambil Sebagian Item (Array & Object)
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit); // Output: apple cherry

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
const { brand, year } = car;
console.log(brand, year); // Output: Toyota 2020

// 3. Destructuring dengan Default Value (Array & Object)
const scores = [80];
const [math = 100, science = 90] = scores;
console.log(math, science); // Output: 80 90

const user = { name: "Alice" };
const { name: userName, age: userAge = 25 } = user;
console.log(userName, userAge); // Output: Alice 25

// 4. Destructuring dengan Rest Operator (Array & Object)
const nums = [1, 2, 3, 4, 5];
const [firstNum, secondNum, ...restNums] = nums;
console.log(firstNum, secondNum); // Output: 1 2
console.log(restNums); // Output: [3, 4, 5]

const personDetails = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};
const { name: personName, age: personAge2, ...restDetails } = personDetails;
console.log(personName, personAge2); // Output: John 30
console.log(restDetails); // Output: {city: "New York", country: "USA"}

// ES5 to ES6 Conversion

// 1. ES6 version of the retirement example
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" }); // Output: John retires in 28 years

// 2. ES6 version of addNumber
const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); // Output: 28

// 3. ES6 version of calculateArea
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
// Output: area with 21 radius: 1384.74, and area with 7 radius: 153.86

// 4. ES6 version of makeAjaxRequest
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com"); // Output: www.google.com GET
