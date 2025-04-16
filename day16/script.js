let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

// let flag = 0;

menu.addEventListener("click", function () {
  //   if (flag === 0) {
  //     line1.classList.add("active");
  //     line2.classList.add("active");
  //     sidebar.style.transform = `translateX(0%)`

  //     flag = 1;
  //   } else {
  //     line1.classList.remove("active");
  //     line2.classList.remove("active");
  //     sidebar.style.transform = `translateX(100%)`
  //     flag = 0;
  //   }

  line1.classList.toggle("active");
  line2.classList.toggle("active");
  sidebar.classList.toggle("active");
});
