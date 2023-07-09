const url = "https://run.mocky.io/v3/a1aa2d7c-0d69-41c5-a58b-53854ffd360c";

export async function getProducts() {
  const response = await fetch(url, { cache: 'no-store' });
  const products = await response.json();

  return products;
}