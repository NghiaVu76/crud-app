import { socialIcons } from "../constants.js";

var productsListDuplicate = JSON.parse(localStorage.getItem("list-product")); // lấy mảng sản phẩm từ localStorage
var productNeedUpdate = JSON.parse(localStorage.getItem("productNeedUpdate")); //lấy mảng chứa sản phẩm cần update

document.getElementById("update name").value =
  productNeedUpdate[0].content.productName; //name input
document.getElementById("update quantity").value =
  productNeedUpdate[0].content.quantity; // quantity input
document.getElementById("update category").value =
  productNeedUpdate[0].content.category; // category input
document.getElementById("update status").value =
  productNeedUpdate[0].content.status; // status input
document.getElementById("update created date").value =
  productNeedUpdate[0].content.createdAt;
document.getElementById("update price").value =
  productNeedUpdate[0].content.price; // price input

/////PRODUCT CATEGORY FOR SELECT TAG
var categoryArr = [];
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
const renderProductCategory = () => {
  var productCategory = document.getElementById("update category");
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    productCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
  productCategory.innerHTML += `<option value="Khác">Khác</option>`;
};
renderProductCategory();

////FORM-INPUT VALIDATE
// var formElement = document.querySelector(".update-form");
var inputElement = document.querySelectorAll(".update-form-input"); //lấy tất cả các input element của form
var selectElement = document.querySelectorAll(".update-form-select"); //lấy tất cả select element của form
var errorElement = document.querySelectorAll(".update_error-message");

const validateUpdateInput = () => {
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = `* Please enter the product ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = "";
    }
  }
  for (let i = 0; i < selectElement.length; i++) {
    if (selectElement[i].value == "") {
      selectElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = `* Please enter the product ${selectElement[i].id}`;
    } else {
      selectElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = "";
    }
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateUpdateInput));
selectElement.forEach((el) =>
  el.addEventListener("change", validateUpdateInput)
);

//// UPDATE PRODUCT
const handleUpdate = () => {
  validateUpdateInput();
  let errorElementArr = [];
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerText);
  }
  let checkError = errorElementArr.every((value) => value === "");
  if (checkError) {
    let productName = document.getElementById("update name").value;
    let quantity = document.getElementById("update quantity").value;
    let category = document.getElementById("update category").value;
    let status = document.getElementById("update status").value;
    let createdAt = document.getElementById("update created date").value;
    let price = document.getElementById("update price").value;
    let statusClass;
    if (status === "Còn hàng") {
      statusClass = "stocking";
    } else if (status === "Hết hàng") {
      statusClass = "out-of-stock";
    }

    let listProduct = localStorage.getItem("list-product")
      ? JSON.parse(localStorage.getItem("list-product"))
      : [];

    let index = productNeedUpdate[0].id; //lấy ra id của sản phẩm cần update

    listProduct[index] = {
      productName,
      category,
      quantity,
      createdAt,
      price,
      status,
      statusClass,
    };
    localStorage.setItem("list-product", JSON.stringify(listProduct));
    alert("Cập nhật thành công!");
  } else {
    alert("Cập nhật thất bại!");
  }
};

const saveButton = document.getElementById("updateSaveBtn");
saveButton.addEventListener("click", handleUpdate);

//create social link icons
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

createSocialLink();
