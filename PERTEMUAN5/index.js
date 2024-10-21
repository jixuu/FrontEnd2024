//IIFE & Callback

//IIFE Immediately Evoked Function Expression "fungsi yang langsung di execute tanpa di panggil"

// (function() {
//     console.log("Hello World");

// } )()


// //No params & argms & return valuue
// (function() {
//     console.log("Hello World");

// }) ();

// With params & args & return value
// let output = (function(fullName){
//     return "Hello World" + fullName;
// }) ("jixuu");

// console.log(output)

//Callback funtion
//No params & args & return value
function sayHello(callback) {
    callback();
}
sayHello(function() {
    console.log("Hello calback function");

});


//with params & args & return

functionsay sayHello(callback) {
    //logic
    let output = callback("jixuu")
    return output
}

let output = sayHello(function (fullName) {}

});



// always use stack overflow!