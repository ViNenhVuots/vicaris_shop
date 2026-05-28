"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-brown">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-brown/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-brand-yellow tracking-[0.3em] text-sm uppercase font-medium">
            Sáng tác mới từ Quỹ Vicaris
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-beige leading-tight drop-shadow-lg">
            Đèn thiền <br/> Mực, trà và thi
          </h1>
          <p className="text-lg md:text-xl text-brand-beige/90 font-serif font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md mt-6">
            Thắp sáng không gian bằng vẻ đẹp mộc mạc được tạo nên từ những trái tim phụng sự. Một sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-brand-yellow text-brand-brown font-medium tracking-wide hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              KHÁM PHÁ NGAY
            </Link>
            <Link 
              href="#cau-chuyen" 
              className="px-8 py-4 bg-transparent text-brand-beige font-medium tracking-wide border border-brand-beige/30 hover:border-brand-beige hover:bg-brand-beige/10 transition-all duration-300"
            >
              TÌM HIỂU THÊM
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-beige/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Cuộn xuống</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-beige/60 to-transparent" />
      </motion.div>
    </section>
  );
}
