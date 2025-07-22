"use client";

import { useProducts } from "@/components/context/ProductsContext";
import ProductCard from "../../../components/common/product-card";
import AddProduct from ".././_components/product-actions";

export default function ProductListing() {
  const { products } = useProducts();

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h2 className="mb-6 text-3xl font-bold text-center">Our Products</h2>

      {/* Add new product button */}
      <div className="my-3 flex justify-end">
        <AddProduct />
      </div>

      {/* Product listing */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: Product) => (
          // Product card
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
