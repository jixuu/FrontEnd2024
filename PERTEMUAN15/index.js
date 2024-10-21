// asynchronus JS
// single thread
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang memakan waktu yang lama");
// console.log("Proses 4");

// Asynchronous -> multi thread
// 1. Parallel - proses berjalan bersamaan
setTimeout(() => {
  console.log("Proses 1");//output 3
},3000);
console.log("Proses 2");//output 1
setTimeout(() => {
    console.log("Proses 3");//output 4
  },3000);
  console.log("Proses 4");//output 2

// 2. Concurent - berjalan satu per satu
setTimeout(()=>{
    console.log("Proses 1");
    setTimeout(() =>{
        console.log("Proses 2");
        setTimeout(()=>{
            console.log("Proses 3");
            setTimeout(() =>{
                console.log("Proses 4");
            },3000);
        },4000);
    },5000);
},6000);

//Promise
let conditional = false;
let newPromise = new Promise((resolve, reject) => {
    if (conditional){
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }

});

// //Pakai promise
// //1. then - catch
newPromise
    .then((result) => result)
    .then((result2) => console.log(result))
    .catch((error) => console.log(error));

//2.Async - await
// Harus dibuat dalam fungsi
const consumePromise = async () => {
    try{
        let result = await newPromise;
    console.log(result);


    }catch (error){
    }
};

//Pakai  Promise yang sudah ada
//1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response => response.json()))
.then((json) => console.log(json));

//1.async await
async()=>{
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  
  //hanya menampilkan nama 
  async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await response.json();
      
      // Hanya menampilkan nama
      json.forEach(user => console.log(user.name));
      
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  
//2.Axios
axios.get("https://jsonplaceholder.typicode.com/users")
     .then((result) => console.log(result.data));

     (async () => {
      let result = await axios.get("https://jsonplaceholder.typicode.com/users");
      result.data.forEach(({ name }) => console.log(name));
  })();
  
