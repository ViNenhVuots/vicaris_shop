"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Sản phẩm", href: "/products" },
  { name: "Giới thiệu", href: "/about-project" },
  { name: "Câu chuyện", href: "/brand-story" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-brand-paper/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-brand-brown/5" 
            : "bg-brand-paper/95"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[72px] md:h-[80px] flex items-center justify-between">
          
          {/* MOBILE: Hamburger Left */}
          <div className="flex-1 md:hidden flex items-center justify-start">
            <button
              className="p-2 -ml-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* LEFT: Logo (Desktop: Left, Mobile: Center) */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="group flex items-center gap-2">
              {/* Optional SVG Icon instead of broken Image */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-yellow group-hover:scale-110 transition-transform duration-300">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-xl md:text-2xl font-serif font-extrabold tracking-widest text-brand-brown uppercase">
                Đèn Thiền
              </span>
            </Link>
          </div>

          {/* CENTER: Navigation (Desktop only) */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-serif font-medium transition-all duration-300 relative group px-1 py-2 ${
                    isActive ? "text-brand-terracotta" : "text-brand-brown hover:text-brand-terracotta"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-terracotta transition-all duration-300 ease-out rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-4">
            <button 
              className="p-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors flex items-center justify-center group"
              aria-label="Tìm kiếm"
            >
              <Search size={22} className="group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              className="p-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors relative flex items-center justify-center group"
              onClick={toggleCart}
              aria-label="Giỏ hàng"
            >
              <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-1 right-0.5 bg-brand-terracotta text-brand-beige text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-sm"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm z-[60] md:hidden"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-[100dvh] w-[85%] max-w-sm bg-brand-paper z-[70] md:hidden shadow-2xl flex flex-col border-r border-brand-brown/10"
            >
              <div className="flex justify-between items-center p-6 border-b border-brand-brown/10">
                <div className="flex items-center gap-2 text-brand-terracotta">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <span className="text-xl font-serif font-extrabold uppercase tracking-widest text-brand-brown">
                    Đèn Thiền
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-brown hover:bg-brand-brown/10 rounded-full transition-colors bg-brand-brown/5"
                  aria-label="Đóng menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <nav className="flex flex-col py-6 px-4 space-y-2 flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-serif p-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-brand-terracotta/10 text-brand-terracotta font-bold" 
                          : "text-brand-brown hover:bg-brand-brown/5 font-medium"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-brand-brown/10">
                <p className="text-xs text-brand-ink/50 text-center font-serif">
                  &copy; {new Date().getFullYear()} Quỹ Bảo trợ giáo dục Vicaris
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
