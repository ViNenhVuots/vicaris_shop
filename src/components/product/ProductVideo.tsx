"use client";

import { useState, useRef, useEffect } from "react";

function LazyIframe({ src, title, aspectClass = "aspect-video" }: { src: string; title: string; aspectClass?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${aspectClass} w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-lg mx-auto`}>
      {isVisible ? (
        <iframe
          src={src}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={title}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-brand-beige/50">
          <div className="text-brand-ink/40 text-xs sm:text-sm font-serif">Đang tải video...</div>
        </div>
      )}
    </div>
  );
}

export default function ProductVideo() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white" aria-label="Video sản phẩm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm mb-3 sm:mb-4 block">Trải Nghiệm</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown">Không gian an tịnh</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Intro Video */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-brown">Video giới thiệu</h3>
            <LazyIframe 
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1370249934996219&show_text=false" 
              title="Video giới thiệu đèn thiền"
              aspectClass="aspect-[9/16] max-w-[360px]"
            />
          </div>
          
          {/* Assembly Video */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-brown">Hướng dẫn thắt nút đèn thiền</h3>
            <LazyIframe 
              src="https://www.youtube.com/embed/nRiOoLNvUe0" 
              title="Hướng dẫn thắt nút đèn thiền"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
