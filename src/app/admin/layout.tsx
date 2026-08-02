"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Package, Folders, ShoppingCart, 
  Settings, LogOut, Eye, EyeOff, Search, Bell, User, Menu, Store
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Tổng Quan" },
  { href: "/admin/products", icon: Package, label: "Sản Phẩm" },
  { href: "/admin/categories", icon: Folders, label: "Danh Mục" },
  { href: "/admin/orders", icon: ShoppingCart, label: "Đơn Hàng" },
  { href: "/admin/settings", icon: Settings, label: "Cài Đặt" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
      return;
    }
    
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Tài khoản hoặc mật khẩu không chính xác.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-50 bg-[#FDFBF7] flex items-center justify-center">
        <div className="animate-pulse w-10 h-10 rounded-full bg-[#5C4D43]/20"></div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F5EFE6] to-[#EAE0D5] opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] mix-blend-multiply opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-[420px] bg-white/80 backdrop-blur-2xl rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(92,77,67,0.1)] border border-white"
        >
          <div className="text-center mb-10">
            <h1 className="text-2xl font-serif font-bold tracking-[0.25em] text-[#5C4D43]">
              MỰC TRÀ VÀ THI
            </h1>
            <p className="text-sm text-[#A89F91] mt-2 font-medium">Hệ thống quản trị nội bộ</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-[#FDFBF7]/50 border border-[#EAE0D5] focus:border-[#5C4D43] focus:ring-1 focus:ring-[#5C4D43] outline-none transition-all text-[#5C4D43] placeholder:text-[#A89F91] font-medium"
                  placeholder="Tài khoản"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-2xl bg-[#FDFBF7]/50 border border-[#EAE0D5] focus:border-[#5C4D43] focus:ring-1 focus:ring-[#5C4D43] outline-none transition-all text-[#5C4D43] placeholder:text-[#A89F91] font-medium"
                  placeholder="Mật khẩu"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A89F91] hover:text-[#5C4D43] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#D9534F] text-sm text-center font-medium"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full bg-[#5C4D43] text-white py-4 rounded-2xl font-medium tracking-wide hover:bg-[#4A3B32] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
            >
              Đăng nhập
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard Layout (Fixed full screen to remove the top gap)
  return (
    <div className="fixed inset-0 z-50 flex h-screen bg-[#FDFBF7] text-[#2D2D2D] font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed md:relative z-50 w-64 h-full bg-white border-r border-[#EAE0D5] flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="h-20 flex items-center px-8 border-b border-[#EAE0D5]/50">
          <h2 className="text-xl font-serif font-bold tracking-[0.2em] text-[#5C4D43]">
            MỰC TRÀ VÀ THI
          </h2>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-[#5C4D43] text-white shadow-md shadow-[#5C4D43]/20" 
                    : "text-[#7A7067] hover:bg-[#F5EFE6] hover:text-[#5C4D43]"
                  }
                `}
              >
                <item.icon 
                  size={20} 
                  className={`mr-3 transition-colors ${isActive ? "text-[#F4C430]" : "text-[#A89F91] group-hover:text-[#5C4D43]"}`} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-[#EAE0D5]/50 bg-white space-y-2">
          <Link 
            href="/"
            className="flex items-center w-full px-4 py-3 text-[#7A7067] hover:bg-[#F5EFE6] hover:text-[#5C4D43] rounded-xl font-medium transition-colors"
          >
            <Store size={20} className="mr-3 opacity-80" strokeWidth={2} />
            Về Cửa Hàng
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-[#D9534F] hover:bg-[#FDFBF7] rounded-xl font-medium transition-colors"
          >
            <LogOut size={20} className="mr-3 opacity-80" strokeWidth={2} />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#FDFBF7]">
        
        {/* Topbar */}
        <header className="h-20 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#EAE0D5]/50 flex items-center justify-between px-6 lg:px-10 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2 text-[#5C4D43] hover:bg-[#F5EFE6] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-[#A89F91]">
              <span>Admin</span>
              <span className="mx-2 text-[#EAE0D5]">/</span>
              <span className="text-[#5C4D43]">{navItems.find(n => n.href === pathname)?.label || "Dashboard"}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A89F91]" size={16} strokeWidth={2.5} />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="pl-10 pr-4 py-2.5 bg-white border border-[#EAE0D5] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#5C4D43] transition-all w-64 shadow-sm placeholder:text-[#A89F91]" 
              />
            </div>
            <button className="relative p-2 text-[#A89F91] hover:text-[#5C4D43] hover:bg-white rounded-full transition-all">
              <Bell size={20} strokeWidth={2} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#D9534F] rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5C4D43] to-[#8C7A6B] flex items-center justify-center text-white shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              <User size={18} strokeWidth={2.5} />
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
