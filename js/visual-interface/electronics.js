import { createCards } from "./cards.js";
import { getCategoryProducts, getCategories } from "./fetch.js";

const URL = "https://fakestoreapi.com/";

async function dinamicCategories() {
  const categories = await getCategories(URL);
  for (let i = 0; i < categories.length; i++) {
    let node = document.createElement("li");
    let a = document.createElement("a");
    switch (i) {
      case 0:
        a.href = "../html/electronics.html";
        break;
      case 1:
        a.href = "../html/jewelery.html";
        break;
      case 2:
        a.href = "../html/men.html";
        break;
      case 3:
        a.href = "../html/women.html";
        break;
    }
    let textnode = document.createTextNode(categories[i]);
    a.appendChild(textnode);
    node.append(a);
    document.getElementById("categories").appendChild(node);
  }
}
async function dinamicProducts() {
  const products = await getCategoryProducts(URL, "electronics");
  createCards(products);
}
dinamicCategories();
dinamicProducts();
