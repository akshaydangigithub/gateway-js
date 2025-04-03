// Today's Topic

// 1. Map
// 2. Filter
// 3. Reduce

// ============ MAP ===========

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = myArr.map(function (elem) {
//   return elem * 2;
// });

// console.log(newArr);

// ============ FILTER ===========

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = myArr.filter(function(elem){
//     return elem % 2 === 1;
// })

// console.log(newArr);

// const users = [
//   {
//     name: "Akshay",
//     userName: "Akuu",
//     age: 15,
//     email: "hdangi224@gmail.com",
//   },
//   {
//     name: "Ankit",
//     userName: "anku",
//     age: 18,
//     email: "anku@gmail.com",
//   },
//   {
//     name: "Naman",
//     userName: "naman",
//     age: 22,
//     email: "naman@gmail.com",
//   },
//   {
//     name: "Nikhil",
//     userName: "nikhil",
//     age: 20,
//     email: "nikhil@gmail.com",
//   },
//   {
//     name: "Ankit",
//     userName: "anku",
//     age: 18,
//     email: "anku@gmail.com",
//   },
// ];

// let newUser = users.filter(function (user) {
//   return user.age >= 18;
// });

// // console.log(newUser);

// // ========== REDUCE ===============

// const arr = [2, 3, 4, 5, 6];

// let value = arr.reduce(function (pre, curr) {
//   return pre + curr;
// });

// console.log(value);

// const Arr = [2, 3, 4, 5, 5, 6, 8];

// let newArr = Arr.map(function (num) {
//   return num * 0;
// });

// console.log(newArr);

const Arr = [2, 3, 4];

// const newArr = Arr.filter(function (num) {
//   return num == 5;
// });

// console.log(newArr);

// let value = Arr.reduce(function(pre, curr){
//     return pre - curr
// })

// console.log(value);

// ============== closures ====

function func1() {
  let counter = 0;

  return function func2() {
    return (counter = counter + 1);
  };
}

let anotherFunc = func1();

let a = 0;

while (a < 10) {
  console.log(anotherFunc());

  a++;
}
