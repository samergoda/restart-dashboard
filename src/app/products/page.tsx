import getProducts from "@/lib/apis/products.api";

import { ProductsWrapper } from "./_components/products-wrapper";
import ProductListing from "./_components/product-listing";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      {/* Product listing */}
      <ProductListing />

      {/* Product wrapper (set products local) */}
      <ProductsWrapper products={products} />
    </>
  );
}
