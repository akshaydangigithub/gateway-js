// let btn = document.querySelector("#add_btn");
// let container = document.querySelector(".container")

// btn.addEventListener("click", function(){
//     container.innerHTML += `<div class="card">
//                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
//                     alt="">
//                 <h1>Akshay Dangi</h1>
//                 <p>
//                     <b>About me:</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
//                     reprehenderit.
//                 </p>
//             </div>`

// })



const users = [
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Akshay Dangi",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aman gupta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Akshay Dangi",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aman gupta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Akshay Dangi",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aman gupta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aman gupta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aman gupta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate",
  },
];

console.log(users);

let container = document.querySelector(".container");

users.map(function (user) {
  container.innerHTML += `<div class="card">
                <img src=${user.img}
                     alt="">
                 <h1>${user.name}</h1>
                 <p>
                     <b>About me:</b> ${user.about}
                 </p>
             </div>`;
});
