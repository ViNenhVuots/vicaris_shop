"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setIsZoomed(false);
          break;
        case "ArrowLeft":
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          break;
        case "ArrowRight":
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 sm:gap-4 h-full">
      {/* Thumbnails (Vertical on desktop, Horizontal on mobile) */}
      <div className="flex md:flex-col gap-2 sm:gap-3 md:gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-20 lg:w-24 shrink-0 no-scrollbar py-1" role="tablist" aria-label="Ảnh thu nhỏ sản phẩm">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-square md:w-full w-16 sm:w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              currentIndex === idx ? "border-brand-yellow" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            role="tab"
            aria-selected={currentIndex === idx}
            aria-label={`Ảnh ${idx + 1} của ${productName}`}
          >
            <Image 
              src={img} 
              alt="" 
              fill 
              sizes="100px" 
              className="object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#e8e4db] border border-brand-brown/5 group flex items-center justify-center min-h-[300px] sm:min-h-[400px]" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center cursor-zoom-in"
            onClick={() => setIsZoomed(true)}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`${productName} - Ảnh ${currentIndex + 1}`} 
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-contain max-h-[60vh] sm:max-h-[80vh]"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-2 sm:inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-brand-brown hover:bg-white hover:scale-110 transition-all pointer-events-auto"
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-brand-brown hover:bg-white hover:scale-110 transition-all pointer-events-auto"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
        
        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-brown opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm" aria-hidden="true">
          <ZoomIn size={16} />
        </div>

        {/* Image counter */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Lightbox using Portal to escape stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Phóng to ảnh ${productName}`}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[10000]"
                onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                aria-label="Đóng phóng to"
                autoFocus
              >
                <X size={24} aria-hidden="true" />
              </button>

              {/* Nav in lightbox */}
              <button
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[10000]"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[10000]"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>

              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full h-full max-w-5xl max-h-[90vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={images[currentIndex]} 
                  alt={`${productName} - phóng to`} 
                  fill 
                  sizes="100vw"
                  className="object-contain"
                  quality={90}
                />
              </motion.div>

              {/* Counter in lightbox */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
