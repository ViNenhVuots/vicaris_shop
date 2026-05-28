"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, Package, Folders, ShoppingCart, Settings, LogOut, Eye, EyeOff } from "lucide-react";

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

  useEffect(() => {
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
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center pt-20">
        <div className="animate-pulse w-8 h-8 rounded-full bg-[#5C4D43]/50"></div>
      </div>
    );
  }

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[#FDFBF7]">
        {/* Subtle background gradient / texture feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F5EFE6] to-[#EAE0D5] opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] mix-blend-multiply opacity-20" />
        
        {/* Login Card */}
        <div 
          className="relative z-10 w-full max-w-[400px] bg-white/70 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_20px_60px_-15px_rgba(92,77,67,0.1)] border border-white/50 animate-in fade-in zoom-in-95 duration-700"
        >
          <div className="text-center mb-10">
            <h1 className="text-2xl font-serif font-bold tracking-[0.2em] text-[#5C4D43]">
              ĐÈN THIỀN
            </h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {/* Username Input */}
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-[#EAE0D5] focus:border-[#5C4D43] focus:ring-1 focus:ring-[#5C4D43] outline-none transition-all text-[#5C4D43] placeholder:text-[#A89F91] font-medium"
                  placeholder="Tài khoản"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-2xl bg-white/50 border border-[#EAE0D5] focus:border-[#5C4D43] focus:ring-1 focus:ring-[#5C4D43] outline-none transition-all text-[#5C4D43] placeholder:text-[#A89F91] font-medium"
                  placeholder="Mật khẩu"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A89F91] hover:text-[#5C4D43] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-[#D9534F] text-sm text-center font-medium animate-in slide-in-from-top-1">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#5C4D43] text-[#FDFBF7] py-4 rounded-2xl font-medium tracking-wide hover:bg-[#4A3B32] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard Layout
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row pt-20">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 relative">
        <div className="p-6">
          <h2 className="text-xl font-bold text-brand-brown">Quản Trị Viên</h2>
        </div>
        <nav className="space-y-1 px-4 mb-20 md:mb-0">
          <Link href="/admin" className="flex items-center px-4 py-3 text-gray-700 bg-brand-beige rounded-md font-medium">
            <LayoutDashboard size={20} className="mr-3" />
            Tổng Quan
          </Link>
          <Link href="/admin/products" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-brown rounded-md font-medium transition-colors">
            <Package size={20} className="mr-3" />
            Sản Phẩm
          </Link>
          <Link href="/admin/categories" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-brown rounded-md font-medium transition-colors">
            <Folders size={20} className="mr-3" />
            Danh Mục
          </Link>
          <Link href="/admin/orders" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-brown rounded-md font-medium transition-colors">
            <ShoppingCart size={20} className="mr-3" />
            Đơn Hàng
          </Link>
          <Link href="/admin/settings" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-brown rounded-md font-medium transition-colors">
            <Settings size={20} className="mr-3" />
            Cài Đặt
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 absolute bottom-0 w-full hidden md:block bg-white">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
