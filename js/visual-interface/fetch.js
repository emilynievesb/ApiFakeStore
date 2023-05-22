export async function getCategories(URL) {
  const response = await fetch(`${URL}products/categories`);
  const categories = await response.json();
  console.log(categories);
  return categories;
}
export async function getAllProducts(URL) {
  const response = await fetch(`${URL}products`);
  const products = await response.json();
  console.log(products);
  return products;
}
export async function getCategoryProducts(URL, category) {
  const response = await fetch(`${URL}products/category/${category}`);
  const products = await response.json();
  console.log(products);
  return products;
}
