import { productsList, socialIcons } from "../constants.js";

/////product category list
var categoryArr = [];
productsList.map((item, index) => {
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
var addProductCategory = document.getElementById("add_product_category");
console.log(addProductCategory);
const renderProductCategory = () => {
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    if (addProductCategory != null)
      addProductCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
};

////FORM-INPUT VALIDATE
var formElement = document.querySelector(".form");
var inputElement = document.querySelectorAll(".form-input");
var errorElement = document.querySelectorAll(".error-message");

const validateInput = () => {
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.querySelector(
        ".error-message"
      ).innerHTML = `* Please enter the product ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.querySelector(".error-message").innerHTML =
        "";
    }
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateInput));

////ADD NEW PRODUCT
const addProduct = () => {
  validateInput();
  let errorElementArr = [];
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerText);
  }
  let checkError = errorElementArr.every((value) => value === "");
  if (checkError) {
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

  productsList += listProduct;
  console.log(productsList);
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
