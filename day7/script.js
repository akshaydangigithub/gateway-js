// promise

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 1");

//     reject();
//   }, 2000);
// });

// p1.then(() => {
//   console.log("Resolved");
// }).catch(() => {
//   console.log("Rejected");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve({
//     //   name: "Akshay",
//     //   age: 23,
//     // });

//     reject("Something went wrong")
//   }, 2000);
// })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (erroe) {
//     console.log(erroe);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isError = false;

//     if (!isError) {
//       resolve({ name: "Akshay", age: 23 });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 2000);
// })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//     return data.name;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isError = false;

//     if (!isError) {
//       resolve({ name: "Akshay", age: 23 });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 2000);
// });

// async function promiseTwoConsume() {
//   try {
//     let data = await p2;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promiseTwoConsume();

// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let data = await res.json()

//     data.forEach((post,index)=>{
//         document.write(`<h1>${index+1}. ${post.title}</h1>`)
//     })

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

async function getData() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    let data = await res.json();

    console.log(data.meals);

    for (let meal of data.meals) {
      document.querySelector("main").innerHTML += ` 
        <img class="w-full h-96 object-cover" src=${meal.strMealThumb} alt="">
    `;

    // document.write(`<h1>${meal.strCategory}</h1>`)
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
