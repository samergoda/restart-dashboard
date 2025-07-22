export default async function getProducts() {
  // "https://62fb62afe4bcaf5351837ac1.mockapi.io/product?limit=8&page=1"

  try {
    const response = await fetch("https://62fb62afe4bcaf5351837ac1.mockapi.io/product", {
      cache: "no-store",
    });

    const data: Product[] = await response.json();

    if (data.length == 0) {
      throw new Error("No products found");
    }

    return data;
  } catch (err) {
    throw new Error("Failed to get products :" + err);
  }
}
