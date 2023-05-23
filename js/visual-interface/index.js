import { createCards } from "./cards.js";
import { getAllProducts, getCategories, getCategoryProducts } from "./fetch.js";

const URL = "https://fakestoreapi.com/products";

function setEvent(id) {
  const ALL = document.getElementById("content-all");
  const ELECTRONICS = document.getElementById("content-electronics");
  const JEWELERY = document.getElementById("content-jewelery");
  const MEN = document.getElementById("content-men");
  const WOMEN = document.getElementById("content-women");
  ALL.style.display = "none";
  switch (Number(id)) {
    case 0:
      ELECTRONICS.classList.add("fadeIn");
      ELECTRONICS.style.display = "block";
      JEWELERY.classList.remove("fadeIn");
      JEWELERY.style.display = "none";
      MEN.classList.remove("fadeIn");
      MEN.style.display = "none";
      WOMEN.classList.remove("fadeIn");
      WOMEN.style.display = "none";
      break;
    case 1:
      ELECTRONICS.classList.remove("fadeIn");
      ELECTRONICS.style.display = "none";
      JEWELERY.classList.add("fadeIn");
      JEWELERY.style.display = "block";
      MEN.classList.remove("fadeIn");
      MEN.style.display = "none";
      WOMEN.classList.remove("fadeIn");
      WOMEN.style.display = "none";
      break;
    case 2:
      ELECTRONICS.classList.remove("fadeIn");
      ELECTRONICS.style.display = "none";
      JEWELERY.classList.remove("fadeIn");
      JEWELERY.style.display = "none";
      MEN.classList.add("fadeIn");
      MEN.style.display = "block";
      WOMEN.classList.remove("fadeIn");
      WOMEN.style.display = "none";
      break;
    case 3:
      ELECTRONICS.classList.remove("fadeIn");
      ELECTRONICS.style.display = "none";
      JEWELERY.classList.remove("fadeIn");
      JEWELERY.style.display = "none";
      MEN.classList.remove("fadeIn");
      MEN.style.display = "none";
      WOMEN.classList.add("fadeIn");
      WOMEN.style.display = "block";
      break;
  }
}
async function dinamicCategories() {
  const categories = await getCategories(URL);
  for (let i = 0; i < categories.length; i++) {
    let node = document.createElement("li");
    node.dataset.index = i;
    node.classList.add("button-category");
    let textnode = document.createTextNode(categories[i]);
    node.appendChild(textnode);
    document.getElementById("categories").appendChild(node);
    let buttons = document.querySelectorAll(".button-category");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const BUTTON = e.target;
        setEvent(BUTTON.getAttribute("data-index"));
        e.stopImmediatePropagation();
      });
    });
  }
}

export let vNameProducts = [];

async function dinamicProducts() {
  const products = await getAllProducts(URL);
  products.forEach((product) => {
    vNameProducts.push(product.title);
  });
  createCards(products, "products");
}
async function dinamicProductsElectrics() {
  const products = await getCategoryProducts(URL, "electronics");
  createCards(products, "products-electronics");
}
async function dinamicProductsJewelery() {
  const products = await getCategoryProducts(URL, "jewelery");
  createCards(products, "products-jewelery");
}
async function dinamicProductsMen() {
  const products = await getCategoryProducts(URL, "men's clothing");
  createCards(products, "products-men");
}
async function dinamicProductsWomen() {
  const products = await getCategoryProducts(URL, "women's clothing");
  createCards(products, "products-women");
}
window.onload = (e) => {
  dinamicCategories();
  dinamicProducts();
  dinamicProductsElectrics();
  dinamicProductsJewelery();
  dinamicProductsMen();
  dinamicProductsWomen();
};
