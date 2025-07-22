"use client";

import React, { createContext, useContext, useState } from "react";

type ProductsContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (updated: Product) => void;
  deleteProduct: (id: string) => void;
  setInitialProducts: (products: Product[]) => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Functions
  // Handle initial products
  const setInitialProducts = (initial: Product[]) => {
    setProducts(initial);
  };

  // Handle add new product
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  // Handle update product
  const updateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  // Handle delete product
  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct, setInitialProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("useProducts must be used within a ProductsProvider");
  return context;
};
