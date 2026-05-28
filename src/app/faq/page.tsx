"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Đèn thiền Mực, trà và thi được làm từ chất liệu gì?",
    answer: "Đèn được làm từ các chất liệu tự nhiên cao cấp: giấy dó truyền thống vẽ tay tranh thủy mặc bằng mực tàu, đế gỗ pơmu (từ mái nhà sàn Tây Bắc) hoặc gỗ me tây, hạt nút dừa trang trí, và nhựa PET trong suốt có thể tái chế.",
  },
  {
    question: "Có mấy loại ánh sáng cho đèn?",
    answer: "Có 2 loại: Đèn LED (cổng USB, có công tắc, tiện di chuyển) và Nến tealight sáp ong (cháy 4 giờ, an toàn, phù hợp thưởng trà và thờ phụng).",
  },
  {
    question: "Combo bao gồm những gì?",
    answer: "Có 3 combo: ĐT1 gồm 1 đèn nhỏ + 1 đèn lớn + trà Sơn Động; ĐT2 gồm 1 đèn tuỳ chọn + trà thảo dược; ĐT3 gồm 1 đèn + trà + tranh 'Hiểu và Thương' + hộp gỗ quà tặng cao cấp. Tất cả combo đều giá 777.000đ.",
  },
  {
    question: "Tôi có thể đặt vẽ họa tiết theo ý riêng không?",
    answer: "Có! Chúng tôi nhận đặt vẽ theo ý tưởng riêng của bạn. Vui lòng liên hệ trực tiếp qua hotline 090 999 1042 hoặc email lienhe@vicaris.vn để trao đổi chi tiết.",
  },
  {
    question: "Chính sách vận chuyển như thế nào?",
    answer: "Miễn phí vận chuyển cho đơn hàng từ 699.000đ. Đơn dưới 699.000đ phí ship 30.000đ toàn quốc. Giao hàng nội thành 1-2 ngày, tỉnh thành khác 3-5 ngày làm việc.",
  },
  {
    question: "100% lợi nhuận được sử dụng như thế nào?",
    answer: "Toàn bộ lợi nhuận từ việc bán đèn thiền được chuyển vào Quỹ Bảo trợ giáo dục Vicaris, dùng để hỗ trợ học bổng, sách vở và chi phí học tập cho học sinh, sinh viên có hoàn cảnh khó khăn trên khắp cả nước.",
  },
  {
    question: "Làm sao để bảo quản đèn thiền?",
    answer: "Để nơi khô ráo, tránh ẩm ướt. Với đèn nến, đặt trên mặt phẳng ổn định khi thắp. Lau bụi nhẹ nhàng bằng khăn mềm. Tránh tiếp xúc trực tiếp với nước.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-brand-paper min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Hỗ trợ</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">Câu hỏi thường gặp</h1>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-brand-brown/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-paper/50 transition-colors"
              >
                <h3 className="font-serif font-medium text-brand-brown text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-brand-yellow flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-brand-ink/80 font-serif leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
