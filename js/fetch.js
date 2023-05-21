export async function getCategories(URL) {
  const response = await fetch(`${URL}products/categories`);
  const categories = await response.json();
  console.log(categories);
  return categories;
}
export async function getAllProducts(URL) {
  const response = await fetch(`${URL}products`);
  const categories = await response.json();
  console.log(categories);
  return categories;
}
