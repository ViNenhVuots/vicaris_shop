"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, ShieldCheck, Truck, Leaf, Gift, Check, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { ProductData } from "@/data/products";
import { motion } from "framer-motion";

interface ConfiguratorProps {
  productBase: ProductData;
}

export default function ProductConfigurator({ productBase }: ConfiguratorProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [combo, setCombo] = useState("Không");
  const [size, setSize] = useState("Nhỏ (15x15x18cm)");
  const [motif, setMotif] = useState("Đá và hoa + chữ Tâm An");
  const [wood, setWood] = useState("Gỗ me tây");
  const [light, setLight] = useState("LED");
  const [quantity, setQuantity] = useState(1);

  // Derived Price Calculation
  const price = combo !== "Không" 
    ? 777000 
    : size === "Nhỏ (15x15x18cm)" 
      ? 370000 
      : 450000;

  useEffect(() => {
    if (size === "Nhỏ (15x15x18cm)" && motif === "Hoa sen thủy mặc + chữ Nẻo về sen nở") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMotif("Hoa sen thủy mặc");
    }
  }, [size, motif]);

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
    <div className="flex flex-col gap-8">
      {/* Short Description */}
      <div className="prose prose-brand font-serif text-brand-ink/80 text-lg leading-relaxed">
        <p>
          Một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc.<br/>
          Với hai lựa chọn LED hoặc nến tealight, chiếc đèn mang đến sự tĩnh lặng và thi vị cho không gian sống.
        </p>
      </div>

      {/* Badges */}
      <div className="grid grid-cols-2 gap-3 text-sm font-medium text-brand-brown font-serif">
        <div className="flex items-center gap-2"><CheckCircle2 className="text-brand-yellow" size={18} /> <span>Handmade</span></div>
        <div className="flex items-center gap-2"><CheckCircle2 className="text-brand-yellow" size={18} /> <span>Giấy dó thủ công</span></div>
        <div className="flex items-center gap-2"><CheckCircle2 className="text-brand-yellow" size={18} /> <span>Gỗ tái sinh</span></div>
        <div className="flex items-center gap-2"><CheckCircle2 className="text-brand-yellow" size={18} /> <span>Quà tặng ý nghĩa</span></div>
      </div>

      {/* Price */}
      <div className="py-4 border-y border-brand-brown/10">
        <div className="text-4xl font-bold text-brand-terracotta font-serif">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
        </div>
        <div className="mt-2 text-sm text-brand-ink/60 flex items-center gap-2">
          <Truck size={16} /> Miễn phí vận chuyển cho đơn từ 699.000đ
        </div>
      </div>

      {/* Options */}
      <div className="space-y-6">
        {/* Combo */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">1. Combo</label>
            <span className="text-xs text-brand-terracotta font-medium bg-brand-terracotta/10 px-2 py-1 rounded">Tiết kiệm hơn</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["Không", "ĐT1", "ĐT2", "ĐT3"].map((opt) => (
              <button
                key={opt}
                onClick={() => setCombo(opt)}
                className={`relative py-3 px-1 border rounded-lg text-sm transition-all duration-300 font-medium ${
                  combo === opt 
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown shadow-sm" 
                    : "border-gray-200 text-gray-500 hover:border-brand-yellow/50 hover:bg-brand-paper"
                }`}
              >
                {combo === opt && <motion.div layoutId="combo-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                <span className="relative z-10">{opt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Motif */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">2. Họa tiết tranh</label>
          <div className="grid grid-cols-1 gap-2">
            {["Đá và hoa + chữ Tâm An", "Hoa sen thủy mặc", "Thủy mặc tre trúc", "Hoa sen thủy mặc + chữ Nẻo về sen nở"].map((opt) => {
              const isDisabled = size === "Nhỏ (15x15x18cm)" && opt.includes("Nẻo về sen nở");
              return (
                <button
                  key={opt}
                  onClick={() => !isDisabled && setMotif(opt)}
                  disabled={isDisabled}
                  className={`relative py-3 px-4 border rounded-lg text-sm text-left transition-all duration-300 ${
                    isDisabled ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-100" :
                    motif === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium shadow-sm" 
                      : "border-gray-200 text-gray-600 hover:border-brand-yellow/50 hover:bg-brand-paper"
                  }`}
                >
                  {motif === opt && <motion.div layoutId="motif-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10 flex items-center justify-between">
                    {opt}
                    {motif === opt && <Check size={16} className="text-brand-terracotta" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wood */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">3. Chất liệu đế</label>
            <div className="grid grid-cols-2 gap-2">
              {["Gỗ pơmu", "Gỗ me tây"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setWood(opt)}
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${
                    wood === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                >
                  {wood === opt && <motion.div layoutId="wood-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Size */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">4. Kích thước</label>
            <div className="grid grid-cols-1 gap-2">
              {["Nhỏ (15x15x18cm)", "Lớn (18x18x25cm)"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSize(opt)}
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${
                    size === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                >
                  {size === opt && <motion.div layoutId="size-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Light */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">5. Ánh sáng</label>
            <div className="grid grid-cols-2 gap-2">
              {["LED", "Nến tealight"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setLight(opt)}
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${
                    light === opt 
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium" 
                      : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                >
                  {light === opt && <motion.div layoutId="light-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <div className="flex items-center justify-between border border-brand-brown/20 rounded-lg w-full sm:w-32 bg-white">
          <button 
            className="px-4 py-4 text-brand-brown hover:bg-brand-paper transition-colors rounded-l-lg"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >-</button>
          <span className="w-8 text-center font-medium text-brand-brown">{quantity}</span>
          <button 
            className="px-4 py-4 text-brand-brown hover:bg-brand-paper transition-colors rounded-r-lg"
            onClick={() => setQuantity(quantity + 1)}
          >+</button>
        </div>
        <button 
          onClick={handleAddToCart}
          className="flex-1 w-full bg-brand-brown hover:bg-brand-ink text-brand-yellow font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <ShoppingBag size={20} />
          <span className="tracking-widest uppercase">Thêm Vào Giỏ</span>
        </button>
      </div>
    </div>
  );
}
