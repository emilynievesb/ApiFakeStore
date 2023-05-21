import { createCards } from "./cards.js";
import { getAllProducts, getCategories } from "./fetch.js";

const CATEGORIESLIST = document.getElementById("categories");
const URL = "https://fakestoreapi.com/";

async function dinamicCategories() {
  const categories = await getCategories(URL);
  for (let i = 0; i < categories.length; i++) {
    let node = document.createElement("li");
    let a = document.createElement("a");
    switch (i) {
      case 0:
        a.href = "electronics.html";
        break;
      case 1:
        a.href = "jewelery.html";
        break;
      case 2:
        a.href = "men.html";
        break;
      case 3:
        a.href = "women.html";
        break;
    }
    let textnode = document.createTextNode(categories[i]);
    a.appendChild(textnode);
    node.append(a);
    document.getElementById("categories").appendChild(node);
  }
}

const products = await getAllProducts(URL);

async function dinamicProducts() {
  const products = await getAllProducts(URL);
  createCards(products);
}

dinamicCategories();
dinamicProducts();
