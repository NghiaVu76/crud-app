const menuItems = [
  {
    class: "fas fa-database",
    title: "Danh sách sản phẩm",
    path: "/products",
  },
  {
    class: "fas fa-users",
    title: "Khách hàng",
    path: "/customers",
  },
  {
    class: "fa-solid fa-cart-flatbed",
    title: "Đơn hàng",
    path: "/carts",
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
    img: "https://cdn.tgdd.vn/Files/2022/02/21/1416573/bill-gates-la-ai_1280x860-800-resize.jpg",
    username: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
  },
  {
    img: "https://www.shashindo.de/wp-content/uploads/2020/05/20200421-MichaelSimonsen-8313-682x1024.jpg",
    username: "Nguyễn Văn E",
    email: "nguyenvane@gmail.com",
  },
  {
    img: "https://kenh14cdn.com/2019/4/15/rose-bp-1555308347518704359300.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://vnn-imgs-a1.vgcloud.vn/photo-cms-tpo.zadn.vn/w645/Uploaded/2022/zaugtn/2022_03_18/lisa2-7289.jpeg",
    username: "Nguyễn Văn Lía",
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

const tableData = [
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn B",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn C",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đã hủy",
    statusClass: "canceled",
  },
  {
    customerName: "Nguyễn Văn E",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đang giao",
    statusClass: "pending",
  },
  {
    customerName: "Nguyễn Văn F",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đã hủy",
    statusClass: "canceled",
  },
  {
    customerName: "Nguyễn Văn G",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đang giao",
    statusClass: "pending",
  },
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
];

const socialIcons = [
  {
    class: "fa-brands fa-facebook-f",
  },
  {
    class: "fa-brands fa-twitter",
  },
  {
    class: "fa-brands fa-instagram",
  },
  {
    class: "fa-brands fa-weibo",
  },
];

const productsList = [
  {
    productName: "Chuột máy tính",
    category: "Chuột",
    createdAt: "Jun 23, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn làm việc",
    category: "Bàn",
    createdAt: "Jun 23, 2022",
    quantity: 100,
    price: 6700000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Ghế công thái học",
    category: "Ghế",
    createdAt: "Jun 18, 2022",
    quantity: 0,
    price: 2340000,
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tay cầm chơi game",
    category: "Đồ gaming",
    createdAt: "Jun 15, 2022",
    quantity: 0,
    price: 5000000,
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Chuột gaming",
    category: "Chuột",
    createdAt: "Jun 15, 2022",
    quantity: 0,
    price: 2300000,
    status: "Hết hàng",
    statusClass: "stocking",
  },
  {
    productName: "Tai nghe không dây",
    category: "Tai nghe",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2800000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím cơ",
    category: "Bàn phím",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím văn phòng",
    category: "Bàn phím",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột bình thường",
    category: "Lót chuột",
    createdAt: "Jun 11, 2022",
    quantity: 50,
    price: 300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột RGB",
    category: "Lót chuột",
    createdAt: "Jun 11, 2022",
    quantity: 60,
    price: 500000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Chuột máy tính",
    category: "Chuột",
    createdAt: "Jun 23, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn làm việc",
    category: "Bàn",
    createdAt: "Jun 23, 2022",
    quantity: 100,
    price: 6700000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Ghế công thái học",
    category: "Ghế",
    createdAt: "Jun 18, 2022",
    quantity: 0,
    price: 2340000,
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tay cầm chơi game",
    category: "Đồ gaming",
    createdAt: "Jun 15, 2022",
    quantity: 0,
    price: 5000000,
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Chuột gaming",
    category: "Chuột",
    createdAt: "Jun 15, 2022",
    quantity: 0,
    price: 2300000,
    status: "Hết hàng",
    statusClass: "stocking",
  },
  {
    productName: "Tai nghe không dây",
    category: "Tai nghe",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2800000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím cơ",
    category: "Bàn phím",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím văn phòng",
    category: "Bàn phím",
    createdAt: "Jun 11, 2022",
    quantity: 100,
    price: 2300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột bình thường",
    category: "Lót chuột",
    createdAt: "Jun 11, 2022",
    quantity: 50,
    price: 300000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột RGB",
    category: "Lót chuột",
    createdAt: "Jun 11, 2022",
    quantity: 60,
    price: 500000,
    status: "Còn hàng",
    statusClass: "stocking",
  },
];

export {
  menuItems,
  customerItems,
  productItems,
  chartLabels,
  chartData,
  tableData,
  socialIcons,
  productsList,
};
