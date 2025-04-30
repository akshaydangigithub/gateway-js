var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function sidebar() {
  let cart = document.querySelector(".cart");
  let sidebar = document.querySelector(".sidebar");
  let close = document.querySelector(".close");

  cart.addEventListener("click", function () {
    sidebar.classList.remove("translate-x-full");
  });

  close.addEventListener("click", function () {
    sidebar.classList.add("translate-x-full");
  });
}

let cate_main = document.querySelector(".cate_main");
let pro_main = document.querySelector(".pro_main");
let loader = document.querySelector(".loader");

var activeCategory = "electronics";

var loading = true;

async function getCategories() {
  try {
    loading = true;
    loader.classList.remove("hidden");
    let res = await fetch("https://fakestoreapi.com/products/categories");

    let data = await res.json();

    data.forEach(function (category) {
      cate_main.innerHTML += `<button onclick="getActiveCategory('${
        category === "men's clothing"
          ? "mens clothing"
          : category === "women's clothing"
          ? "womens clothing"
          : category
      }')" class="px-2.5 py-1 cursor-pointer
 rounded-xl border activecatebtns hover:bg-red-400 hover:text-white">${category}</button>`;
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading = false;
    loader.classList.add("hidden");
  }
}

async function getAllProducts(cat) {
  try {
    loading = true;
    loader.classList.remove("hidden");
    let res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);

    let data = await res.json();

    console.log(data);

    data.forEach(function (pro) {
      pro_main.innerHTML += `<div class="border p-2 rounded-lg relative">
      <h1 class="bg-[#A749FF] text-white w-fit px-2 text-sm rounded-lg absolute top-4 right-4">New</h1>
      <img class="h-64 w-full rounded-lg object-conver"
          src=${pro.image}
          alt="">
      <h1 class="text-lg font-semibold mt-3">${pro.title}</h1>
      <h2 class="text-xl font-bold mt-1">₹ ${pro.price}</h2>
  </div>`;
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading = false;
    loader.classList.add("hidden");
  }
}

sidebar();
getCategories();

function getActiveCategory(cat) {
  pro_main.innerHTML = "";
  let d =
    cat === "mens clothing"
      ? "men's clothing"
      : cat === "womens clothing"
      ? "women's clothing"
      : cat;

  activeCategory = d;
  getAllProducts(d);
}

getAllProducts("electronics");
