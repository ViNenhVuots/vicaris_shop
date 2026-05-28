"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Charity() {
  return (
    <section className="py-24 bg-brand-brown text-brand-beige relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Gieo hạt hiểu thương</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-8 leading-tight drop-shadow-md">
              Tình thương lan tỏa, <br/> Sáng đời trẻ thơ
            </h2>
            <p className="text-brand-beige/90 text-lg md:text-xl leading-relaxed font-serif max-w-3xl mx-auto drop-shadow-sm">
              Mỗi chiếc đèn được biểu hiện không chỉ đến từ sự khéo léo bởi đôi tay của những người lành nghề Mộc - Giấy - Họa, mà còn từ những trái tim phụng sự đã lân mẫn ghép nối những mảnh tách biệt thành một câu chuyện tử tế.
            </p>
            <p className="text-brand-beige/90 text-lg md:text-xl leading-relaxed font-serif max-w-3xl mx-auto mt-6 drop-shadow-sm">
              Sản phẩm mang theo ước nguyện gieo những hạt giống lành, nuôi dưỡng học sinh, sinh viên yếu thế của các thành viên Quỹ Bảo trợ giáo dục Vicaris. Trân quý và biết ơn!
            </p>
            
            <div className="mt-12">
              <Link 
                href="/about-project" 
                className="inline-block px-8 py-4 bg-transparent text-brand-yellow border-2 border-brand-yellow font-medium hover:bg-brand-yellow hover:text-brand-brown transition-all duration-300"
              >
                TÌM HIỂU VỀ QUỸ VICARIS
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
