// let person1 = {
//   fName: "Akshay",
//   lName: "Dangi",
//   age: 22,

//   educations: {
//     school: "SSM",
//   },

//   getFullName: function () {
//     console.log(this.fName + " " + this.lName);
//   },
// };

// person1.getFullName();

// for(let abc in person1){
//     console.log(person1[abc]);

// }

// console.log(Object.values(person1));

// console.log(person1.getFullName());

// =================== For in loop ==============

// for(let key in person1){
//     console.log(`${key}: ${person1[key]}`);

// }

// console.log(person1);

// delete person1.fName;

// console.log(person1);

// ============ copy object ==================

// let person2 = person1;

// delete person1.age

// console.log(person2);

// let person2 = {...person1};

// delete person1.age

// console.log(person2);

// ================ Destructring =================

// console.log(person1.age);

// person1["Sch"] = "SSm";

// console.log(person1);

// const { fName, lName } = person1;

// console.log(fName.toUpperCase());

// ================ ARRAYS =============

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, "Akshay"];

// console.log(myArr.length);

// console.log(myArr[5]);

// for(let abc of myArr){
//     console.log(abc+2);

// }

// myArr.push("Akshay");

// myArr.pop()

// myArr.unshift("Akshay")

// myArr.shift()

// const newArr = myArr.slice(1, 6);

// const dele = myArr.splice(5, 2, "Akshay", "Dangi");

// console.log(myArr);

// console.log(dele);

// console.log(myArr.at(3));

// console.log(myArr.includes("Akshay"));

// const [ele1, ele2] = myArr;

// console.log(ele1, ele2);

myArr.forEach(function (ele, index) {
  document.write(`<h1>For index ${index} your value is : ${ele}</h1>`);
});
