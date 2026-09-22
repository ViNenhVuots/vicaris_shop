"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, Truck, Check, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { ProductData } from "@/data/products";
import { motion } from "framer-motion";
import ProductWoodBoardConfigurator from "@/components/product/ProductWoodBoardConfigurator";

import imgTaman from "../../../public/images/products/motifs/Da va hoa - chu tam am.jpg";
import imgSen from "../../../public/images/products/motifs/hoa sen thuy mac.jpg";
import imgSenRucRo from "../../../public/images/products/motifs/hoa sen ruc ro.jpg";
import imgTre from "../../../public/images/products/motifs/thuy mac tre truc.jpg";
import imgNeo from "../../../public/images/products/motifs/neo ve sen som.jpg";

const TEXT_OPTIONS = [
  "Không", "Listen deeply", "Peace Joy Hope", "Breathe and Smile", "Happiness is here and now", "Peace is every breath", "écoute avec compassion",
  "Nẻo về sen nở", "Tay Thầy trong tay con", "Ân tình", "Đến đi thong dong", "Thong dong", "Mây trắng", "Tình Thầy", "Cõi lành trăng thu",
  "Ơn Thầy tái sinh", "Thở đi con", "Chánh niệm", "Mỉm cười", "Ngồi yên thấy rõ", "Muốn an được an", "Lòng không bận về", "Đã về đã tới",
  "Không bùn không sen", "Không diệt không sinh", "Hiện tại tuyệt vời", "Hiện pháp lạc trú", "Tâm tĩnh lặng chiếu", "Vô sự",
  "Vững chãi thảnh thơi", "Ta có trong nhau", "Nhìn sâu để hiểu", "Thấy rõ để thương", "Hiểu lắng thương sâu", "Mắt thương nhìn đời",
  "Tâm an thế giới an", "Hiểu nghĩa là thương", "Thương như Bụt thương", "Ai cũng được thương", "Có Bụt trong ta", "Bình an là chốn hẹn",
  "Lượng cả bao dung", "Trồng một nụ cười", "Gieo trồng hạnh phúc", "Hạnh phúc bây giờ", "Hạnh phúc cầm tay", "Tùy duyên thuận pháp",
  "Biết ơn", "Thắp sáng nguồn tâm", "Quay về nương tựa", "Khơi nguồn yêu thương", "Sống tỉnh thức", "Tươi son bền sắt",
  "Tâm an", "Một niệm sáng trong", "Tâm rỗng, lòng thênh", "Thôi tìm, hãy thấy", "Vốn đã đủ đầy", "Chạm vào sự sống", "Đường về trong tâm",
  "Hiểu để thương", "Trọn vẹn phút này", "Hiện tại là quà", "Hạnh phúc thật gần", "Dịu dàng với mình", "Lặng nghe tâm mình", "Giữ lòng sáng trong",
  "Buông một niệm sầu", "Nhà ở bên trong", "Một lòng biết ơn", "Mây đến, mây đi", "Thương từ gốc rễ", "Trọn một kiếp an", "Tĩnh giữa nhân gian"
];

const MOTIF_OPTIONS = [
  "Hoa sen thủy mặc",
  "Tre trúc thủy mặc",
  "Đá và hoa",
  "Hoa sen rực rỡ",
  "Đèn theo ý tưởng của bạn?",
] as const;
const WOOD_OPTIONS = ["Gỗ me tây", "Gỗ pơmu"] as const;
const SIZE_OPTIONS = ["Nhỏ (15x15x18cm)", "Lớn (18x18x25cm)"] as const;
const LIGHT_OPTIONS = ["LED", "Nến tealight"] as const;

const MOTIF_IMAGES: Record<string, typeof imgTaman> = {
  "Đá và hoa": imgTaman,
  "Hoa sen thủy mặc": imgSen,
  "Hoa sen rực rỡ": imgSenRucRo,
  "Tre trúc thủy mặc": imgTre,
};

const COMBO_PRICE = 777000;
const SMALL_PRICE = 370000;
const LARGE_PRICE = 450000;
const FREE_SHIPPING_THRESHOLD = 699000;

interface ConfiguratorProps {
  productBase: ProductData;
}

export default function ProductConfigurator({ productBase }: ConfiguratorProps) {
  if (productBase.configurator === "wood-board") {
    return <ProductWoodBoardConfigurator productBase={productBase} />;
  }
  return <LampProductConfigurator productBase={productBase} />;
}

function LampProductConfigurator({ productBase }: ConfiguratorProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [textSelection, setTextSelection] = useState<string>(TEXT_OPTIONS[0]);
  const [size, setSize] = useState<string>("Nhỏ (15x15x18cm)");
  const [motif, setMotif] = useState<string>("Hoa sen thủy mặc");
  const [wood, setWood] = useState<string>("Gỗ me tây");
  const [light, setLight] = useState<string>("LED");
  const [quantity, setQuantity] = useState(1);
  const [addText, setAddText] = useState(false);

  const price = useMemo(() => {
    let basePrice = 370000;

    if (wood === "Gỗ me tây") {
      if (size === "Nhỏ (15x15x18cm)") {
        basePrice = 370000;
      } else {
        basePrice = 520000;
      }
    } else {
      // Gỗ pơmu
      if (size === "Nhỏ (15x15x18cm)") {
        basePrice = 555000;
      } else {
        basePrice = 777000;
      }
    }

    let currentPrice = basePrice;

    if (motif === "Hoa sen rực rỡ") {
      currentPrice += 50000;
    } else if (motif === "Đèn theo ý tưởng của bạn?") {
      currentPrice += 200000;
    }

    if (addText) {
      currentPrice += 50000;
    }

    return currentPrice;
  }, [size, motif, wood, addText]);

  const totalPrice = price * quantity;

  const handleAddToCart = useCallback(() => {
    const optionsStr = `Chữ: ${textSelection} | Kích thước: ${size} | Họa tiết: ${motif} | Loại đế: ${wood} | Ánh sáng: ${light}${addText ? ' | Viết chữ thêm' : ''}`;
    const cartProduct = {
      ...productBase,
      id: `${productBase.slug}-${textSelection}-${size}-${motif}-${wood}-${light}${addText ? '-addText' : ''}`.replace(/\s+/g, '-').toLowerCase(),
      price,
      name: `${productBase.name} (${size})`,
      options: optionsStr,
    };
    addItem(cartProduct, quantity);
    toast.success("Đã thêm vào giỏ hàng");
  }, [addItem, textSelection, light, motif, price, productBase, quantity, size, wood, addText]);

  const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="text-xl sm:text-2xl font-bold text-brand-terracotta font-serif mb-1 sm:mb-2">
        Giá: {new Intl.NumberFormat('vi-VN').format(370000)}đ - {new Intl.NumberFormat('vi-VN').format(1499000)}đ
      </div>

      {/* Short Description */}
      <div className="prose prose-brand font-serif text-brand-ink/80 text-base sm:text-lg leading-relaxed text-justify">
        <p>
          Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Với 2 lựa chọn ánh sáng đèn LED hoặc nến tealight, sản phẩm phù hợp với bất cứ ai muốn thưởng thức sự mộc mạc và thi vị, hoàn hảo cho cả không gian thưởng trà, nghỉ ngơi, làm việc và thờ phụng. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, đèn thiền Mực, trà và thi chính là một món quà cao cấp và ý nghĩa dành tặng những ai yêu thích sự lắng sâu và xúc chạm với di sản văn hóa Việt.
        </p>
      </div>

      {/* Options */}
      <div className="space-y-5 sm:space-y-6">
        {/* 1. Text Selection */}
        <fieldset>
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <legend className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">1. Lựa chọn chữ viết</legend>
          </div>
          <div className="relative">
            <select
              value={textSelection}
              onChange={(e) => setTextSelection(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 sm:py-3 px-4 pr-8 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent font-medium"
            >
              {TEXT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>

        {/* 2. Motif */}
        <fieldset>
          <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">2. Họa tiết tranh</legend>
          <div className="grid grid-cols-1 gap-2">
            {MOTIF_OPTIONS.map((opt) => {
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setMotif(opt)}
                  className={`relative py-2.5 sm:py-3 px-3 sm:px-4 border rounded-lg text-xs sm:text-sm text-left transition-all duration-300 ${motif === opt
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-brand-yellow/50 hover:bg-brand-paper"
                    }`}
                  aria-pressed={motif === opt}
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

          {/* Additional Options */}
          <div className="mt-4">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-brand-paper">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={addText}
                  onChange={(e) => setAddText(e.target.checked)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-brand-yellow checked:bg-brand-yellow transition-all"
                />
                <Check size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-brown opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-700 font-medium">Viết chữ thêm (50.000đ)</span>
            </label>
          </div>
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
