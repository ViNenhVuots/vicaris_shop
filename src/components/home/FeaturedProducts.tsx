"use client";

import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { ProductData } from "@/data/products";

interface FeaturedProductsProps {
  products: ProductData[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm">Sản phẩm</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mt-3 sm:mt-4 mb-4 sm:mb-6">
            Mẫu có sẵn hoặc ý tưởng của bạn?
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mb-4 sm:mb-6" aria-hidden="true" />
          <p className="text-brand-ink/70 max-w-2xl font-serif text-base sm:text-lg leading-relaxed px-2">
            Nhiều lựa chọn từ họa tiết tranh vẽ, loại gỗ, đến kích thước và ánh sáng. Khám phá và chọn cho mình chiếc đèn phù hợp nhất hoặc đặt vẽ theo ý tưởng của riêng bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 sm:mt-16 text-center">
          <Link 
            href="/products"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-brown text-brand-yellow font-medium tracking-wide hover:bg-brand-ink transition-colors duration-300 shadow-md text-sm sm:text-base"
          >
            XEM TẤT CẢ TÙY CHỌN
          </Link>
        </div>
      </div>
    </section>
  );
}
