import Image from "next/image";
import React from "react";
import EditProductButton from "./edit-product-button";
import { Button } from "../ui/button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li
      key={product.id}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="mb-2 text-sm text-gray-600">
          <span className="font-medium">Category:</span> {product.category}
        </p>
        <p className="mb-3 text-gray-700 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <EditProductButton product={product} />
        </div>
      </div>
    </li>
  );
}
