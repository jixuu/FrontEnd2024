// 1. Calculate Age and Retirement
export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

// 2. Add Numbers using reduce
export const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
};

// 3. Calculate Area
export const phi = 3.14;

export const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// 4. Make Ajax Request
export const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};



