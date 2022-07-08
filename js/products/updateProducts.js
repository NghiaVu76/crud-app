import { productsList, socialIcons } from "../constants.js";

var productNeedUpdate = JSON.parse(localStorage.getItem("productNeedUpdate"));
console.log(productNeedUpdate);

document.getElementById("update_name-input").value =
  productNeedUpdate[0].content.productName;
document.getElementById("update_quantity-input").value =
  productNeedUpdate[0].content.quantity;
document.getElementById("update_category-input").value =
  productNeedUpdate[0].content.category;
document.getElementById("update_status-input").value =
  productNeedUpdate[0].content.status;
// document.getElementById("update_createDate-input").value =
//   productNeedUpdate[0].createdAt;
document.getElementById("update_price-input").value =
  productNeedUpdate[0].content.price;

//product category
var categoryArr = [];
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
var productCategory = document.getElementById("update_product_category");
for (let i = 0; i < newCategoryArr.length - 1; i++) {
  productCategory.innerHTML += `<option value="${newCategoryArr[i]}">${newCategoryArr[i]}</option>`;
}

////FORM-INPUT VALIDATE
var formElement = document.querySelector(".update-form");
var inputElement = document.querySelectorAll(".update_form-input");
var errorElement = document.querySelectorAll(".update_error-message");

const validateUpdateInput = () => {
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = `* Please enter the product ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = "";
    }
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateUpdateInput));

//// UPDATE PRODUCT
const handleUpdate = () => {
  validateUpdateInput();
  let errorElementArr = [];
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerText);
  }
  let checkError = errorElementArr.every((value) => value === "");
  if (checkError) {
    let productName = document.getElementById("update_name-input").value;
    let quantity = document.getElementById("update_quantity-input").value;
    let category = document.getElementById("update_category-input").value;
    let status = document.getElementById("update_status-input").value;
    let createdAt = document.getElementById("update_createDate-input").value;
    let price = document.getElementById("update_price-input").value;
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
