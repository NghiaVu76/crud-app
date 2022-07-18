import { customerList, socialIcons } from "../constants.js";
import { renderPage } from "../route.js";

export const createCustomerList = (array) => {
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
        <a href="#update_customers" class="updateBtn"><i class="fa fa-solid fa-pen" id=${index}></i></a>
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
        <a href="#update_customers" class="updateBtn" ><i class="fa-solid fa-pen" id=${index}></i></a>
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

///// add list districts for 'select' input
var districtList = [];

const getDistrict = async () => {
  await fetch(`https://provinces.open-api.vn/api/?depth=2`)
    .then((response) => response.json())
    .then((data) => {
      districtList = data;
    })
    .catch((error) => {
      console.log(error);
    });

  for (var i = 0; i < districtList.length; i++) {
    for (var j = 0; j < districtList[i].districts.length; j++) {
      if (districtList[i].districts[j].division_type === "quận") {
        document.getElementById(
          "customer address"
        ).innerHTML += `<option value="${districtList[i].districts[j].name}, ${districtList[i].name}">${districtList[i].districts[j].name}, ${districtList[i].name}</option>`;
      }
    }
  }
};
getDistrict();

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
      customerNeedUpdate.push({ id: i, content: customerListDuplicate[i] });
      console.log(customerNeedUpdate);
      localStorage.setItem(
        "customerNeedUpdate",
        JSON.stringify(customerNeedUpdate)
      );
    }
  }
  renderPage(); //route to update pages and render
};

// add "click" event for all updateBtn
var updateButtons = document.getElementsByClassName("updateBtn");
for (let i = 0; i < updateButtons.length; i++) {
  var updateButton = updateButtons[i];
  updateButton.addEventListener("click", updateButtonClick);
}

//// DELETE BUTTON
const handleDelete = (event) => {
  customerListDuplicate.splice(event.target.id, 1); //xóa phần tử ở vị trí = id của element kích hoạt sự kiện
  localStorage.setItem("list-customer", JSON.stringify(customerListDuplicate));
  createCustomerList(customerListDuplicate); // render lại bảng sau khi xóa

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

  let searchArr = [];

  for (let i = 0; i < customerListDuplicate.length - 1; i++) {
    if (
      customerListDuplicate[i].customerName
        .toUpperCase()
        .includes(searchInput) ||
      customerListDuplicate[i].customerAddress
        .toUpperCase()
        .includes(searchInput) ||
      customerListDuplicate[i].customerPhoneNumber
        .toUpperCase()
        .includes(searchInput) ||
      customerListDuplicate[i].customerDOB.toUpperCase().includes(searchInput)
    ) {
      searchArr.push(customerListDuplicate[i]);
      console.log("searchArr", searchArr);
      createCustomerList(searchArr); // tạo bảng với dữ liệu đã được lọc

      init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi lọc
      showPage(tableName, pageNumber, itemsPerPage);
    }
  }
}
document
  .getElementById("search-button")
  .addEventListener("click", handleSearch);

//////FILTER PRODUCTS
var name_input = document.getElementById("customer name");

var phone_number_input = document.getElementById("customer phone number");

var address_input = document.getElementById("customer address");

var DOB_input = document.getElementById("customer DOB");

function handleFilter() {
  var nameInput = name_input.value.toUpperCase();
  var phoneNumberInput = phone_number_input.value;
  var addressInput = address_input.value.toUpperCase();
  var DOBInput = DOB_input.value.toUpperCase();

  let filterArr = [];
  for (let i = 0; i < customerListDuplicate.length - 1; i++) {
    if (
      (customerListDuplicate[i].customerName
        .toUpperCase()
        .includes(nameInput) ||
        nameInput == "") &&
      (customerListDuplicate[i].customerPhoneNumber
        .toUpperCase()
        .includes(phoneNumberInput) ||
        phoneNumberInput == "") &&
      (customerListDuplicate[i].customerAddress
        .toUpperCase()
        .includes(addressInput) ||
        addressInput == "") &&
      (customerListDuplicate[i].customerDOB.toUpperCase().includes(DOBInput) ||
        DOBInput == "")
    ) {
      filterArr.push(customerListDuplicate[i]);
      createCustomerList(filterArr); // tạo bảng với dữ liệu đã được lọc

      init(tableName, itemsPerPage); // thêm phân trang cho bảng mới sau khi lọc
      showPage(tableName, pageNumber, itemsPerPage);
    }
  }
}

name_input.addEventListener("keyup", handleFilter);
phone_number_input.addEventListener("keyup", handleFilter);
address_input.addEventListener("change", handleFilter);
DOB_input.addEventListener("keyup", handleFilter);

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
