import { productsList, socialIcons } from "../constants.js";

/////product category list
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
  var addProductCategory = document.getElementById("add_product_category");
  for (let i = 0; i < newCategoryArr.length - 1; i++) {
    addProductCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
  }
};
renderProductCategory();

////FORM-INPUT VALIDATE
var formElement = document.querySelector(".form");
var inputElement = document.querySelectorAll(".form-input");
var errorElement = document.querySelectorAll(".error-message");

const validateInput = () => {
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      errorElement[i].style.display = "";
    } else {
      errorElement[i].style.display = "none";
    }
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateInput));

const saveButton = document.getElementById("saveBtn");
saveButton.addEventListener("click", addProduct);

////ADD NEW PRODUCT
const addProduct = () => {
  validateInput();
  let errorElementArr = [];
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerHTML);
  }
  let checkError = errorElementArr.every((value) => value === "");
  if (checkError) {
    console.log("Thêm thành công!");
  }
};

/////CREATE SOCIAL LINK
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

createSocialLink();
