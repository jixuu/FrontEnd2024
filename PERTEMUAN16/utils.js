
export const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello World!"), 2000);
  });
};

export const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};


export const ambilDataUser = () => {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then(({ data }) => {
      data.forEach(({ first_name, last_name }) => {
        console.log(`${first_name} ${last_name}`);
      });
    })
    .catch((error) => console.error("Error:", error));
};

export const ambilDataUserAsync = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name} ${last_name}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const ambilDataUserAxios = async () => {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    let { data }= response; // Mengambil data dari response
    data.forEach(({ name }) => {
      console.log(name); // Menampilkan nama
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
