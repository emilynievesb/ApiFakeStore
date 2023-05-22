export async function getCategories(URL) {
  const response = await fetch(`${URL}/categories`);
  const categories = await response.json();
  console.log(categories);
  return categories;
}
export async function getAllProducts(URL) {
  const response = await fetch(`${URL}`);
  const products = await response.json();
  console.log(products);
  return products;
}
export async function getCategoryProducts(URL, category) {
  const response = await fetch(`${URL}/category/${category}`);
  const products = await response.json();
  console.log(products);
  return products;
}
export async function getProduct(URL, id) {
  const response = await fetch(`${URL}/${id}`);
  const product = await response.json();
  console.log(product);
  return product;
}
