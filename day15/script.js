let container = document.querySelector(".container");
let add_btn = document.querySelector("#add_btn");

// Initialize localStorage index if not set
if (localStorage.getItem("idx") === null) {
    localStorage.setItem("idx", 0);
  }

async function getData(idx) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();

    let currentUser = data[idx];

    container.innerHTML += `<div class="card">
        <h1>${currentUser.name}
            <span>(${currentUser.username})</span>
        </h1>
        <p>
            <b>Email:</b> ${currentUser.email}
        </p>

        <div class="add">
            <b>Address:</b> ${currentUser.address.city}, ${currentUser.address.street}, ${currentUser.address.zipcode}
        </div>
    </div>`;

    // data.map(function (user) { // ye loop 10 bar chalega
    //   container.innerHTML += `<div class="card">
    //     <h1>${user.name}
    //         <span>(${user.username})</span>
    //     </h1>
    //     <p>
    //         <b>Email:</b> ${user.email}
    //     </p>

    //     <div class="add">
    //         <b>Address:</b> ${user.address.city}, ${user.address.street}, ${user.address.zipcode}
    //     </div>
    // </div>`;
    // });
  } catch (error) {
    console.log(error);
  }
}

// localStorage.setItem("idx", 0);
// console.log(localStorage.getItem("name"));

add_btn.addEventListener("click", function () {
    let idx = Number(localStorage.getItem("idx"));
    getData(idx);
    localStorage.setItem("idx", idx + 1); 
  });