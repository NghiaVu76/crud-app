import { productsList, socialIcons } from "../constants.js";

console.log(productsList);

const productsTable = productsList
  .map(function (item, index) {
    if (index % 2 == 1) {
      return `<tr class="even-row">
      <td>${item.productName}</td>
      <td>${item.category}</td>
      <td class="time-column">${item.createdAt}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td><div class="${item.statusClass}">${item.status}</div></td>
      <td>
        <i class="fa-solid fa-pen" id="pen"></i>
        <i class="fa-regular fa-trash-can" id="trashCan"></i>
      </td>
      </tr>`;
    } else if (index % 2 == 0) {
      return `<tr>
      <td>${item.productName}</td>
      <td>${item.category}</td>
      <td class="time-column">${item.createdAt}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td><div class="${item.statusClass}">${item.status}</div></td>
      <td>
        <i class="fa-solid fa-pen" id="pen"></i>
        <i class="fa-regular fa-trash-can" id="trashCan"></i>
      </td>
      </tr>`;
    }
  })
  .join("");
document.getElementById("productTableBody").innerHTML = productsTable;

//table pagination
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
  console.log(itemsPerPage);
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
