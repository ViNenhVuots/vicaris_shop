"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-brand-brown relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-10 mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-brand-yellow/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-beige mb-4 sm:mb-6 md:mb-8 leading-tight">
          Mang ánh sáng thiền vào không gian sống
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-brand-beige/80 font-serif mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Mỗi chiếc đèn được thắp lên không chỉ sưởi ấm căn phòng nhỏ, mà còn góp phần thắp sáng tương lai của những em nhỏ vùng cao.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-yellow hover:bg-brand-paper text-brand-brown font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
          >
            Mua ngay
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-brand-beige/30 hover:border-brand-yellow text-brand-beige hover:text-brand-yellow font-medium rounded-lg transition-all duration-300 text-center text-sm sm:text-base"
          >
            Tư vấn thiết kế riêng
          </Link>
        </div>
      </div>
    </section>
  );
}
