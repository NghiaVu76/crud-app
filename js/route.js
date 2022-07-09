// document.addEventListener("click", (e) => {
//   const { target } = e;
//   if (
//     !target.matches("nav a") ||
//     !target.matches("div a") ||
//     !target.matches("button a")
//   ) {
//     return;
//   }
//   e.preventDefault();
//   urlRoute();
// });

const routes = {
  DASHBOARD: {
    pathname: "/",
    link: "/pages/index.html",
  },

  PRODUCT: {
    pathname: "/products",
    link: "/pages/products.html",
  },

  ADD_PRODUCT: {
    pathname: "/products/add",
    link: "/pages/products/add.html",
  },

  UPDATE_PRODUCT: {
    pathname: "/products/update",
    link: "/pages/products/update.html",
  },

  // "/": "pages/products.html",
  // "/products": "/pages/products/add.html",
  // "/products/add": "/pages/products/add.html",
  // "/products/update": "/pages/products/update.html",
  // "/customers": "/pages/customers.html",
  // "/carts": "/pages/carts.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  if (path.length === 0) path = "/";
  console.log(path);
  let route;
  if (path == routes.DASHBOARD.pathname) {
    route = routes.DASHBOARD.link;
  } else if (path == routes.PRODUCT.pathname) {
    route = routes.PRODUCT.link;
  } else if (path == routes.ADD_PRODUCT.pathname) {
    route = routes.ADD_PRODUCT.link;
  } else if (path == routes.UPDATE_PRODUCT.pathname) {
    route = routes.UPDATE_PRODUCT.link;
  }
  console.log(route);
  const html = await fetch(route).then((data) => data.text());
  console.log(html);
  document.getElementById("main-page").innerHTML = html;
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  console.log("event.target.href", event.target.href);
  console.log(2);
  handleLocation();
};

document.querySelectorAll("a").forEach((el) =>
  el.addEventListener("click", (e) => {
    const { target } = e;
    console.log(target);
    if (!target.matches("nav a") || !target.matches("div a")) {
      return;
    }
    e.preventDefault();
    urlRoute();
  })
);

window.onpopstate = handleLocation;
window.route = urlRoute;

handleLocation();
