let btn = document.querySelector("button");
let h1 = document.querySelector("h1")

btn.addEventListener("click", function(){
   h1.innerText = "bye bye"
   h1.style.color = "blue"
   h1.style.fontSize = "100px"
   h1.style.backgroundColor = "red"
    
})