"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Check, Phone, ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ProductData, ProductVariant } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { formatProductPrice, formatVnd } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 699000;
const HOTLINE = "0363816213";
const HOTLINE_LABEL = "0363.816.213";

interface Props {
  productBase: ProductData;
}

function variantTitle(variant: ProductVariant) {
  return variant.size ? `${variant.label} (${variant.size})` : variant.label;
}

export default function ProductWoodBoardConfigurator({ productBase }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const variants = productBase.variants ?? [];
  const [selectedId, setSelectedId] = useState(variants[1]?.id ?? variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);

  const selected = useMemo(
    () => variants.find((v) => v.id === selectedId) ?? variants[0],
    [selectedId, variants]
  );

  const isCustom = !selected?.price;
  const unitPrice = selected?.price ?? 0;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = useCallback(() => {
    if (!selected || selected.price == null) return;
    addItem(
      {
        ...productBase,
        id: `${productBase.slug}-${selected.id}`,
        price: selected.price,
        name: `${productBase.name} — ${variantTitle(selected)}`,
        image: selected.image || productBase.image,
        options: `Mẫu: ${variantTitle(selected)}`,
      },
      quantity
    );
    toast.success("Đã thêm vào giỏ hàng");
  }, [addItem, productBase, quantity, selected]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="text-xl sm:text-2xl font-bold text-brand-terracotta font-serif mb-1 sm:mb-2">
        Giá: {formatProductPrice(productBase.price, productBase.priceMax)}
      </div>

      <div className="prose prose-brand font-serif text-brand-ink/80 text-base sm:text-lg leading-relaxed text-justify">
        <p>
          {productBase.shortDescription || productBase.description}
        </p>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider">
          Chọn mẫu chữ
        </legend>
        <div className="grid grid-cols-1 gap-2">
          {variants.map((opt) => {
            const active = selectedId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedId(opt.id)}
                className={`relative py-2.5 sm:py-3 px-3 sm:px-4 border rounded-lg text-xs sm:text-sm text-left transition-all duration-300 ${
                  active
                    ? "border-brand-yellow bg-brand-yellow/10 text-brand-brown font-medium shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-brand-yellow/50 hover:bg-brand-paper"
                }`}
                aria-pressed={active}
              >
                {active && (
                  <motion.div
                    layoutId="wood-board-variant"
                    className="absolute inset-0 border-2 border-brand-yellow rounded-lg"
                  />
                )}
                <span className="relative z-10 flex items-center justify-between gap-2">
                  <span>
                    {variantTitle(opt)}
                    <span className="block sm:inline sm:ml-2 text-brand-terracotta/90">
                      {opt.price == null ? "— giá liên hệ" : `— ${formatVnd(opt.price)}`}
                    </span>
                  </span>
                  {active && <Check size={16} className="text-brand-terracotta shrink-0" aria-hidden="true" />}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {selected?.image && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden shadow-sm border border-brand-brown/10 w-full relative bg-[#e8e4db]"
        >
          <Image
            src={selected.image}
            alt={variantTitle(selected)}
            width={0}
            height={0}
            sizes="100vw"
            quality={70}
            style={{ width: '100%', height: 'auto' }}
            className="block"
          />
        </motion.div>
      )}

      <div className="space-y-4 sm:space-y-6 pt-4 border-t border-gray-100">
        {!isCustom && (
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2 sm:mb-3 font-serif uppercase tracking-wider" htmlFor="wood-board-qty">
              Số lượng
            </label>
            <div className="flex items-center justify-between border border-brand-brown/20 rounded-lg w-32 bg-white h-10 sm:h-12" id="wood-board-qty">
              <button
                type="button"
                className="px-3 sm:px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-l-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Giảm số lượng"
              >
                −
              </button>
              <span className="w-8 text-center font-medium text-brand-brown text-sm sm:text-base">{quantity}</span>
              <button
                type="button"
                className="px-3 sm:px-4 h-full text-brand-brown hover:bg-brand-paper transition-colors rounded-r-lg"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Tăng số lượng"
              >
                +
              </button>
            </div>
          </div>
        )}

        <div className="bg-brand-paper/50 p-3 sm:p-4 rounded-xl border border-brand-brown/10">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-sm font-medium text-brand-brown font-serif uppercase tracking-wider">
              {isCustom ? "Tư vấn" : "Tạm tính"}
            </span>
            <div className="text-2xl sm:text-3xl font-bold text-brand-terracotta font-serif">
              {isCustom ? "Liên hệ" : formatVnd(totalPrice)}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-brand-ink/70 flex flex-col gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-brand-brown shrink-0" aria-hidden="true" />
              <span>
                Miễn phí vận chuyển cho đơn từ {new Intl.NumberFormat("vi-VN").format(FREE_SHIPPING_THRESHOLD / 1000)}k (từ 2 - 5 ngày)
              </span>
            </div>
            <p>
              Thiết kế theo yêu cầu về nội dung, logo, nét chữ, màu chữ và kích thước.
            </p>
          </div>

          {isCustom ? (
            <a
              href={`tel:${HOTLINE}`}
              className="flex w-full h-11 sm:h-12 bg-[#1F2937] hover:bg-black text-white font-medium px-4 rounded-lg transition-all duration-300 items-center justify-center gap-2 shadow-sm text-sm sm:text-base"
            >
              <Phone size={18} aria-hidden="true" />
              <span className="tracking-wide">Liên hệ {HOTLINE_LABEL} (Ms. Hoài)</span>
            </a>
          ) : (
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
          )}

          {!isCustom && (
            <div className="mt-4 pt-4 border-t border-brand-brown/10">
              <div className="flex items-start gap-3">
                <div className="bg-brand-brown/5 p-2 rounded-full text-brand-brown shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-brown text-sm uppercase tracking-wider mb-1">
                    Đặt hàng / Tư vấn
                  </h4>
                  <p className="text-sm text-brand-ink/80 leading-relaxed">
                    Liên hệ hotline: <strong>{HOTLINE_LABEL}</strong> (Ms. Hoài)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
