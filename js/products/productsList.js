import { productsList, socialIcons } from "../constants.js";
import { urlRoute } from "../route.js";

var productsListDuplicate = productsList;

const createProductsList = () => {
  const productsTable = productsListDuplicate
    .map(function (item, index) {
      if (index % 2 == 1) {
        return `<tr class="even-row" id="product-row">
      <td>${item.productName}</td>
      <td>${item.category}</td>
      <td class="time-column">${item.createdAt}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td><div class="${item.statusClass}">${item.status}</div></td>
      <td>
        <a href="/products/update" id="updateBtn"><i class="fa-solid fa-pen"></i></a>
        <button class="deleteBtn"><i class="fa-regular fa-trash-can" id="${index}"></i></button>
      </td>
      </tr>`;
      } else if (index % 2 == 0) {
        return `<tr id="product-row">
      <td>${item.productName}</td>
      <td>${item.category}</td>
      <td class="time-column">${item.createdAt}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td><div class="${item.statusClass}">${item.status}</div></td>
      <td>
        <a href="/products/update" id="updateBtn"><i class="fa-solid fa-pen"></i></a>
        <button class="deleteBtn" ><i class="fa-regular fa-trash-can" id="${index}"></i></button>
      </td>
      </tr>`;
      }
    })
    .join("");
  document.getElementById("productTableBody").innerHTML = productsTable;
};

createProductsList();

//product category
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
const renderProductCategory = () => {
  let categoryArr = [];
  productsList.map((item, index) => {
    categoryArr.push(item.category);
  });

  // delete the categories that duplicated
  let newCategoryArr = categoryArr.reduce((acc, category) => {
    if (acc.indexOf(category) === -1) {
      acc.push(category);
    }
    return acc;
  }, []);

  // render category list <select>
  var ProductCategory = document.getElementById("product_category");
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    ProductCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
};

renderProductCategory();

//// HIDE/SHOW FILTER
const filterHideButton = document.getElementById("filterHideBtn");
const filterShowButton = document.getElementById("filterShowBtn");
const productFilter = document.getElementById("product_filter");

filterHideButton.style.display = "none";
productFilter.style.display = "none";

const filterShown = () => {
  productFilter.style.display = "";
  filterShowButton.style.display = "none";
  filterHideButton.style.display = "";
};

const filterHidden = () => {
  productFilter.style.display = "none";
  filterShowButton.style.display = "";
  filterHideButton.style.display = "none";
};

filterShowButton.addEventListener("click", filterShown);
filterHideButton.addEventListener("click", filterHidden);

//// UPDATE BUTTON
const updateButton = document.getElementById("updateBtn");
updateButton.addEventListener("click", urlRoute);

//// DELETE BUTTON
const handleDelete = (event) => {
  productsListDuplicate.splice(event.target.id, 1); //xóa phần tử ở vị trí = id của element kích hoạt sự kiện
  console.log("products", productsListDuplicate);
  createProductsList();

  init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi xóa
  showPage(tableName, pageNumber, itemsPerPage);

  // add lại event 'click' cho các button sau khi xóa 1 item
  for (let i = 0; i < deleteButtons.length; i++) {
    var button = deleteButtons[i];
    button.addEventListener("click", handleDelete);
  }
};

var deleteButtons = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteButtons.length; i++) {
  // add event 'click' for all deleteButton
  var button = deleteButtons[i];
  button.addEventListener("click", handleDelete);
}

//////FILTER PRODUCTS
// var name_input = document.getElementById("name-input");

// function productFilter() {
//   var nameInput, tbody, tr, td;
//   nameInput = name_input.value.toUpperCase();
//   console.log(nameInput);
//   tbody = document.getElementById("productTableBody");
//   tr = document.getElementById("product-row");

//   if (!nameInput) {
//     tbody.style.display = "none";
//   } else {
//     for (let i = 0; i < productsList.length - 1; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       console.log(td);
//       if (td.innerHTML.toUpperCase().indexOf(nameInput) > -1) {
//         tbody.style.display = "block";
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// name_input.addEventListener("keyup", productFilter);

// var quantityInput = document
//   .getElementById("quantity-input")
//   .value.toUpperCase();
// var categoryInput = document
//   .getElementById("category-input")
//   .value.toUpperCase();
// var statusInput = document.getElementById("status-input").value.toUpperCase();

//////TABLE PAGINATION
//start
var currentPage;
var pages = 0;
var inited = false;

const showRecords = function (tableName, from, to) {
  var rows = document.getElementById(tableName).rows;
  // i starts from 1 to skip table header row
  for (var i = 1; i < rows.length; i++) {
    if (i < from || i > to) rows[i].style.display = "none";
    else rows[i].style.display = "";
  }
};

const showPage = function (tableName, pageNumber, itemsPerPage) {
  if (!inited) {
    alert("not inited");
    return;
  }

  currentPage = pageNumber;

  var from = (pageNumber - 1) * itemsPerPage + 1;
  var to = from + itemsPerPage - 1;
  showRecords(tableName, from, to);

  var rows = document.getElementById(tableName).rows;

  if (rows.length === 1) from = 0;
  if (to > rows.length - 1) to = rows.length - 1;

  document.getElementById(
    "pagination-info"
  ).innerHTML = `<span>${from} - ${to} of ${rows.length - 1}</span>`;
};

const init = (tableName, itemsPerPage) => {
  var rows = document.getElementById(tableName).rows;
  var records = rows.length - 1;
  pages = Math.ceil(records / itemsPerPage);
  inited = true;
};

var tableName = "product-table";
var pageNumber = 1;
var itemsPerPage = parseInt(document.getElementById("items-quantity").value);

//add event 'click' for prevBtn
function prevButtonClick() {
  if (currentPage > 1) showPage(tableName, currentPage - 1, itemsPerPage);
}
document.getElementById("prevBtn").addEventListener("click", prevButtonClick);

//add event 'click' for nextBtn
function nextButtonClick() {
  if (currentPage < pages) showPage(tableName, currentPage + 1, itemsPerPage);
}
document.getElementById("nextBtn").addEventListener("click", nextButtonClick);

// get items per page = select value
function getItemsPerPage() {
  itemsPerPage = parseInt(document.getElementById("items-quantity").value);
  init(tableName, itemsPerPage);
  showPage(tableName, pageNumber, itemsPerPage);
}

// update itemsPerPage when select-tag's value change
document
  .getElementById("items-quantity")
  .addEventListener("change", getItemsPerPage);

// init the pagination and show page
init(tableName, itemsPerPage);
showPage(tableName, pageNumber, itemsPerPage);

//create social link icons
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

createSocialLink();
