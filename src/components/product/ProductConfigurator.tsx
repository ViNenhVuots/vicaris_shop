"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, ShieldCheck, Truck, Leaf, Gift, Check, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { ProductData } from "@/data/products";
import { motion } from "framer-motion";

import imgTaman from "../../../public/images/products/motifs/Da va hoa - chu tam am.jpg";
import imgSen from "../../../public/images/products/motifs/hoa sen thuy mac.jpg";
import imgTre from "../../../public/images/products/motifs/thuy mac tre truc.jpg";
import imgNeo from "../../../public/images/products/motifs/neo ve sen som.jpg";

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

  const motifImages: Record<string, any> = {
    "Đá và hoa + chữ Tâm An": imgTaman,
    "Hoa sen thủy mặc": imgSen,
    "Thủy mặc tre trúc": imgTre,
    "Hoa sen thủy mặc + chữ Nẻo về sen nở": imgNeo
  };

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
      <div className="text-2xl font-bold text-brand-terracotta font-serif mb-2">
        Giá: 370.000đ - 777.000đ
      </div>

      {/* Short Description */}
      <div className="prose prose-brand font-serif text-brand-ink/80 text-lg leading-relaxed text-justify">
        <p>
          Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Với 2 lựa chọn ánh sáng đèn LED hoặc nến tealight, sản phẩm phù hợp với bất cứ ai muốn thưởng thức sự mộc mạc và thi vị, hoàn hảo cho cả không gian thưởng trà, nghỉ ngơi, làm việc và thờ phụng. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, đèn thiền Mực, trà và thi chính là một món quà cao cấp và ý nghĩa dành tặng những ai yêu thích sự lắng sâu và xúc chạm với di sản văn hóa Việt.
        </p>
      </div>

      {/* (Price moved to bottom as Row 7) */}

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
                className={`relative py-3 px-1 border rounded-lg text-sm transition-all duration-300 font-medium ${combo === opt
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
                  className={`relative py-3 px-4 border rounded-lg text-sm text-left transition-all duration-300 ${isDisabled ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-100" :
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

          {motifImages[motif] && (
            <motion.div
              key={motif}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-xl overflow-hidden shadow-sm border border-brand-brown/10 w-full"
            >
              <Image
                src={motifImages[motif]}
                alt={motif}
                quality={70}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wood */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">3. Chất liệu đế</label>
            <div className="grid grid-cols-2 gap-2">
              {["Gỗ me tây", "Gỗ pơmu"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setWood(opt)}
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${wood === opt
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
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${size === opt
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
                  className={`relative py-3 px-3 border rounded-lg text-sm transition-all duration-300 ${light === opt
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

      {/* Row 6: Quantity & Row 7: Price & CTA */}
      <div className="space-y-6 pt-4 border-t border-gray-100">

        {/* Row 6: Số lượng */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-3 font-serif uppercase tracking-wider">6. Số lượng</label>
          <div className="flex items-center justify-between border border-brand-brown/20 rounded-lg w-32 bg-white h-12">
            <button
              className="px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-l-lg flex items-center justify-center"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >-</button>
            <span className="w-8 text-center font-medium text-brand-brown">{quantity}</span>
            <button
              className="px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-r-lg flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
            >+</button>
          </div>
        </div>

        {/* Row 7: Giá nhảy tự động */}
        <div className="bg-brand-paper/50 p-4 rounded-xl border border-brand-brown/10">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">7. Tạm tính</label>
            <div className="text-3xl font-bold text-brand-terracotta font-serif">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * quantity)}
            </div>
          </div>
          <div className="text-sm text-brand-ink/70 flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-brand-brown" />
              <span>Miễn phí vận chuyển cho đơn từ 699k (từ 2 - 5 ngày)</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle2 size={16} />
              <span>Còn hàng Giao hàng ngay lập tức</span>
            </div>
          </div>

          {/* Add to Cart / Buy Now CTA */}
          <div className="flex flex-col sm:flex-row w-full gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 h-12 bg-[#FBBF24] hover:bg-[#F59E0B] text-brand-brown font-medium px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag size={18} />
              <span className="tracking-wide">Thêm vào giỏ hàng</span>
            </button>
            <button
              onClick={() => {
                handleAddToCart();
                // You can add router.push('/checkout') here if needed
              }}
              className="flex-1 h-12 bg-[#1F2937] hover:bg-black text-white font-medium px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              <span className="tracking-wide">Mua ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
