import { socialIcons } from "../constants.js";

var customerListDuplicate = JSON.parse(localStorage.getItem("list-customer")); // lấy mảng khách hàng từ localStorage

//FILL CUSTOMER DATA THAT NEED UPDATED TO THE FORM
var customerNeedUpdate = JSON.parse(localStorage.getItem("customerNeedUpdate")); //lấy mảng chứa thông tin khách hàng cần update

var addressString = customerNeedUpdate[0].content.customerAddress;
var stringIndex = addressString.indexOf(",");
var districtString = addressString.slice(0, stringIndex);
var provinceString = addressString.slice(stringIndex + 2, addressString.length);

document.getElementById("updated name").value =
  customerNeedUpdate[0].content.customerName; //name input
document.getElementById("updated phone number").value =
  customerNeedUpdate[0].content.customerPhoneNumber; //phone number input
document.getElementById(
  "updated province"
).innerHTML = `<option value="${provinceString}">${provinceString}</option>`; //province input
document.getElementById(
  "updated district"
).innerHTML = `<option value="${districtString}">${districtString}</option>`; //district input
document.getElementById("updated DOB").value =
  customerNeedUpdate[0].content.customerDOB; // DOB input
document.getElementById("updated email").value =
  customerNeedUpdate[0].content.customerEmail; //

/////CUSTOMER ADDRESS FOR SELECT TAG
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
      "updated province"
    ).innerHTML += `<option value="${addressList[i].name}">${addressList[i].name}</option>`;
  }
};
getProvinces();

const getDistricts = () => {
  let districtElement;
  for (let i = 0; i < addressList.length; i++) {
    if (
      addressList[i].name === document.getElementById("updated province").value
    ) {
      //render danh sách quận huyện theo từng tỉnh thành
      for (var j = 0; j < addressList[i].districts.length; j++) {
        districtElement += `<option value="${addressList[i].districts[j].name}">${addressList[i].districts[j].name}</option>`;
      }
      document.getElementById(
        "updated district"
      ).innerHTML = `<option value="">--</option>${districtElement}`;
    } else if (document.getElementById("updated province").value == "") {
      document.getElementById(
        "updated district"
      ).innerHTML = `<option value="">--</option>`;
    }
  }
};
document
  .getElementById("updated province")
  .addEventListener("change", getDistricts); //khi đổi tỉnh thành thì render lại list quận huyện theo tỉnh thành mới

////FORM-INPUT VALIDATE
var inputElement = document.querySelectorAll(".update-form-input"); //lấy tất cả các input element của form
var selectElement = document.querySelectorAll(".update-form-select"); //lấy tất cả select element của form
var errorElement = document.querySelectorAll(".update_error-message");

const validateUpdateInput = () => {
  var phoneNumberInput = document.getElementById("updated phone number");
  var emailInput = document.getElementById("updated email");
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
      ).innerHTML = `* Please enter the customer ${inputElement[i].id}`;
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
      ).innerHTML = `* Please enter the customer ${selectElement[i].id}`;
    } else {
      selectElement[i].parentElement.parentElement.querySelector(
        ".update_error-message"
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
      ".update_error-message"
    ).innerHTML = `* Invalid phone number`;
  }

  if (!emailInput.value.includes("@")) {
    emailInput.parentElement.parentElement.querySelector(
      ".update_error-message"
    ).innerHTML = "* Invalid email";
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
    let customerName = document.getElementById("updated name").value;
    let customerPhoneNumber = document.getElementById(
      "updated phone number"
    ).value;
    let customerProvince = document.getElementById("updated province").value;
    let customerDistrict = document.getElementById("updated district").value;
    let customerDOB = document.getElementById("updated DOB").value;
    let customerEmail = document.getElementById("updated email").value;

    let customerAddress = `${customerDistrict}, ${customerProvince}`;

    let listCustomer = localStorage.getItem("list-customer")
      ? JSON.parse(localStorage.getItem("list-customer"))
      : [];

    let index = customerNeedUpdate[0].id; //lấy ra id của khách hàng cần update

    listCustomer[index] = {
      customerName,
      customerPhoneNumber,
      customerDOB,
      customerAddress,
      customerEmail,
    };
    localStorage.setItem("list-customer", JSON.stringify(listCustomer));
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
