const menuList = document.querySelector(".sidebar-items");
const customerList = document.querySelector(
  ".dashboard-tactics-customers-content"
);
const productList = document.querySelector(
  ".dashboard-tactics-products-content"
);

const menuItems = [
  {
    class: "fas fa-database",
    title: "Danh sách sản phẩm",
  },
  {
    class: "fas fa-users",
    title: "Khách hàng",
  },
  {
    class: "fa-solid fa-cart-flatbed",
    title: "Đơn hàng",
  },
];

const customerItems = [
  {
    img: "https://kenh14cdn.com/2019/2/15/8-15502075818842118741287.jpg",
    username: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
  },
  {
    img: "https://kenh14cdn.com/2019/2/15/7-15502075818791603462215.jpg",
    username: "Nguyễn Văn B",
    email: "nguyenvanb@gmail.com",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStagzptJQeek_NnbS3ECqsaMrZHPRqmuWqZXFV5eWpCjvxvNM2CVq0NsGQmdwejvO0wZQ&usqp=CAU",
    username: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
  },
  {
    img: "",
    username: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
  },
  {
    img: "https://www.shashindo.de/wp-content/uploads/2020/05/20200421-MichaelSimonsen-8313-682x1024.jpg",
    username: "Nguyễn Văn E",
    email: "nguyenvane@gmail.com",
  },
  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },
];

const productItems = [
  {
    productName: "Bàn chơi game",
    productId: "Mã SP: 0123456",
    sales: 70,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Ghế công thái học",
    productId: "Mã SP: 0123456",
    sales: 54,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Bàn phím cơ",
    productId: "Mã SP: 0123456",
    sales: 47,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tay cầm chơi game",
    productId: "Mã SP: 0123456",
    sales: 43,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Chuột gaming",
    productId: "Mã SP: 0123456",
    sales: 38,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tai nghe không dây",
    productId: "Mã SP: 0123456",
    sales: 22,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tay cầm chơi game",
    productId: "Mã SP: 0123456",
    sales: 20,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Chuột gaming",
    productId: "Mã SP: 0123456",
    sales: 20,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Bàn phím cơ",
    productId: "Mã SP: 0123456",
    sales: 17,
    class: "dashboard-tactics-products-content-item",
  },
];

//create sidebar menu
const createMenuList = () => {
  menuItems.forEach((item) => {
    menuList.innerHTML += `<button><i class="${item.class}"></i><p>${item.title}</p></button>`;
  });
};

createMenuList();

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

const chartLabels = [
  "01 June",
  "02 June",
  "03 June",
  "04 June",
  "05 June",
  "06 June",
  "07 June",
];
const chartData = [880, 1020, 790, 900, 850, 1170, 1250];

//create chart
const lineChart = document.getElementById("myChart");
const myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Doanh thu tháng 6",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "#0E9F6E",
        borderWidth: 3,
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
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  },
});

createCustomerList();

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
