"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="py-32 bg-brand-brown relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-beige mb-8">
          Mang ánh sáng thiền vào không gian sống
        </h2>
        <p className="text-xl text-brand-beige/80 font-serif mb-12 max-w-2xl mx-auto">
          Mỗi chiếc đèn được thắp lên không chỉ sưởi ấm căn phòng nhỏ, mà còn góp phần thắp sáng tương lai của những em nhỏ vùng cao.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-brand-paper text-brand-brown font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            Mua ngay
            <ArrowRight size={20} />
          </button>
          
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-beige/30 hover:border-brand-yellow text-brand-beige hover:text-brand-yellow font-medium rounded-lg transition-all duration-300"
          >
            Tư vấn thiết kế riêng
          </Link>
        </div>
      </div>
    </section>
  );
}
