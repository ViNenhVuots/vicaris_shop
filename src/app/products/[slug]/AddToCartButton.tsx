"use client";

import { useState } from "react";
import { useCartStore, Product } from "@/store/cartStore";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex items-center border-2 border-gray-200 rounded w-fit bg-white">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-3 text-gray-500 hover:text-brand-brown hover:bg-gray-50 transition-colors"
        >
          <Minus size={20} />
        </button>
        <div className="w-16 text-center font-medium text-lg">
          {quantity}
        </div>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="p-3 text-gray-500 hover:text-brand-brown hover:bg-gray-50 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <button 
        onClick={handleAddToCart}
        className="flex-1 bg-brand-brown hover:bg-brand-brown/90 text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all hover:shadow-lg"
      >
        <ShoppingBag size={20} />
        THÊM VÀO GIỎ HÀNG
      </button>
    </div>
  );
}
