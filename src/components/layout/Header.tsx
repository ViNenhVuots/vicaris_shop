"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { name: "Sản phẩm", href: "/products" },
  { name: "Giới thiệu", href: "/about-project" },
  { name: "Câu chuyện", href: "/brand-story" },
  { name: "Liên hệ", href: "/contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  const cartItems = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const cartCount = isHydrated ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  }, [searchQuery, router]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    setIsHydrated(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        role="banner"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-brand-paper/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-brand-brown/5" 
            : "bg-brand-paper/95"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] md:h-[80px] flex items-center justify-between">
          
          {/* MOBILE: Hamburger Left */}
          <div className="flex-1 md:hidden flex items-center justify-start">
            <button
              className="p-2 -ml-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>

          {/* LEFT: Logo (Desktop: Left, Mobile: Center) */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="group flex items-center gap-1.5 sm:gap-2" aria-label="Trang chủ - Mực trà và thi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-yellow group-hover:scale-110 transition-transform duration-300 shrink-0 sm:w-7 sm:h-7" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-base sm:text-xl md:text-2xl font-serif font-extrabold tracking-wider sm:tracking-widest text-brand-brown uppercase whitespace-nowrap">
                MỰC TRÀ VÀ THI
              </span>
            </Link>
          </div>

          {/* CENTER: Navigation (Desktop only) */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-10" aria-label="Điều hướng chính">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && (link.href as string) !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-serif font-medium transition-all duration-300 relative group px-1 py-2 ${
                    isActive ? "text-brand-terracotta" : "text-brand-brown hover:text-brand-terracotta"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-terracotta transition-all duration-300 ease-out rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex items-center justify-end space-x-1 sm:space-x-2 relative">
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "min(200px, 45vw)", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-10 overflow-hidden"
                    onSubmit={handleSearchSubmit}
                    role="search"
                    aria-label="Tìm kiếm sản phẩm"
                  >
                    <input
                      type="search"
                      placeholder="Tìm kiếm..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-brand-paper/80 border border-brand-brown/20 px-3 sm:px-4 py-1.5 rounded-full text-sm font-serif focus:outline-none focus:border-brand-yellow placeholder:text-brand-brown/40 text-brand-brown shadow-sm"
                      autoFocus
                      aria-label="Nhập từ khóa tìm kiếm"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <button 
                className="p-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors flex items-center justify-center group relative z-10"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label={isSearchOpen ? "Đóng tìm kiếm" : "Mở tìm kiếm"}
                aria-expanded={isSearchOpen}
              >
                {isSearchOpen ? <X size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" /> : <Search size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" />}
              </button>
            </div>
            
            <button 
              className="p-2 text-brand-brown hover:bg-brand-brown/5 rounded-full transition-colors relative flex items-center justify-center group"
              onClick={toggleCart}
              aria-label={`Giỏ hàng${cartCount > 0 ? `, ${cartCount} sản phẩm` : ''}`}
            >
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0.5 right-0 bg-brand-terracotta text-brand-beige text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-sm"
                    aria-hidden="true"
                  >
                    {cartCount}
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
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm z-[60] md:hidden"
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-dvh w-[85%] max-w-sm bg-brand-paper z-[70] md:hidden shadow-2xl flex flex-col border-r border-brand-brown/10"
              role="dialog"
              aria-modal="true"
              aria-label="Menu điều hướng"
            >
              <div className="flex justify-between items-center p-5 sm:p-6 border-b border-brand-brown/10">
                <div className="flex items-center gap-2 text-brand-terracotta">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <span className="text-lg sm:text-xl font-serif font-extrabold uppercase tracking-widest text-brand-brown">
                    MỰC TRÀ VÀ THI
                  </span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-brand-brown hover:bg-brand-brown/10 rounded-full transition-colors bg-brand-brown/5"
                  aria-label="Đóng menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              
              <nav className="flex flex-col py-4 sm:py-6 px-3 sm:px-4 space-y-1 sm:space-y-2 flex-1 overflow-y-auto" aria-label="Menu di động">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (pathname?.startsWith(link.href) && (link.href as string) !== '/');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`text-base sm:text-lg font-serif p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-brand-terracotta/10 text-brand-terracotta font-bold" 
                          : "text-brand-brown hover:bg-brand-brown/5 font-medium"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-5 sm:p-6 border-t border-brand-brown/10">
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
