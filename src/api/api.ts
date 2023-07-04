const url = "https://run.mocky.io/v3/05e8172e-684f-494b-98f5-906e6564e8e0";

export async function getProducts() {
  const response = await fetch(url, { cache: 'no-store' });
  const products = await response.json();

  return products;  
}
