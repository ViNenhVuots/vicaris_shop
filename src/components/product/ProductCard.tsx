"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCartStore, Product } from "@/store/cartStore";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-gray-100 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
        
        {/* Quick add button (desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:block bg-gradient-to-t from-black/50 to-transparent">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-brand-brown py-3 rounded font-medium shadow-lg hover:bg-brand-terracotta hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Thêm vào giỏ
          </button>
        </div>
      </Link>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-brand-text hover:text-brand-terracotta transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-brand-terracotta">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
          </span>
          
          {/* Mobile add button */}
          <button 
            onClick={handleAddToCart}
            className="md:hidden w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-brand-brown hover:bg-brand-terracotta hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
