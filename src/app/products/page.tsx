import getProducts from "@/lib/apis/products.api";
import ProductListing from "./_components/product-listing";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      {/* Product listing */}
      <ProductListing products={products} />
    </>
  );
}
