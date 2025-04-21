let form = document.querySelector(".form");
let inputBox = document.querySelector(".inputBox");
let image_container = document.querySelector(".image_container");
let load_more = document.querySelector(".load_more");

let accessId = "your_access_key";

let page = 1;

inputBox.value = "random";
getData(inputBox.value);

async function getData(keyword) {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessId}&per_page=10`
    );

    let data = await res.json();

    console.log(data.results);

    data.results.map((img) => {
      image_container.innerHTML += ` <div class="image">
                <img src=${img.urls.small}
                    alt="">
            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  image_container.innerHTML = "";
  let value = inputBox.value;
  getData(value);
});

load_more.addEventListener("click", function () {
  page++;
  let value = inputBox.value;
  getData(value);
});
