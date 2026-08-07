"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-64px)] sm:min-h-[calc(100svh-72px)] md:min-h-[calc(100svh-80px)] w-full flex items-center justify-center overflow-hidden bg-brand-brown"
      aria-label="Banner chính"
    >
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')" }}
        role="img"
        aria-label="Hình nền không gian thiền"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-brown/90" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6"
        >
          <span className="text-brand-yellow tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase font-medium">
            Sáng tác mới từ Quỹ Vicaris
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-beige leading-tight drop-shadow-lg">
            Đèn thiền <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Mực, trà và thi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-beige/90 font-serif font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md mt-2 sm:mt-6">
            Thắp sáng không gian bằng vẻ đẹp mộc mạc được tạo nên từ những trái tim phụng sự. Một sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế.
          </p>
          
          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link 
              href="/products" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-yellow text-brand-brown font-medium tracking-wide hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center text-sm sm:text-base"
            >
              KHÁM PHÁ NGAY
            </Link>
            <a 
              href="#cau-chuyen" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-brand-beige font-medium tracking-wide border border-brand-beige/30 hover:border-brand-beige hover:bg-brand-beige/10 transition-all duration-300 text-center text-sm sm:text-base"
            >
              TÌM HIỂU THÊM
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-brand-beige/60 z-10 hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Cuộn xuống</span>
        <div className="w-[1px] h-10 sm:h-12 bg-gradient-to-b from-brand-beige/60 to-transparent" />
      </motion.div>
    </section>
  );
}
