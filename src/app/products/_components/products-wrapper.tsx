"use client";

import { useProducts } from "@/components/context/ProductsContext";
import { useEffect } from "react";

export function ProductsWrapper({ products }: { products: Product[] }) {
  const { setInitialProducts } = useProducts();

  // Set products as initial value when render one time
  useEffect(() => {
    setInitialProducts(products);
  }, []);

  return null;
}
