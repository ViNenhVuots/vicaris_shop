"use client";

import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartDrawer() {
  const [isHydrated, setIsHydrated] = useState(false);
  const { isOpen, toggleCart, items, updateQuantity, removeItem } = useCartStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-paper z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-brown/10">
              <h2 className="text-xl font-bold font-serif text-brand-brown flex items-center gap-2">
                <ShoppingBag size={24} className="text-brand-yellow" />
                Giỏ hàng của bạn
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 text-brand-brown hover:bg-brand-yellow/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-brand-ink/40">
                  <ShoppingBag size={64} className="mb-4 opacity-20" />
                  <p className="text-lg font-serif">Giỏ hàng của bạn đang trống</p>
                  <button
                    onClick={toggleCart}
                    className="mt-6 px-6 py-3 bg-brand-brown text-brand-yellow rounded hover:bg-brand-ink transition-colors font-medium tracking-wider"
                  >
                    TIẾP TỤC MUA SẮM
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-24 h-24 bg-white rounded border border-brand-brown/10 overflow-hidden relative flex-shrink-0">
                        {item.product.image ? (
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-beige flex items-center justify-center text-xs text-brand-ink/40">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-medium text-sm text-brand-brown line-clamp-2">
                              {item.product.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-brand-ink/40 hover:text-red-500 transition-colors p-1"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          {item.product.options && (
                            <p className="text-xs text-brand-ink/60 mt-1 line-clamp-2">
                              {item.product.options.split('|').map((opt, i) => (
                                <span key={i} className="block">{opt.trim()}</span>
                              ))}
                            </p>
                          )}
                          <p className="text-brand-yellow font-bold mt-2">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 border border-brand-brown/20 rounded w-fit mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-brand-yellow/10 text-brand-brown transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-brand-brown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-brand-yellow/10 text-brand-brown transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-brand-brown/10 p-6 bg-brand-beige">
                <div className="flex justify-between items-center mb-4 text-brand-brown">
                  <span className="font-medium font-serif">Tổng cộng</span>
                  <span className="text-2xl font-bold text-brand-yellow">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                  </span>
                </div>
                <p className="text-xs text-brand-ink/60 mb-6">
                  Miễn phí vận chuyển cho đơn từ 699.000đ.
                </p>
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="w-full block text-center py-4 bg-brand-brown text-brand-yellow font-medium tracking-wider rounded hover:bg-brand-ink transition-colors"
                >
                  THANH TOÁN NGAY
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
