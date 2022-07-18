import { socialIcons } from "../constants.js";

var productsListDuplicate = JSON.parse(localStorage.getItem("list-product")); // lấy mảng sản phẩm từ localStorage

/////product category list
var categoryArr = [];
productsListDuplicate.map((item, index) => {
  categoryArr.push(item.category);
});

// delete the categories that duplicated
var newCategoryArr = categoryArr.reduce((acc, category) => {
  if (acc.indexOf(category) === -1) {
    acc.push(category);
  }
  return acc;
}, []);

// render category list <select>
var addProductCategory = document.getElementById("category");

const renderProductCategory = () => {
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    if (addProductCategory != null)
      addProductCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
  addProductCategory.innerHTML += `<option value="Khác">Khác</option>`;
};

////FORM-INPUT VALIDATE
var inputElement = document.querySelectorAll(".form-input");

var selectElement = document.querySelectorAll(".form-select");

var errorElement = document.querySelectorAll(".error-message");

const validateInput = () => {
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = `* Please enter the product ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = "";
    }
  }
  for (let i = 0; i < selectElement.length; i++) {
    if (selectElement[i].value == "") {
      selectElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = `Please enter the product ${selectElement[i].id}`;
    } else {
      selectElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = "";
    }
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateInput));
selectElement.forEach((el) => el.addEventListener("change", validateInput));

////ADD NEW PRODUCT
const addProduct = () => {
  validateInput();
  let errorElementArr = []; // tạo mảng chứa danh sách các error
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerText); // push nội dung từng dòng error vào mảng
  }
  let checkError = errorElementArr.every((value) => value === ""); //kiểm tra nếu tất cả error là rỗng thì tức là tát cả các input/select đã được nhập
  if (checkError) {
    // nếu ko có lỗi
    let productName = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;
    let createdAt = document.getElementById("created date").value;
    let price = document.getElementById("price").value;
    let statusClass;

    if (status === "Còn hàng") {
      statusClass = "stocking";
    } else if (status === "Hết hàng") {
      statusClass = "out-of-stock";
    }

    let listProduct = localStorage.getItem("list-product")
      ? JSON.parse(localStorage.getItem("list-product"))
      : [];

    listProduct.unshift({
      productName,
      quantity,
      category,
      status,
      createdAt,
      price,
      statusClass,
    });
    localStorage.setItem("list-product", JSON.stringify(listProduct));
    alert("Thêm thành công!");
  } else {
    alert("Thêm thất bại!");
  }
};
const saveButton = document.getElementById("saveBtn");
saveButton.addEventListener("click", addProduct);

/////CREATE SOCIAL LINK
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

window.onload = function () {
  createSocialLink();
  renderProductCategory();
};
