"use client";

import { useProducts } from "@/components/context/ProductsContext";
import ProductCard from "../../../components/common/product-card";
import AddProduct from ".././_components/product-actions";
import { useEffect } from "react";

export default function ProductListing({ products }: { products: Product[] }) {
  const { products: payload, setInitialProducts } = useProducts();

  // Set products as initial value when render one time
  useEffect(() => {
    setInitialProducts(products);
  }, [products]);

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
        {payload.map((product: Product) => (
          // Product card
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
