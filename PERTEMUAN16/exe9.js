// main.js
import { 
    messages, 
    ambilDataUser, 
    ambilDataUserAsync, 
    ambilDataUserAxios 
  } from './utils.js';
  
  // Memanggil fungsi messages untuk melihat Hello World setelah 2 detik
  messages();
  
  // Mengambil data user menggunakan Fetch
  ambilDataUser();
  
  // Mengambil data user menggunakan Async/Await
  ambilDataUserAsync();
  
  // Mengambil data user menggunakan Axios
  ambilDataUserAxios();
  