import { createCards } from "../visual-interface/cards.js";
import { getProduct } from "../visual-interface/fetch.js";
import { vNameProducts } from "../visual-interface/index.js";

const URL = "https://fakestoreapi.com/products";

async function productSearch(item) {
  const product = await getProduct(URL, item);
  createCards(product, "products-search");
}

const SEARCHBUTTON = document.getElementById("search-button");
SEARCHBUTTON.addEventListener("click", (e) => {
  const SEARCH = document.getElementById("search-input").value;
  const SEARCHCONTAINER = document.getElementById("content-search");
  const ALL = document.getElementById("content-all");
  const ELECTRONICS = document.getElementById("content-electronics");
  const JEWELERY = document.getElementById("content-jewelery");
  const MEN = document.getElementById("content-men");
  const WOMEN = document.getElementById("content-women");
  e.preventDefault();
  for (let i = 0; i < vNameProducts.length; i++) {
    if (vNameProducts[i].trim() === SEARCH.trim()) {
      productSearch(i + 1);
      ALL.style.display = "none";
      ELECTRONICS.classList.remove("fadeIn");
      ELECTRONICS.style.display = "none";
      JEWELERY.classList.remove("fadeIn");
      JEWELERY.style.display = "none";
      MEN.classList.remove("fadeIn");
      MEN.style.display = "none";
      WOMEN.classList.remove("fadeIn");
      WOMEN.style.display = "none";
      SEARCHCONTAINER.style.display = "block";
      SEARCHCONTAINER.classList.add("fadeIn");
      document.getElementById("search-input").value = "";
    }
  }
  e.stopImmediatePropagation();
});
