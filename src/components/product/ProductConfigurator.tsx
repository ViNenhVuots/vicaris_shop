"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, Truck, Check, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { ProductData } from "@/data/products";
import { motion } from "framer-motion";

import imgTaman from "../../../public/images/products/motifs/Da va hoa - chu tam am.jpg";
import imgSen from "../../../public/images/products/motifs/hoa sen thuy mac.jpg";
import imgTre from "../../../public/images/products/motifs/thuy mac tre truc.jpg";
import imgNeo from "../../../public/images/products/motifs/neo ve sen som.jpg";

const COMBO_OPTIONS = ["Không", "ĐT1", "ĐT2", "ĐT3"] as const;
const MOTIF_OPTIONS = [
  "Đá và hoa + chữ Tâm An",
  "Hoa sen thủy mặc",
  "Hoa sen rực rỡ",
  "Thủy mặc tre trúc",
  "Hoa sen thủy mặc + chữ Nẻo về sen nở",
  "Đèn theo ý tưởng của bạn?",
] as const;
const WOOD_OPTIONS = ["Gỗ me tây", "Gỗ pơmu"] as const;
const SIZE_OPTIONS = ["Nhỏ (15x15x18cm)", "Lớn (18x18x25cm)"] as const;
const LIGHT_OPTIONS = ["LED", "Nến tealight"] as const;

const MOTIF_IMAGES: Record<string, typeof imgTaman> = {
  "Đá và hoa + chữ Tâm An": imgTaman,
  "Hoa sen thủy mặc": imgSen,
  "Thủy mặc tre trúc": imgTre,
  "Hoa sen thủy mặc + chữ Nẻo về sen nở": imgNeo,
};

const COMBO_PRICE = 777000;
const SMALL_PRICE = 370000;
const LARGE_PRICE = 450000;
const FREE_SHIPPING_THRESHOLD = 699000;

interface ConfiguratorProps {
  productBase: ProductData;
}

export default function ProductConfigurator({ productBase }: ConfiguratorProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [combo, setCombo] = useState<string>("Không");
  const [size, setSize] = useState<string>("Nhỏ (15x15x18cm)");
  const [motif, setMotif] = useState<string>("Đá và hoa + chữ Tâm An");
  const [wood, setWood] = useState<string>("Gỗ me tây");
  const [light, setLight] = useState<string>("LED");
  const [quantity, setQuantity] = useState(1);

  const isSmallSize = size === "Nhỏ (15x15x18cm)";

  const price = useMemo(() => {
    let currentPrice = combo !== "Không" ? COMBO_PRICE : (isSmallSize ? SMALL_PRICE : LARGE_PRICE);
    if (motif === "Hoa sen rực rỡ") {
      currentPrice += 50000;
    }
    return currentPrice;
  }, [combo, isSmallSize, motif]);

  const totalPrice = price * quantity;

  useEffect(() => {
    if (isSmallSize && motif.includes("Nẻo về sen nở")) {
      setMotif("Hoa sen thủy mặc");
    }
  }, [isSmallSize, motif]);

  const handleAddToCart = useCallback(() => {
    const optionsStr = `Combo: ${combo} | Kích thước: ${size} | Họa tiết: ${motif} | Loại đế: ${wood} | Ánh sáng: ${light}`;
    const cartProduct = {
      ...productBase,
      id: `${productBase.slug}-${combo}-${size}-${motif}-${wood}-${light}`.replace(/\s+/g, '-').toLowerCase(),
      price,
      name: `${productBase.name} (${size})`,
      options: optionsStr,
    };
    addItem(cartProduct, quantity);
    toast.success("Đã thêm vào giỏ hàng");
  }, [addItem, combo, light, motif, price, productBase, quantity, size, wood]);

  const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="text-xl sm:text-2xl font-bold text-brand-terracotta font-serif mb-1 sm:mb-2">
        Giá: {new Intl.NumberFormat('vi-VN').format(SMALL_PRICE)}đ - {new Intl.NumberFormat('vi-VN').format(COMBO_PRICE + 50000)}đ
      </div>

      {/* Short Description */}
      <div className="prose prose-brand font-serif text-brand-ink/80 text-base sm:text-lg leading-relaxed text-justify">
        <p>
          Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Với 2 lựa chọn ánh sáng đèn LED hoặc nến tealight, sản phẩm phù hợp với bất cứ ai muốn thưởng thức sự mộc mạc và thi vị, hoàn hảo cho cả không gian thưởng trà, nghỉ ngơi, làm việc và thờ phụng. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, đèn thiền Mực, trà và thi chính là một món quà cao cấp và ý nghĩa dành tặng những ai yêu thích sự lắng sâu và xúc chạm với di sản văn hóa Việt.
        </p>
      </div>

      {/* Options */}
      <div className="space-y-5 sm:space-y-6">
        {/* 1. Combo */}
        <fieldset>
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <legend className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">1. Combo</legend>
            <span className="text-xs text-brand-terracotta font-medium bg-brand-terracotta/10 px-2 py-1 rounded">Tiết kiệm hơn</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {COMBO_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setCombo(opt)}
                className={`relative py-2.5 sm:py-3 px-1 border rounded-lg text-sm transition-all duration-300 font-medium ${combo === opt
                  ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown shadow-sm"
                  : "border-gray-200 text-gray-500 hover:border-brand-yellow/50 hover:bg-brand-paper"
                }`}
                aria-pressed={combo === opt}
              >
                {combo === opt && <motion.div layoutId="combo-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                <span className="relative z-10">{opt}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {/* 2. Motif */}
        <fieldset>
          <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">2. Họa tiết tranh</legend>
          <div className="grid grid-cols-1 gap-2">
            {MOTIF_OPTIONS.map((opt) => {
              const isDisabled = isSmallSize && opt.includes("Nẻo về sen nở");
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => !isDisabled && setMotif(opt)}
                  disabled={isDisabled}
                  className={`relative py-2.5 sm:py-3 px-3 sm:px-4 border rounded-lg text-xs sm:text-sm text-left transition-all duration-300 ${isDisabled ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-100" :
                    motif === opt
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium shadow-sm"
                      : "border-gray-200 text-gray-600 hover:border-brand-yellow/50 hover:bg-brand-paper"
                  }`}
                  aria-pressed={motif === opt}
                  aria-disabled={isDisabled}
                >
                  {motif === opt && <motion.div layoutId="motif-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10 flex items-center justify-between gap-2">
                    <span className="truncate">{opt}</span>
                    {motif === opt && <Check size={16} className="text-brand-terracotta shrink-0" aria-hidden="true" />}
                  </span>
                </button>
              );
            })}
          </div>

          {MOTIF_IMAGES[motif] && (
            <motion.div
              key={motif}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 sm:mt-4 rounded-xl overflow-hidden shadow-sm border border-brand-brown/10 w-full"
            >
              <Image
                src={MOTIF_IMAGES[motif]}
                alt={`Họa tiết ${motif}`}
                quality={70}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </motion.div>
          )}
        </fieldset>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* 3. Wood */}
          <fieldset>
            <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">3. Chất liệu đế</legend>
            <div className="grid grid-cols-2 gap-2">
              {WOOD_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setWood(opt)}
                  className={`relative py-2.5 sm:py-3 px-2 sm:px-3 border rounded-lg text-xs sm:text-sm transition-all duration-300 ${wood === opt
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium"
                    : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                  aria-pressed={wood === opt}
                >
                  {wood === opt && <motion.div layoutId="wood-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* 4. Size */}
          <fieldset>
            <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">4. Kích thước</legend>
            <div className="grid grid-cols-1 gap-2">
              {SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSize(opt)}
                  className={`relative py-2.5 sm:py-3 px-2 sm:px-3 border rounded-lg text-xs sm:text-sm transition-all duration-300 ${size === opt
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium"
                    : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                  aria-pressed={size === opt}
                >
                  {size === opt && <motion.div layoutId="size-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* 5. Light */}
          <fieldset className="sm:col-span-2">
            <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">5. Ánh sáng</legend>
            <div className="grid grid-cols-2 gap-2">
              {LIGHT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setLight(opt)}
                  className={`relative py-2.5 sm:py-3 px-2 sm:px-3 border rounded-lg text-xs sm:text-sm transition-all duration-300 ${light === opt
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium"
                    : "border-gray-200 text-gray-500 hover:border-brand-yellow/50"
                  }`}
                  aria-pressed={light === opt}
                >
                  {light === opt && <motion.div layoutId="light-active" className="absolute inset-0 border-2 border-brand-yellow rounded-lg" />}
                  <span className="relative z-10">{opt}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Row 6: Quantity & Row 7: Price & CTA */}
      <div className="space-y-4 sm:space-y-6 pt-4 border-t border-gray-100">
        {/* Row 6: Số lượng */}
        <div>
          <label className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider" htmlFor="quantity-selector">6. Số lượng</label>
          <div className="flex items-center justify-between border border-brand-brown/20 rounded-lg w-32 bg-white h-10 sm:h-12" id="quantity-selector">
            <button
              type="button"
              className="px-3 sm:px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-l-lg flex items-center justify-center"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Giảm số lượng"
            >
              −
            </button>
            <span className="w-8 text-center font-medium text-brand-brown text-sm sm:text-base" aria-live="polite" aria-atomic="true">{quantity}</span>
            <button
              type="button"
              className="px-3 sm:px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-r-lg flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Tăng số lượng"
            >
              +
            </button>
          </div>
        </div>

        {/* Row 7: Giá nhảy tự động */}
        <div className="bg-brand-paper/50 p-3 sm:p-4 rounded-xl border border-brand-brown/10">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">7. Tạm tính</span>
            <div className="text-2xl sm:text-3xl font-bold text-brand-terracotta font-serif" aria-live="polite" aria-atomic="true">
              {formattedTotal}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-brand-ink/70 flex flex-col gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-brand-brown shrink-0" aria-hidden="true" />
              <span>Miễn phí vận chuyển cho đơn từ {new Intl.NumberFormat('vi-VN').format(FREE_SHIPPING_THRESHOLD / 1000)}k (từ 2 - 5 ngày)</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>Còn hàng — Giao hàng ngay lập tức</span>
            </div>
          </div>

          {/* Add to Cart / Buy Now CTA */}
          <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 h-11 sm:h-12 bg-[#FBBF24] hover:bg-[#F59E0B] text-brand-brown font-medium px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-sm sm:text-base"
            >
              <ShoppingBag size={18} aria-hidden="true" />
              <span className="tracking-wide">Thêm vào giỏ hàng</span>
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 h-11 sm:h-12 bg-[#1F2937] hover:bg-black text-white font-medium px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm text-sm sm:text-base"
            >
              <span className="tracking-wide">Mua ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
