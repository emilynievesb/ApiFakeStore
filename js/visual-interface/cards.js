import { eventButton } from "../cart/cart.js";

export async function createCards(products, idElemento) {
  if (products.length !== undefined) {
    for (let i = 0; i < products.length; i++) {
      let node = document.createElement("div");
      node.classList.add("card", "gradient-border");
      let img = document.createElement("img");
      img.src = products[i].image;
      let title = document.createElement("span");
      let textTitle = document.createTextNode(products[i].title);
      title.appendChild(textTitle);
      let price = document.createElement("p");
      let textPrice = document.createTextNode(`$${products[i].price}`);
      price.appendChild(textPrice);
      let button = document.createElement("button");
      button.classList.add("cart-button");
      button.dataset.index = products[i].id;
      let textButton = document.createTextNode("Agregar al carrito");
      button.appendChild(textButton);
      node.appendChild(img);
      node.appendChild(title);
      node.appendChild(price);
      node.appendChild(button);
      document.getElementById(idElemento).appendChild(node);
    }
  } else {
    let node = document.createElement("div");
    node.classList.add("card", "gradient-border");
    let img = document.createElement("img");
    img.src = products.image;
    let title = document.createElement("span");
    let textTitle = document.createTextNode(products.title);
    title.appendChild(textTitle);
    let price = document.createElement("p");
    let textPrice = document.createTextNode(`$${products.price}`);
    price.appendChild(textPrice);
    let button = document.createElement("button");
    button.classList.add("cart-button");
    button.dataset.index = products.id;
    let textButton = document.createTextNode("Agregar al carrito");
    button.appendChild(textButton);
    node.appendChild(img);
    node.appendChild(title);
    node.appendChild(price);
    node.appendChild(button);
    document.getElementById(idElemento).appendChild(node);
  }
  eventButton();
}
