import { productList, socialIcons } from "../constants.js";
import { urlRoute } from "../route.js";

const createProductsList = (array) => {
  const productsTable = array
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
        <a href="/update_products" class="updateBtn"><i class="fa fa-solid fa-pen" id=${index}></i></a>
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
        <a href="/update_products" class="updateBtn"><i class="fa-solid fa-pen" id=${index}></i></a>
        <button class="deleteBtn" ><i class="fa-regular fa-trash-can" id="${index}"></i></button>
      </td>
      </tr>`;
      }
    })
    .join("");
  document.getElementById("productTableBody").innerHTML = productsTable;
};
var productsListDuplicate = JSON.parse(localStorage.getItem("list-product")); //lấy dữ liệu từ localStorage
// console.log("productsListDuplicate", productsListDuplicate);
createProductsList(productsListDuplicate); // tạo bảng sản phẩm (sử dụng mảng lấy từ localStorage)

///// add list categories for 'select' input
const renderProductCategory = () => {
  let categoryArr = [];
  productsListDuplicate.map((item, index) => {
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
  var ProductCategory = document.getElementById("category-select");
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    ProductCategory.innerHTML += `
    <option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
};

renderProductCategory();

////SEARCH PRODUCTS
var search_input = document.getElementById("search-input");

function handleSearch() {
  var searchInput = search_input.value.toUpperCase();
  // var quantityInput = quantity_input.value.toUpperCase();
  // var categoryInput = category_input.value.toUpperCase();
  // var statusInput = status_input.value.toUpperCase();

  let searchArr = [];

  for (let i = 0; i < productsListDuplicate.length - 1; i++) {
    if (searchInput == productsListDuplicate[i].productName.toUpperCase()) {
      searchArr.push(productsListDuplicate[i]);
      console.log("searchArr", searchArr);
      createProductsList(searchArr); // tạo bảng với dữ liệu đã được lọc

      init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi lọc
      showPage(tableName, pageNumber, itemsPerPage);
    }
  }
}
document
  .getElementById("search-button")
  .addEventListener("click", handleSearch);

//// HIDE/SHOW FILTER
const filterHideButton = document.getElementById("filterHideBtn");
const filterShowButton = document.getElementById("filterShowBtn");
const productFilter = document.getElementById("product_filter");

filterHideButton.style.display = "none";
productFilter.style.display = "none";

const filterShow = () => {
  productFilter.style.display = "";
  filterShowButton.style.display = "none";
  filterHideButton.style.display = "";
};

const filterHide = () => {
  productFilter.style.display = "none";
  filterShowButton.style.display = "";
  filterHideButton.style.display = "none";
};

filterShowButton.addEventListener("click", filterShow);
filterHideButton.addEventListener("click", filterHide);

//////FILTER PRODUCTS
var name_input = document.getElementById("name-input");

var quantity_input = document.getElementById("quantity-input");

var category_select = document.getElementById("category-select");

var status_select = document.getElementById("status-select");

function handleFilter() {
  var nameInput = name_input.value.toUpperCase();
  var quantityInput = quantity_input.value;
  var categoryInput = category_select.value.toUpperCase();
  console.log(categoryInput);
  var statusInput = status_select.value.toUpperCase();

  let filterArr = [];
  for (let i = 0; i < productsListDuplicate.length - 1; i++) {
    if (
      (nameInput == productsListDuplicate[i].productName.toUpperCase() ||
        nameInput == "") &&
      (quantityInput == productsListDuplicate[i].quantity ||
        quantityInput == "") &&
      (categoryInput == productsListDuplicate[i].category.toUpperCase() ||
        categoryInput == "") &&
      (statusInput == productsListDuplicate[i].status.toUpperCase() ||
        statusInput == "")
    ) {
      filterArr.push(productsListDuplicate[i]);
      createProductsList(filterArr); // tạo bảng với dữ liệu đã được lọc

      init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi lọc
      showPage(tableName, pageNumber, itemsPerPage); //pageNumber gán mặc định = 1, nên show trang đầu tiên
    }
  }
}

name_input.addEventListener("keyup", handleFilter);
quantity_input.addEventListener("keyup", handleFilter);
category_select.addEventListener("change", handleFilter);
status_select.addEventListener("change", handleFilter);

//// UPDATE BUTTON
const updateButtonClick = (e) => {
  var productNeedUpdate = [];
  console.log(e.target.id);
  for (let i = 0; i < productsListDuplicate.length; i++) {
    if (i == e.target.id) {
      productNeedUpdate.push({ id: i, content: productsListDuplicate[i] });
      console.log(productNeedUpdate);
      localStorage.setItem(
        "productNeedUpdate",
        JSON.stringify(productNeedUpdate)
      );
    }
  }
  urlRoute(); //route to update pages
};

// add "click" event for all updateBtn
var updateButtons = document.getElementsByClassName("updateBtn");
for (let i = 0; i < updateButtons.length; i++) {
  var updateButton = updateButtons[i];
  updateButton.addEventListener("click", updateButtonClick);
}

//// DELETE BUTTON
const handleDelete = (event) => {
  productsListDuplicate.splice(event.target.id, 1); //xóa phần tử ở vị trí = id của element kích hoạt sự kiện
  localStorage.setItem("list-product", JSON.stringify(productsListDuplicate));
  createProductsList(productsListDuplicate); // render lại bảng sau khi xóa

  init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi xóa
  showPage(tableName, currentPage, itemsPerPage); // show trang hiện tại vừa xóa 1 sản phẩm

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
var itemsPerPage = parseInt(document.getElementById("items-quantity").value); // items per page = value of select tag

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

///////create social link icons
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

createSocialLink();
