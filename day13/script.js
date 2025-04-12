class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }


 get getName(){
    console.log(this.name); 
  }

  set setName(name){
    this.name = name
  }
}

let p1 = new Person("Akshay", 23);
let p2 = new Person("Naman", 34);

p1.setName = "Changed"

p1.getName