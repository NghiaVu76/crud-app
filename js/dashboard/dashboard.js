import {
  customerItems,
  productItems,
  chartLabels,
  chartData,
  tableData,
  socialIcons,
} from "../constants.js";

const customerList = document.querySelector(
  ".dashboard-tactics-customers-content"
);
const productList = document.querySelector(
  ".dashboard-tactics-products-content"
);

//create new customer list
const createCustomerList = () => {
  customerItems.forEach((item) => {
    customerList.innerHTML += `<div>
            <img src="${item.img}"/>
            <div>
                <h1>${item.username}</h1>
                <h2>${item.email}</h2>
            </div>
            </div>`;
  });
};

createCustomerList();
//create chart
const lineChart = document.getElementById("myChart");
const myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Sales",
        data: chartData,
        fill: false,
        tension: 0.5,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "#0E9F6E",
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        // create tooltip
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "VND",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
        position: "average",
        padding: "18.06px",
        yAlign: "bottom",
        backgroundColor: "#F9FAFB",
        titleColor: "#4B5563",
        titleFont: {
          family: "Inter, sans-serif",
          size: "12",
          weight: "500",
          lineHeight: "150%",
        },
        bodyColor: "#6B7280",
        bodyFont: {
          family: "Inter, sans-serif",
          size: "16",
          weight: "400",
          lineHeight: "150%",
        },
      },
    },
  },
});

//create best-selling products list
const createProductList = () => {
  productItems.forEach((item) => {
    productList.innerHTML += `<div class="${item.class}">
          <div>
              <h1>${item.productName}</h1>
              <h2>${item.productId}</h2>
          </div>
          <p><span>${item.sales}</span>sales</p>
          </div>`;
  });
};

createProductList();

//create table
const tBody = tableData
  .map(function (item, index) {
    if (index % 2 == 1) {
      return `<tr class="even-row">
        <td>${item.customerName}</td>
        <td class="time-column">${item.time}</td>
        <td>${item.totalPrice}</td>
        <td><div class="${item.statusClass}">${item.status}</div></td>
        </tr>`;
    } else if (index % 2 == 0) {
      return `<tr>
        <td>${item.customerName}</td>
        <td class="time-column">${item.time}</td>
        <td>${item.totalPrice}</td>
        <td><div class="${item.statusClass}">${item.status}</div></td>
        </tr>`;
    }
  })
  .join("");
const tabelBody = document.getElementById("tableBody");
tableBody.innerHTML = tBody;

//create social link icons
const socialLink = document.querySelector(".dashboard-footer-group");
export const createSocialLink = () => {
  socialIcons.forEach((item) => {
    socialLink.innerHTML += `<i class="${item.class}"></i>`;
  });
};
createSocialLink();
