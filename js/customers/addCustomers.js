import { socialIcons } from "../constants.js";

var customerListDuplicate = JSON.parse(localStorage.getItem("list-customer")); // lấy mảng sản phẩm từ localStorage

///// add list provinces, districts for 'select' input
var addressList = [];

const getProvinces = async () => {
  //render provinces list
  await fetch(`https://provinces.open-api.vn/api/?depth=2`)
    .then((response) => response.json())
    .then((data) => {
      addressList = data;
    })
    .catch((error) => {
      console.log(error);
    });

  for (var i = 0; i < addressList.length; i++) {
    document.getElementById(
      "province"
    ).innerHTML += `<option value="${addressList[i].name}">${addressList[i].name}</option>`;
  }
};
getProvinces();

const getDistricts = () => {
  let districtElement;
  for (let i = 0; i < addressList.length; i++) {
    if (addressList[i].name === document.getElementById("province").value) {
      //render danh sách quận huyện theo từng tỉnh thành
      for (var j = 0; j < addressList[i].districts.length; j++) {
        districtElement += `<option value="${addressList[i].districts[j].name}">${addressList[i].districts[j].name}</option>`;
      }
      document.getElementById(
        "district"
      ).innerHTML = `<option value="">--</option>${districtElement}`;
    } else if (document.getElementById("province").value == "") {
      document.getElementById(
        "district"
      ).innerHTML = `<option value="">--</option>`;
    }
  }
};
document.getElementById("province").addEventListener("change", getDistricts); //khi đổi tỉnh thành thì render lại list quận huyện theo tỉnh thành mới

////FORM-INPUT VALIDATE
var inputElement = document.querySelectorAll(".form-input");
var selectElement = document.querySelectorAll(".form-select");
var errorElement = document.querySelectorAll(".error-message");

const validateInput = () => {
  var phoneNumberInput = document.getElementById("phone number");
  var emailInput = document.getElementById("email");

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = `* Please enter the customer ${inputElement[i].id}`;
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
      ).innerHTML = `Please enter the customer ${selectElement[i].id}`;
    } else {
      selectElement[i].parentElement.parentElement.querySelector(
        ".error-message"
      ).innerHTML = "";
    }
  }

  var regExp = /[^0-9]/g;

  if (
    //kiểm tra SĐT chứa kí tự không phải là số, dài hơn 11 cs và ngắn hơn 10 cs > lỗi
    regExp.test(phoneNumberInput.value) ||
    phoneNumberInput.value.length > 11 ||
    phoneNumberInput.value.length < 10
  ) {
    phoneNumberInput.parentElement.parentElement.querySelector(
      ".error-message"
    ).innerHTML = `*Invalid phone number`;
  }

  if (!emailInput.value.includes("@")) {
    emailInput.parentElement.parentElement.querySelector(
      ".error-message"
    ).innerHTML = "*Invalid email";
  }
};
inputElement.forEach((el) => el.addEventListener("keyup", validateInput));
selectElement.forEach((el) => el.addEventListener("change", validateInput));

////ADD NEW CUSTOMER
const addCustomer = () => {
  validateInput();
  let errorElementArr = []; // tạo mảng chứa danh sách các error
  for (let i = 0; i < errorElement.length; i++) {
    errorElementArr.push(errorElement[i].innerText); // push nội dung từng dòng error vào mảng
  }
  let checkError = errorElementArr.every((value) => value === ""); //kiểm tra nếu tất cả error là rỗng thì tức là tát cả các input/select đã được nhập
  if (checkError) {
    // nếu ko có lỗi
    let customerName = document.getElementById("name").value;
    let customerPhoneNumber = document.getElementById("phone number").value;
    let customerProvince = document.getElementById("province").value;
    let customerDistrict = document.getElementById("district").value;
    let customerDOB = document.getElementById("DOB").value;
    let customerEmail = document.getElementById("email").value;

    let customerAddress = `${customerDistrict}, ${customerProvince}`;

    let listCustomer = localStorage.getItem("list-customer")
      ? JSON.parse(localStorage.getItem("list-customer"))
      : [];

    listCustomer.unshift({
      customerName,
      customerPhoneNumber,
      customerDOB,
      customerAddress,
      customerEmail,
    });
    localStorage.setItem("list-customer", JSON.stringify(listCustomer));
    alert("Thêm thành công!");
  } else {
    alert("Thêm thất bại!");
  }
};
const saveButton = document.getElementById("saveBtn");
saveButton.addEventListener("click", addCustomer);

/////CREATE SOCIAL LINK
const socialLink = document.querySelector(".dashboard-footer-group");
const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};

window.onload = function () {
  createSocialLink();
};
