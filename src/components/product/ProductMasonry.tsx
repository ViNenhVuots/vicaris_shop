"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

export default function ProductMasonry() {
  const images = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511424187101-2aaa60069337?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513258525046-24e64f891b65?q=80&w=800&auto=format&fit=crop",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-4 block">Thư Viện Ảnh</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown">Vẻ đẹp từ mọi góc nhìn</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImg(src)}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                width={800} 
                height={idx % 2 === 0 ? 1000 : 800} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-brand-brown flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-paper/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-brand-brown transition-colors z-50"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg} 
                alt="Zoomed gallery image" 
                fill 
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
