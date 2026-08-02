"use client";

import { useState, useRef, useEffect } from "react";

function LazyIframe({ src, title }: { src: string; title: string }) {
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
    <div ref={ref} className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      {isVisible ? (
        <iframe
          src={src}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={title}
        ></iframe>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-brand-beige/50">
          <div className="text-brand-ink/40 text-sm font-serif">Đang tải video...</div>
        </div>
      )}
    </div>
  );
}

export default function ProductVideo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-4 block">Trải Nghiệm</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown">Không gian an tịnh</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Intro Video */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-brand-brown">Link youtube giới thiệu</h3>
            <LazyIframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Youtube giới thiệu (Đang cập nhật)"
            />
            <p className="text-sm text-brand-ink/50 italic text-center">Video đang cập nhật...</p>
          </div>
          
          {/* Assembly Video */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-brand-brown">Link youtube hướng dẫn thắt nút đèn thiền</h3>
            <LazyIframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Hướng dẫn thắt nút đèn thiền (Đang cập nhật)"
            />
            <p className="text-sm text-brand-ink/50 italic text-center">Video đang cập nhật...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
