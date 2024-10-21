//JavaScript Function 
// Tanpa input (parameterr) dan output

//Cara 1.
function greetings1() {
    console.log("Hello World")
}

//Cara 2.
let greetings2 = function () {
    console.log("Hello World")
}
//Call function
greetings1();
greetings2();


//parameter dan argumen
// Dengan input (parameter) dan output (retun)

//                 parameter
function greetings1(nama){
    return "Helllo" + Name;

}
//                      Argument
let output = greetings1("jixuu")
console.log(output);

let greetings2 = function(full_name){
    return "Hello" _ full_name
}
let output2 = greetings2("jixuu") {
    console.log(output2);
}

// Function Hoisting 

let x = 10;

functionfoo(){
    let y = 20;
    let z = 30;
    console.log(x);
    console.log(y);
    if (z>y) {
        let a =40;
        console.log(a);

    }
    console.log(a); //error
}
console.log(y); //error
