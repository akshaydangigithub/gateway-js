const myArray = [1, 2, 3, 4, 5, 6, 56, 89, 6, 4, 2];
const myArray2 = ["Akshay", "name", null, null, undefined];

// console.log(myArray);

// for of

// let sum = 0;

// for (let elem of myArray) {
//   sum = sum + elem;
// }

// console.log(sum);

// for

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// forEach

// myArray.forEach(function (elem, index) {
//   console.log(elem, index);
// });

// myArray.sort(function (a, b) {
//   return b-a
// });

// console.log(myArray);

// const newArr = myArray.slice(2,5)

// console.log(newArr);

// myArray.splice(3, 0, "Name");

// const a = myArray.concat(myArray2)

// console.log(myArray);
// console.log(myArray2);
// console.log(a);

// ================ CLASS and CONSTRUCTOR FUNCTION =========

// class Person{
//     constructor(n,a){
//         this.name = n,
//         this.age = a
//     }
// }

// let p1 = new Person("Akshay Dangi",23);
// let p2 = new Person("Sumit", 45);

// console.log(p1);
// console.log(p2);

// getters

// class Person {
//   constructor(fn, ln, a) {
//     (this.fName = fn), (this.lName = ln), (this.age = a);
//   }

//   // getter

//   get getFullName() {
//     return this.fName + " " + this.lName;
//   }
// }

// let p1 = new Person("Akshay", "Dangi", 23);
// let p2 = new Person("Sumit", "Gupta", 45);

// console.log(p1.getFullName);
// console.log(p2.getFullName);

// setters

// class Person {
//   constructor(fn, ln, a) {
//     (this.fName = fn), (this.lName = ln), (this.age = a);
//   }

//   //   setters

//   set setPersonalInfo(data) {

//     const {lName, fName} = data;

//     (this.fName = lName), (this.lName = fName);
//   }
// }

// let p1 = new Person("Akshay", "Dangi", 23);
// let p2 = new Person("Sumit", "Gupta", 45);

// p2.setPersonalInfo = {
//   fName: "Changed f",
//   lName: "Changed lName",
// };

// console.log(p1);
// console.log(p2);




class Student{
    constructor(m1, m2,m3=89){
      this.math = m1,
      this.english = m2,
      this.science = m3
    }

    get getPercentage(){
        let per = (this.math + this.english + this.science)/3
        return per
    }

    set englishMark(newMark){
        this.english = newMark
    }
}

let s1 = new Student(87,89);
let s2 = new Student(67,87,99);

s1.englishMark = 99

console.log(s1);
console.log(s1.getPercentage);
