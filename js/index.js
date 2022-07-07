// import {
//   customerItems,
//   productItems,
//   chartLabels,
//   chartData,
//   tableData,
//   socialIcons,
//   productsList,
// } from "./constants.js";

// import { urlRoute } from "./route.js";

// const customerList = document.querySelector(
//   ".dashboard-tactics-customers-content"
// );
// const productList = document.querySelector(
//   ".dashboard-tactics-products-content"
// );

// //create new customer list
// const createCustomerList = () => {
//   customerItems.forEach((item) => {
//     customerList.innerHTML += `<div>
//               <img src="${item.img}"/>
//               <div>
//                   <h1>${item.username}</h1>
//                   <h2>${item.email}</h2>
//               </div>
//               </div>`;
//   });
// };

// createCustomerList();
// //create chart
// const lineChart = document.getElementById("myChart");
// const myChart = new Chart(lineChart, {
//   type: "line",
//   data: {
//     labels: chartLabels,
//     datasets: [
//       {
//         label: "Sales",
//         data: chartData,
//         fill: false,
//         tension: 0.5,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: "#0E9F6E",
//         borderWidth: 2,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       tooltip: {
//         // create tooltip
//         callbacks: {
//           label: function (context) {
//             let label = context.dataset.label || "";

//             if (label) {
//               label += ": ";
//             }
//             if (context.parsed.y !== null) {
//               label += new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "VND",
//               }).format(context.parsed.y);
//             }
//             return label;
//           },
//           // title: function (context) {
//           //   let title = "Sales: ";

//           //   if (context.parsed.y !== null) {
//           //     title += `${context.parsed.y}k VND`;
//           //   }
//           //   return title;
//           // },
//         },
//         position: "average",
//         padding: "18.06px",
//         yAlign: "bottom",
//         backgroundColor: "#F9FAFB",
//         titleColor: "#4B5563",
//         titleFont: {
//           family: "Inter, sans-serif",
//           size: "12",
//           weight: "500",
//           lineHeight: "150%",
//         },
//         bodyColor: "#6B7280",
//         bodyFont: {
//           family: "Inter, sans-serif",
//           size: "16",
//           weight: "400",
//           lineHeight: "150%",
//         },
//       },
//     },
//   },
// });

// //create best-selling products list
// const createProductList = () => {
//   productItems.forEach((item) => {
//     productList.innerHTML += `<div class="${item.class}">
//             <div>
//                 <h1>${item.productName}</h1>
//                 <h2>${item.productId}</h2>
//             </div>
//             <p><span>${item.sales}</span>sales</p>
//             </div>`;
//   });
// };

// createProductList();

// //create table
// const tBody = tableData
//   .map(function (item, index) {
//     if (index % 2 == 1) {
//       return `<tr class="even-row">
//           <td>${item.customerName}</td>
//           <td class="time-column">${item.time}</td>
//           <td>${item.totalPrice}</td>
//           <td><div class="${item.statusClass}">${item.status}</div></td>
//           </tr>`;
//     } else if (index % 2 == 0) {
//       return `<tr>
//           <td>${item.customerName}</td>
//           <td class="time-column">${item.time}</td>
//           <td>${item.totalPrice}</td>
//           <td><div class="${item.statusClass}">${item.status}</div></td>
//           </tr>`;
//     }
//   })
//   .join("");
// const tabelBody = document.getElementById("tableBody");
// tableBody.innerHTML = tBody;

// //create social link icons
// const socialLink = document.querySelector(".dashboard-footer-group");
// const createSocialLink = () => {
//   socialIcons.forEach((item) => {
//     socialLink.innerHTML += `<i class="${item.class}"></i>`;
//   });
// };

// createSocialLink();

// //////
// var productsListDuplicate = productsList;

// const createProductsList = () => {
//   const productsTable = productsListDuplicate
//     .map(function (item, index) {
//       if (index % 2 == 1) {
//         return `<tr class="even-row" id="product-row">
//       <td>${item.productName}</td>
//       <td>${item.category}</td>
//       <td class="time-column">${item.createdAt}</td>
//       <td>${item.quantity}</td>
//       <td>${item.price}</td>
//       <td><div class="${item.statusClass}">${item.status}</div></td>
//       <td>
//         <a href="/products/update" id="updateBtn"><i class="fa-solid fa-pen"></i></a>
//         <button class="deleteBtn"><i class="fa-regular fa-trash-can" id="${index}"></i></button>
//       </td>
//       </tr>`;
//       } else if (index % 2 == 0) {
//         return `<tr id="product-row">
//       <td>${item.productName}</td>
//       <td>${item.category}</td>
//       <td class="time-column">${item.createdAt}</td>
//       <td>${item.quantity}</td>
//       <td>${item.price}</td>
//       <td><div class="${item.statusClass}">${item.status}</div></td>
//       <td>
//         <a href="/products/update" id="updateBtn"><i class="fa-solid fa-pen"></i></a>
//         <button class="deleteBtn" ><i class="fa-regular fa-trash-can" id="${index}"></i></button>
//       </td>
//       </tr>`;
//       }
//     })
//     .join("");
//   document.getElementById("productTableBody").innerHTML = productsTable;
// };

// createProductsList();

// //product category
// var categoryArr = [];
// productsList.map((item, index) => {
//   categoryArr.push(item.category);
// });

// // delete the categories that duplicated
// let newCategoryArr = categoryArr.reduce((acc, category) => {
//   if (acc.indexOf(category) === -1) {
//     acc.push(category);
//   }
//   return acc;
// }, []);

// // render category list <select>
// var productCategory = document.getElementById("product_category");
// for (let i = 0; i < newCategoryArr.length - 1; i++) {
//   productCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
// }

// //// HIDE/SHOW FILTER
// const filterHideButton = document.getElementById("filterHideBtn");
// const filterShowButton = document.getElementById("filterShowBtn");
// const productFilter = document.getElementById("product_filter");

// filterHideButton.style.display = "none";
// productFilter.style.display = "none";

// const filterShown = () => {
//   productFilter.style.display = "";
//   filterShowButton.style.display = "none";
//   filterHideButton.style.display = "";
// };

// const filterHidden = () => {
//   productFilter.style.display = "none";
//   filterShowButton.style.display = "";
//   filterHideButton.style.display = "none";
// };

// filterShowButton.addEventListener("click", filterShown);
// filterHideButton.addEventListener("click", filterHidden);

// //// UPDATE BUTTON
// const updateButton = document.getElementById("updateBtn");
// updateButton.addEventListener("click", urlRoute);

// //// DELETE BUTTON
// const handleDelete = (event) => {
//   console.log(event.target.id);
//   productsListDuplicate.splice(event.target.id, 1); //xóa phần tử ở vị trí = id của element kích hoạt sự kiện
//   console.log("products", productsListDuplicate);
//   createProductsList();
// };

// console.log(document.querySelectorAll("td > button"));
// document
//   .querySelectorAll("td > button")
//   .forEach((el) => el.addEventListener("click", handleDelete));

// //////FILTER PRODUCTS
// // var name_input = document.getElementById("name-input");

// // function productFilter() {
// //   var nameInput, tbody, tr, td;
// //   nameInput = name_input.value.toUpperCase();
// //   console.log(nameInput);
// //   tbody = document.getElementById("productTableBody");
// //   tr = document.getElementById("product-row");

// //   if (!nameInput) {
// //     tbody.style.display = "none";
// //   } else {
// //     for (let i = 0; i < productsList.length - 1; i++) {
// //       td = tr[i].getElementsByTagName("td")[0];
// //       console.log(td);
// //       if (td.innerHTML.toUpperCase().indexOf(nameInput) > -1) {
// //         tbody.style.display = "block";
// //         tr[i].style.display = "";
// //       } else {
// //         tr[i].style.display = "none";
// //       }
// //     }
// //   }
// // }

// // name_input.addEventListener("keyup", productFilter);

// // var quantityInput = document
// //   .getElementById("quantity-input")
// //   .value.toUpperCase();
// // var categoryInput = document
// //   .getElementById("category-input")
// //   .value.toUpperCase();
// // var statusInput = document.getElementById("status-input").value.toUpperCase();

// //////TABLE PAGINATION
// //start
// var currentPage;
// var pages = 0;
// var inited = false;

// const showRecords = function (tableName, from, to) {
//   var rows = document.getElementById(tableName).rows;
//   // i starts from 1 to skip table header row
//   for (var i = 1; i < rows.length; i++) {
//     if (i < from || i > to) rows[i].style.display = "none";
//     else rows[i].style.display = "";
//   }
// };

// const showPage = function (tableName, pageNumber, itemsPerPage) {
//   if (!inited) {
//     alert("not inited");
//     return;
//   }

//   currentPage = pageNumber;

//   var from = (pageNumber - 1) * itemsPerPage + 1;
//   var to = from + itemsPerPage - 1;
//   showRecords(tableName, from, to);

//   var rows = document.getElementById(tableName).rows;

//   if (to > rows.length) to = rows.length;

//   document.getElementById(
//     "pagination-info"
//   ).innerHTML = `<span>${from} - ${to} of ${rows.length}</span>`;
// };

// const init = (tableName, itemsPerPage) => {
//   var rows = document.getElementById(tableName).rows;
//   var records = rows.length;
//   pages = Math.ceil(records / itemsPerPage);
//   inited = true;
// };

// var tableName = "productTableBody";
// var pageNumber = 1;
// var itemsPerPage = parseInt(document.getElementById("items-quantity").value);

// //add event 'click' for prevBtn
// function prevButtonClick() {
//   if (currentPage > 1) showPage(tableName, currentPage - 1, itemsPerPage);
// }
// document.getElementById("prevBtn").addEventListener("click", prevButtonClick);

// //add event 'click' for nextBtn
// function nextButtonClick() {
//   if (currentPage < pages) showPage(tableName, currentPage + 1, itemsPerPage);
// }
// document.getElementById("nextBtn").addEventListener("click", nextButtonClick);

// // get items per page = select value
// function getItemsPerPage() {
//   itemsPerPage = parseInt(document.getElementById("items-quantity").value);
//   init(tableName, itemsPerPage);
//   showPage(tableName, pageNumber, itemsPerPage);
// }

// // update itemsPerPage when select-tag's value change
// document
//   .getElementById("items-quantity")
//   .addEventListener("change", getItemsPerPage);

// // init the pagination and show page
// init(tableName, itemsPerPage);
// showPage(tableName, pageNumber, itemsPerPage);

// ///
// //product category
// var categoryArr = [];
// productsList.map((item, index) => {
//   categoryArr.push(item.category);
// });

// // delete the categories that duplicated
// newCategoryArr = categoryArr.reduce((acc, category) => {
//   if (acc.indexOf(category) === -1) {
//     acc.push(category);
//   }
//   return acc;
// }, []);

// // render category list <select>
// var productCategory = document.getElementById("add_product_category");
// for (let i = 0; i < newCategoryArr.length - 1; i++) {
//   productCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
// }

// //product category
// var categoryArr = [];
// productsList.map((item, index) => {
//   categoryArr.push(item.category);
// });

// // delete the categories that duplicated
// newCategoryArr = categoryArr.reduce((acc, category) => {
//   if (acc.indexOf(category) === -1) {
//     acc.push(category);
//   }
//   return acc;
// }, []);

// // render category list <select>
// var productCategory = document.getElementById("update_product_category");
// for (let i = 0; i < newCategoryArr.length - 1; i++) {
//   productCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
// }
