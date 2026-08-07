"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCartStore, Product } from "@/store/cartStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useCallback } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
  }, [addItem, product]);

  const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-brand-beige/50 overflow-hidden" aria-label={`Xem chi tiết ${product.name}`}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-ink/30 font-serif text-sm">
            Chưa có hình ảnh
          </div>
        )}
        
        {/* Quick add button (desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:block bg-gradient-to-t from-black/50 to-transparent">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-brand-brown py-3 rounded font-medium shadow-lg hover:bg-brand-terracotta hover:text-white transition-colors flex items-center justify-center gap-2"
            aria-label={`Thêm ${product.name} vào giỏ hàng`}
          >
            <ShoppingBag size={18} aria-hidden="true" />
            Thêm vào giỏ
          </button>
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <div className="text-xs text-brand-ink/50 mb-1 font-serif">{product.category}</div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-sm sm:text-base text-brand-text hover:text-brand-terracotta transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 sm:mt-3 flex items-center justify-between">
          <span className="font-bold text-brand-terracotta text-sm sm:text-base">
            {formattedPrice}
          </span>
          
          {/* Mobile add button */}
          <button 
            onClick={handleAddToCart}
            className="md:hidden w-8 h-8 flex items-center justify-center bg-brand-beige/80 rounded-full text-brand-brown hover:bg-brand-terracotta hover:text-white transition-colors"
            aria-label={`Thêm ${product.name} vào giỏ hàng`}
          >
            <ShoppingBag size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
