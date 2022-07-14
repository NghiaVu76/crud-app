document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("button a") && !target.matches("div a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

export const urlRoute = (event) => {
  event = event || window.event;
  window.history.pushState({}, "", event.target.href);
  console.log("event.target.href", event.target.href);
  console.log(2);
  handleLocation();
};

const routes = {
  DASHBOARD: {
    pathname: "/",
    link: "/pages/customers/add.html",
  },

  PRODUCTS: {
    pathname: "/products",
    link: "/pages/products.html",
  },

  ADD_PRODUCTS: {
    pathname: "/add_products",
    link: "/pages/products/add.html",
  },

  UPDATE_PRODUCTS: {
    pathname: "/update_products",
    link: "/pages/products/update.html",
  },

  CUSTOMERS: {
    pathname: "/customers",
    link: "/pages/customers.html",
  },

  ADD_CUSTOMERS: {
    pathname: "/add_customers",
    link: "/pages/customers/add.html",
  },

  UPDATE_CUSTOMERS: {
    pathname: "/update_customers",
    link: "/pages/customers/update.html",
  },

  CARTS: {
    pathname: "/carts",
    link: "/pages/carts.html",
  },
};

const handleLocation = async () => {
  const path = window.location.pathname; // get pathname of current page
  if (path.length == 0) path = "/";
  console.log(path);
  let route;
  if (path == routes.DASHBOARD.pathname) {
    route = routes.DASHBOARD.link;
  } else if (path == routes.PRODUCTS.pathname) {
    route = routes.PRODUCTS.link;
  } else if (path == routes.ADD_PRODUCTS.pathname) {
    route = routes.ADD_PRODUCTS.link;
  } else if (path == routes.UPDATE_PRODUCTS.pathname) {
    route = routes.UPDATE_PRODUCTS.link;
  } else if (path == routes.CUSTOMERS.pathname) {
    route = routes.CUSTOMERS.link;
  } else if (path == routes.ADD_CUSTOMERS.pathname) {
    route = routes.CUSTOMERS.link;
  } else if (path == routes.UPDATE_CUSTOMERS.pathname) {
    route = routes.CUSTOMERS.link;
  } else if (path == routes.CARTS.pathname) {
    route = routes.CARTS.link;
  }
  console.log(route);
  const html = await fetch(route).then((data) => data.text()); // fetch html data
  console.log(html);
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = urlRoute;
handleLocation();

////
// export const urlRoute = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   console.log("event.target.href", event.target.href);
//   console.log(2);
//   handleLocation();
// };

// const routes = {
//   404: "/pages/404.html",
//   "/": "/pages/dashboard.html",
//   "/products": "/pages/products.html",
//   "/add_products": "/pages/products/add.html",
//   "/update_products": "/pages/products/update.html",
//   "/customers": "/pages/customers.html",
//   "/carts": "/pages/carts.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   if (path == 0) path = "/";
//   console.log(path);
//   const route = routes[path] || routes[404];
//   console.log(route);
//   const html = await fetch(route).then((data) => data.text());
//   document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = urlRoute;
// handleLocation();
