// let randomNumber = Math.floor(Math.random() * 10 + 1);

// console.log(randomNumber);

// let isCorrect = false;

// while (!isCorrect) {
//   let userInput = Number(prompt("Enter a number (1-10)"));

//   if (userInput === randomNumber) {
//     console.log("Correct");
//     isCorrect = true;
//   } else {
//     console.log("Wrong");
//   }
// }

//  objects


let person1 = {
    fName : "Akshay",
    lName: "Dangi",
    age: 22,

    educations:{
        school: "SSM"
    },


    getFullName: function(){
        return this.fName + " " + this.lName
    }
}


// console.log(person1.fName + " " + person1.lName);

// console.log(this.window.innerWidth);

console.log(person1.getFullName());

