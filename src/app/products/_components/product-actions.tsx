"use client";

import { useProducts } from "@/components/context/ProductsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import useProductSchema from "@/lib/schemes/product-actions.achema";
import z from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ProductFormProps {
  product?: Product;
  triggerText?: string;
  onSubmit?: (product: Product) => void;
}

export default function ProductForm({
  product,
  triggerText = "Add Product",
  onSubmit,
}: ProductFormProps) {
  // Variable
  const { addProduct, updateProduct } = useProducts();
  const [open, setOpen] = useState(false);
  const isEditing = !!product;

  // Schema
  const ProductSchema = useProductSchema();

  type ProductsSchema = z.infer<typeof ProductSchema>;

  const ProductsActionForm = useForm<ProductsSchema>({
    defaultValues: {
      name: product?.name || "",
      image: product?.image || "",
      description: product?.description || "",
      price: product?.price || 0,
      category: product?.category || "",
    },
    resolver: zodResolver(ProductSchema),
  });

  // Submit function
  const onSubmitForm: SubmitHandler<ProductsSchema> = (data: ProductsSchema) => {
    const productData: Product = {
      ...data,
      id: product?.id || generateId(),
      createdAt: product?.createdAt || new Date().toISOString(),
    };

    if (onSubmit) {
      onSubmit(productData);
    } else {
      if (isEditing) {
        updateProduct(productData);
      } else {
        addProduct(productData);
      }
    }

    setOpen(false);
    if (!isEditing) {
      ProductsActionForm.reset();
    }
  };

  const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* Button toggle modal */}
        <Button variant="outline">{triggerText}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Product" : "Add Product"}</DialogTitle>
        </DialogHeader>
        <Form {...ProductsActionForm}>
          <form onSubmit={ProductsActionForm.handleSubmit(onSubmitForm)} className="space-y-4">
            <div className="grid gap-4 py-4">
              {/* Product Name */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name *
                </Label>
                <div className="col-span-3">
                  <Input
                    id="name"
                    {...ProductsActionForm.register("name")}
                    placeholder="Enter product name"
                  />
                </div>
              </div>

              {/* Product Image */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL *
                </Label>
                <div className="col-span-3">
                  <Input
                    id="image"
                    {...ProductsActionForm.register("image")}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right mt-2">
                  Description *
                </Label>
                <div className="col-span-3">
                  <Textarea
                    {...ProductsActionForm.register("description")}
                    id="description"
                    placeholder="Enter product description"
                    rows={3}
                  />
                </div>
              </div>

              {/* Product Price */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price *
                </Label>
                <div className="col-span-3">
                  <Input
                    {...ProductsActionForm.register("price", { valueAsNumber: true })}
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Product Category */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category *
                </Label>
                <div className="col-span-3">
                  <Input
                    {...ProductsActionForm.register("category")}
                    id="category"
                    placeholder="Enter product category"
                  />
                </div>
              </div>

              {/* Display ID and Created At for editing */}
              {isEditing && (
                <>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right text-sm text-gray-500">ID</Label>
                    <div className="col-span-3">
                      <p className="text-sm text-gray-600">{product.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right text-sm text-gray-500">Created At</Label>
                    <div className="col-span-3">
                      <p className="text-sm text-gray-600">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? "Save Changes" : "Add Product"}</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Usage Examples:
//
// 1. Add new product:
// <ProductForm />
//
// 2. Add new product with custom trigger text:
// <ProductForm triggerText="Create New Product" />
//
// 3. Edit existing product:
// <ProductForm
//   product={existingProduct}
//   triggerText="Edit Product"
// />
//
// 4. With custom submit handler:
// <ProductForm
//   onSubmit={(productData) => {
//     // Custom logic here
//     console.log('Product submitted:', productData);
//   }}
// />
