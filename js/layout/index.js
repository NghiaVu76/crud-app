import { menuItems } from "../constants.js";

const menuList = document.querySelector(".sidebar-items");

//create sidebar menu
const createMenuList = () => {
  menuItems.forEach((item) => {
    menuList.innerHTML += `<a href="${item.path}" onclick="route()"><button><i class="${item.class}"></i><p>${item.title}</p></button></a>`;
  });
};

// createMenuList();

//dashboard

// // route
// const route = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   handleLocation();
// };

// const routes = {
//   "/": "/pages/index.html",
//   "/products": "/pages/products.html",
//   "/customers": "pages/customers.html",
//   "/carts": "/pages/carts.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path] || routes[404];
//   console.log(route);
//   const html = await fetch(route).then((data) => data.text());
//   console.log(html);
//   document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

// const productsTable = productsList
//   .map(function (item, index) {
//     if (index % 2 == 1) {
//       return `<tr class="even-row">
//       <td>${item.productName}</td>
//       <td>${item.category}</td>
//       <td class="time-column">${item.createdAt}</td>
//       <td>${item.quantity}</td>
//       <td>${item.price}</td>
//       <td><div class="${item.statusClass}">${item.status}</div></td>
//       <td>
//         <i class="fa-solid fa-pen"></i>
//         <i class="fa-regular fa-trash-can"></i>
//       </td>
//       </tr>`;
//     } else if (index % 2 == 0) {
//       return `<tr>
//       <td>${item.productName}</td>
//       <td>${item.category}</td>
//       <td class="time-column">${item.createdAt}</td>
//       <td>${item.quantity}</td>
//       <td>${item.price}</td>
//       <td><div class="${item.statusClass}">${item.status}</div></td>
//       <td>
//         <i class="fa-solid fa-pen"></i>
//         <i class="fa-regular fa-trash-can"></i>
//       </td>
//       </tr>`;
//     }
//   })
//   .join("");
// document.getElementById("productTableBody").innerHTML = productsTable;
