import { productsList } from "../constants.js";

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
        <i class="fa-solid fa-pen"></i>
        <i class="fa-regular fa-trash-can"></i>
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
        <i class="fa-solid fa-pen"></i>
        <i class="fa-regular fa-trash-can"></i>
      </td>
      </tr>`;
    }
  })
  .join("");
document.getElementById("productTableBody").innerHTML = productsTable;
