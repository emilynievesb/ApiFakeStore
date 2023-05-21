export async function createCards(products) {
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
    let textButton = document.createTextNode("Agregar al carrito");
    button.appendChild(textButton);
    node.appendChild(img);
    node.appendChild(title);
    node.appendChild(price);
    node.appendChild(button);
    document.getElementById("products").appendChild(node);
  }
}
