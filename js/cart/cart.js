import { getProduct } from "../visual-interface/fetch.js";

const URL = "https://fakestoreapi.com/products";

let vCart = [];
function addSessionStorage(vCart) {
  sessionStorage.clear();
  sessionStorage.cart = JSON.stringify(vCart);
}

export function showCart() {
  let totalPurchase = 0;
  const BODYCART = document.getElementById("content-cart");
  BODYCART.innerHTML = "";
  let items = JSON.parse(sessionStorage.cart);
  items.forEach(async (id) => {
    const product = await getProduct(URL, id);
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.dataset.index = product.id;
    item.innerHTML = `
    <div class="imagen">
      <img  src="${product.image}" alt="" />
    </div>
    <div class="info-product">

      <span id="title">${product.title}</span>
      <span>
      <strong>Description: </strong>
      <br>
      ${product.description}</span>
      <span>$${product.price}</span>
      <button class="button-delete" data-index="${product.id}">Delete</button>
    </div>
    `;
    totalPurchase += product.price;
    BODYCART.appendChild(item);
    const FOOTER = document.getElementById("footer-cart");
    FOOTER.innerHTML = `
    <span>$${totalPurchase.toFixed(2)}</span>
    `;
    const DELETEBUTTONS = document.querySelectorAll(".button-delete");
    DELETEBUTTONS.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const BUTTON = e.target;
        deleteItem(BUTTON.getAttribute("data-index"));
      });
    });
  });
}

function deleteItem(id) {
  const index = vCart.indexOf(id);
  vCart.splice(index, 1);
  // if (vCart.length === 0) {
  //   console.log("holasas");
  //   const FOOTER = document.getElementById("footer-cart");
  //   const BODYCART = document.getElementById("content-cart");
  //   BODYCART.innerHTML = `<h1>you have to buy something:(</h1>`;
  //   FOOTER.innerHTML = `
  //   <span>$0</span>
  //   `;
  // }
  addSessionStorage(vCart);
  showCart();
}

export function eventButton() {
  let buttons = document.querySelectorAll(".cart-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const BUTTON = e.target;
      vCart.push(BUTTON.getAttribute("data-index"));
      addSessionStorage(vCart);
    });
  });
}
