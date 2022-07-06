import { productsList, socialIcons } from "../constants.js";

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

//create social link icons
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

createSocialLink();
