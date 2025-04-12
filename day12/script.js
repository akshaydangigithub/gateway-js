let input = document.querySelector("input");
let btns = document.querySelectorAll("button");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let btnValue = e.target.innerText;

    if (btnValue === "AC") {
      input.value = "";
    } else if (btnValue === "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (btnValue === "=") {
      if (input.value !== "") {
        try {
          let result = eval(input.value);

          input.value = result;
        } catch (error) {
          alert("Invalid Expration");
          input.value = "";
        }
      }
    } else {
      input.value += btnValue;
    }
  });
});
