let btn = document.querySelector("button");
let input = document.querySelector("#input_value");
let fromUnit = document.querySelector("#fromUnit");
let toUnit = document.querySelector("#toUnit");
let re = document.querySelector("#result");

btn.addEventListener("click", function () {
  input = parseFloat(input.value);
  var result = "";

  //   c- > k
  //  c-> f
  // f -> c
  // f - > k
  //  k-> c
  //  k-> f

  if (fromUnit.value === "c" && toUnit.value === "k") {
    result = input + 273.15;
  } else if (fromUnit.value === "c" && toUnit.value === "f") {
    result = (input * 9) / 5 + 32;
  } else if (fromUnit.value === "k" && toUnit.value === "c") {
    result = input - 273.15;
  }

  re.innerHTML = `${result.toFixed(3)} ${toUnit.value.toUpperCase()}`;
});
