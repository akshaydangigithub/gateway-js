// let box = document.querySelector("#box")

// box.style.height = "300px";
// box.style.width = "300px";
// box.style.backgroundColor = "blue";
// box.style.borderRadius = "30px";

// let box = document.querySelector("#box");

// box.innerHTML = `<h1>Hello</h1>`;

// let h1 = document.querySelector("h1");

// h1.innerText = "Hello";

// let box = document.querySelector("#box");

// box.addEventListener("click", function () {
//   box.style.backgroundColor = "blue";
//   box.style.borderRadius = "50%"
// });

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.innerText = "Hello"
// });

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click", function(){
//     h1.innerText = "Hello"
// })

let btn = document.querySelector("button");
let bulb = document.querySelector(".bulb");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    bulb.style.backgroundColor = "yellow";
    bulb.style.filter = "blur(30px)";

    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    bulb.style.filter = "blur(0px)";
    flag = 0;
  }
});
