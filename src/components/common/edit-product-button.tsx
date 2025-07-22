"use client";
import ProductForm from "@/app/products/_components/product-actions";
import { Button } from "../ui/button";
import { useProducts } from "../context/ProductsContext";

export default function EditProductButton({ product }: { product: Product }) {
  const { deleteProduct } = useProducts();
  return (
    <div className="flex gap-3">
      <ProductForm product={product} triggerText="Edit" />
      <Button variant="destructive" onClick={() => deleteProduct(product.id)}>
        Delete
      </Button>
    </div>
  );
}
