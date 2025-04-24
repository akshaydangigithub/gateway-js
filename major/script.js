var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let cart = document.querySelector(".cart");
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close");

cart.addEventListener("click", function () {
  sidebar.classList.remove("translate-x-full");
});

close.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
});
