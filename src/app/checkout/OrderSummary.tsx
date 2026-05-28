"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

export default function OrderSummary() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = total >= 699000 ? 0 : 30000;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm sticky top-28">
      <h2 className="text-xl font-bold text-brand-brown mb-6">Đơn hàng của bạn</h2>
      
      <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded relative overflow-hidden flex-shrink-0">
              {item.product.image ? (
                <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
              ) : null}
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full z-10">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-2">{item.product.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.product.category}</p>
            </div>
            <div className="text-sm font-medium">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tạm tính</span>
          <span className="font-medium">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Phí vận chuyển</span>
          <span className="font-medium">{shipping === 0 ? "Miễn phí" : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shipping)}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-lg font-bold text-brand-brown">Tổng cộng</span>
          <span className="text-xl font-bold text-brand-terracotta">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total + shipping)}
          </span>
        </div>
        <p className="text-xs text-gray-500 text-right">Đã bao gồm VAT nếu có</p>
      </div>
    </div>
  );
}
