import { customerList, socialIcons } from "../constants.js";
import { urlRoute } from "../route.js";

localStorage.setItem("list-customer", JSON.stringify(customerList));

const createCustomerList = (array) => {
  const customerTable = array
    .map(function (item, index) {
      if (index % 2 == 1) {
        return `<tr class="even-row" id="customer-row">
      <td>${item.customerName}</td>
      <td>${item.customerPhoneNumber}</td>
      <td class="time-column">${item.customerDOB}</td>
      <td>${item.customerAddress}</td>
      <td>${item.customerEmail}</td>
      <td>
        <a href="/update_customers" class="updateBtn"><i class="fa fa-solid fa-pen" id=${index}></i></a>
        <button class="deleteBtn"><i class="fa-regular fa-trash-can" id="${index}"></i></button>
      </td>
      </tr>`;
      } else if (index % 2 == 0) {
        return `<tr id="product-row">
      <td>${item.customerName}</td>
      <td>${item.customerPhoneNumber}</td>
      <td class="time-column">${item.customerDOB}</td>
      <td>${item.customerAddress}</td>
      <td>${item.customerEmail}</td>
      <td>
        <a href="/update_customers" class="updateBtn" ><i class="fa-solid fa-pen" id=${index}></i></a>
        <button class="deleteBtn" ><i class="fa-regular fa-trash-can" id="${index}"></i></button>
      </td>
      </tr>`;
      }
    })
    .join("");
  document.getElementById("customerTableBody").innerHTML = customerTable;
};
var customerListDuplicate = JSON.parse(localStorage.getItem("list-customer")); //lấy dữ liệu từ localStorage
createCustomerList(customerListDuplicate); // tạo bảng sản phẩm (sử dụng mảng lấy từ localStorage)

///// add list categories for 'select' input
const renderCustomerAddress = () => {
  let addressArr = [];
  customerListDuplicate.map((item, index) => {
    addressArr.push(item.customerAddress);
  });

  // delete the categories that duplicated
  let newAddressArr = addressArr.reduce((acc, address) => {
    if (acc.indexOf(address) === -1) {
      acc.push(address);
    }
    return acc;
  }, []);

  // render category list <select>
  var customerAddressElement = document.getElementById("customer address");
  for (let i = 0; i < newAddressArr.length - 1; i++) {
    customerAddressElement.innerHTML += `<option value="${newAddressArr[i]}">${newAddressArr[i]}</option>`;
  }
};

renderCustomerAddress();

//// HIDE/SHOW FILTER
const filterHideButton = document.getElementById("filterHideBtn");
const filterShowButton = document.getElementById("filterShowBtn");
const customerFilter = document.getElementById("customer_filter");

filterHideButton.style.display = "none";
customerFilter.style.display = "none";

const filterShow = () => {
  customerFilter.style.display = "";
  filterShowButton.style.display = "none";
  filterHideButton.style.display = "";
};

const filterHide = () => {
  customerFilter.style.display = "none";
  filterShowButton.style.display = "";
  filterHideButton.style.display = "none";
};

filterShowButton.addEventListener("click", filterShow);
filterHideButton.addEventListener("click", filterHide);

//// UPDATE BUTTON
const updateButtonClick = (e) => {
  var customerNeedUpdate = [];
  console.log(e.target.id);
  for (let i = 0; i < customerListDuplicate.length; i++) {
    if (i == e.target.id) {
      customerNeedUpdate.push({ id: i, content: productsListDuplicate[i] });
      console.log(customerNeedUpdate);
      localStorage.setItem(
        "productNeedUpdate",
        JSON.stringify(customerNeedUpdate)
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

//////FILTER PRODUCTS
var name_input = document.getElementById("name-input");

var quantity_input = document.getElementById("quantity-input");

var category_input = document.getElementById("category-input");

var status_input = document.getElementById("status-input");

function handleFilter() {
  var nameInput = name_input.value.toUpperCase();
  var quantityInput = quantity_input.value;
  var categoryInput = category_input.value.toUpperCase();
  var statusInput = status_input.value.toUpperCase();

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
      showPage(tableName, pageNumber, itemsPerPage);
    }
  }
}

name_input.addEventListener("keyup", handleFilter);
quantity_input.addEventListener("keyup", handleFilter);
category_input.addEventListener("keyup", handleFilter);
status_input.addEventListener("keyup", handleFilter);

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

var tableName = "customer-table";
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
