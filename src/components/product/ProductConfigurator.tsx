"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { ProductData } from "@/data/products";

interface ConfiguratorProps {
  productBase: ProductData;
}

export default function ProductConfigurator({ productBase }: ConfiguratorProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [combo, setCombo] = useState(productBase.comboDetails || "Không");
  const [size, setSize] = useState("Nhỏ (15x15x18cm)");
  const [motif, setMotif] = useState("Đá và hoa + chữ Tâm An");
  const [wood, setWood] = useState("Gỗ me tây");
  const [light, setLight] = useState("Đèn LED");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(productBase.price || 370000);

  // Price Calculation
  useEffect(() => {
    if (combo !== "Không") {
      setPrice(777000);
    } else {
      if (size === "Nhỏ (15x15x18cm)") {
        setPrice(370000);
      } else {
        setPrice(450000);
      }
    }
    
    // Auto-adjust motif if large size is not selected
    if (size === "Nhỏ (15x15x18cm)" && motif === "Hoa sen thủy mặc + chữ Nẻo về sen nở (chỉ đèn lớn)") {
      setMotif("Hoa sen thủy mặc");
    }
  }, [combo, size, motif]);

  const handleAddToCart = () => {
    const optionsStr = `Combo: ${combo} | Kích thước: ${size} | Họa tiết: ${motif} | Loại đế: ${wood} | Ánh sáng: ${light}`;
    const cartProduct = {
      ...productBase,
      id: `${productBase.slug}-${combo}-${size}-${motif}-${wood}-${light}`.replace(/\s+/g, '-').toLowerCase(),
      price: price,
      name: `${productBase.name} (${size})`,
      options: optionsStr,
    };
    
    addItem(cartProduct, quantity);
    toast.success("Đã thêm vào giỏ hàng");
  };

  return (
    <div>
      <div className="text-3xl font-bold text-brand-terracotta mb-6 font-serif">
        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
      </div>

      <div className="space-y-6 mb-8">
        {/* Combo */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-2 font-serif">Combo (Tiết kiệm hơn)</label>
          <div className="grid grid-cols-4 gap-2">
            {["Không", "ĐT1", "ĐT2", "ĐT3"].map((opt) => (
              <button
                key={opt}
                onClick={() => setCombo(opt)}
                className={`py-2 px-3 border rounded text-sm transition-colors ${
                  combo === opt 
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                    : "border-gray-200 text-gray-600 hover:border-brand-yellow"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {combo !== "Không" && (
            <div className="mt-3 p-3 bg-brand-brown/5 rounded border border-brand-brown/10 text-sm text-brand-ink/80 font-serif leading-relaxed">
              {combo === "ĐT1" && (
                <>
                  <strong>Combo ĐT1 bao gồm:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>1 đèn nhỏ thắp nến tealight</li>
                    <li>1 đèn lớn ánh sáng LED</li>
                    <li>Tặng 1 gói trà Sơn Động</li>
                  </ul>
                </>
              )}
              {combo === "ĐT2" && (
                <>
                  <strong>Combo ĐT2 bao gồm:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>1 đèn thiền Mực Trà và Thi (tuỳ chọn cấu hình bên dưới)</li>
                    <li>Tặng 1 gói trà thảo dược Sơn Động</li>
                  </ul>
                </>
              )}
              {combo === "ĐT3" && (
                <>
                  <strong>Combo ĐT3 bao gồm:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>1 đèn thiền Mực Trà và Thi (tuỳ chọn cấu hình)</li>
                    <li>1 gói trà thảo dược Sơn Động</li>
                    <li>1 Tranh "Hiểu và Thương" (khung gỗ pơmu 23x23x2cm)</li>
                    <li>1 Hộp gỗ quà tặng cao cấp (30x26x22cm)</li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-2 font-serif">Kích thước</label>
          <div className="grid grid-cols-2 gap-2">
            {["Nhỏ (15x15x18cm)", "Lớn (18x18x25cm)"].map((opt) => (
              <button
                key={opt}
                onClick={() => setSize(opt)}
                className={`py-2 px-3 border rounded text-sm transition-colors ${
                  size === opt 
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                    : "border-gray-200 text-gray-600 hover:border-brand-yellow"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Motif */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-2 font-serif">Họa tiết tranh vẽ</label>
          <div className="grid grid-cols-1 gap-2">
            {["Đá và hoa + chữ Tâm An", "Hoa sen thủy mặc", "Thủy mặc tre trúc", "Hoa sen thủy mặc + chữ Nẻo về sen nở (chỉ đèn lớn)"].map((opt) => {
              const isDisabled = size === "Nhỏ (15x15x18cm)" && opt.includes("chỉ đèn lớn");
              return (
                <button
                  key={opt}
                  onClick={() => !isDisabled && setMotif(opt)}
                  disabled={isDisabled}
                  className={`py-2 px-4 border rounded text-sm text-left transition-colors ${
                    isDisabled ? "opacity-50 cursor-not-allowed bg-gray-50 border-gray-100" :
                    motif === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-600 hover:border-brand-yellow"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Wood */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2 font-serif">Loại đế gỗ</label>
            <div className="grid grid-cols-1 gap-2">
              {["Gỗ me tây", "Gỗ pơmu"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setWood(opt)}
                  className={`py-2 px-3 border rounded text-sm transition-colors ${
                    wood === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-600 hover:border-brand-yellow"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          
          {/* Light */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2 font-serif">Ánh sáng</label>
            <div className="grid grid-cols-1 gap-2">
              {["Đèn LED", "Nến tealight"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setLight(opt)}
                  className={`py-2 px-3 border rounded text-sm transition-colors ${
                    light === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-600 hover:border-brand-yellow"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center border border-gray-300 rounded">
          <button 
            className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >-</button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button 
            className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >+</button>
        </div>
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-brand-brown hover:bg-brand-ink text-brand-yellow font-medium py-3 px-6 rounded transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag size={20} />
          THÊM VÀO GIỎ HÀNG
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center text-center p-4">
          <ShieldCheck className="text-brand-yellow mb-2" size={24} />
          <h4 className="font-medium text-brand-brown mb-1 text-sm font-serif">Cam Kết Chất Lượng</h4>
          <p className="text-xs text-brand-ink/60">Từ Quỹ Vicaris</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <Truck className="text-brand-yellow mb-2" size={24} />
          <h4 className="font-medium text-brand-brown mb-1 text-sm font-serif">Giao Hàng Miễn Phí</h4>
          <p className="text-xs text-brand-ink/60">Cho đơn từ 699k</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <RotateCcw className="text-brand-yellow mb-2" size={24} />
          <h4 className="font-medium text-brand-brown mb-1 text-sm font-serif">Hỗ Trợ Giáo Dục</h4>
          <p className="text-xs text-brand-ink/60">100% lợi nhuận gây quỹ</p>
        </div>
      </div>
    </div>
  );
}
