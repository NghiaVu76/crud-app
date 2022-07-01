const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/pages/products.html",
  "/products": "/pages/products.html",
  "/customers": "/pages/customers.html",
  "/carts": "/pages/carts.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path);
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  console.log(html);
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
