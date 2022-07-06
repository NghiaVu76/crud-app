document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

export const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  console.log(2);
  handleLocation();
};

const routes = {
  "/": "pages/products.html",
  "/products": "/pages/products.html",
  "/products/add": "/pages/products/add.html",
  "/products/update": "/pages/products/update.html",
  "/customers": "/pages/customers.html",
  "/carts": "/pages/carts.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  if (path.length === 0) path = "/";
  console.log(path);
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = urlRoute;

handleLocation();
