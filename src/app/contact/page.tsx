"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success("Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-brand-brown text-brand-beige overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-brand-yellow tracking-[0.3em] uppercase font-medium text-sm">Liên hệ</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6 leading-tight drop-shadow-lg">
              Kết nối với chúng tôi
            </h1>
            <p className="text-brand-beige/90 font-serif text-lg max-w-2xl mx-auto">
              Mọi thắc mắc, đóng góp hay yêu cầu đặt hàng riêng – hãy liên hệ, chúng tôi luôn sẵn lòng lắng nghe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-brand-brown mb-6">Thông tin liên hệ</h2>
                <div className="w-16 h-[2px] bg-brand-yellow" />
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Địa chỉ", value: "Quỹ Bảo trợ giáo dục Vicaris" },
                  { icon: Phone, label: "Điện thoại", value: "090 999 1042" },
                  { icon: Mail, label: "Email", value: "lienhe@vicaris.vn" },
                  { icon: Clock, label: "Giờ làm việc", value: "Thứ 2 – Thứ 7: 8:00 – 17:00" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-brand-brown/5">
                    <div className="w-12 h-12 bg-brand-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-brown font-serif">{item.label}</h4>
                      <p className="text-brand-ink/70 font-serif">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-brand-brown/5 space-y-6">
                <h2 className="text-2xl font-serif font-bold text-brand-brown mb-2">Gửi tin nhắn</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-brown mb-1 font-serif">Họ và tên</label>
                    <input required type="text" className="w-full px-4 py-3 border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-yellow bg-brand-paper/50 font-serif" placeholder="Nhập họ tên" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-brown mb-1 font-serif">Email</label>
                    <input required type="email" className="w-full px-4 py-3 border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-yellow bg-brand-paper/50 font-serif" placeholder="Nhập email" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1 font-serif">Chủ đề</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-yellow bg-brand-paper/50 font-serif" placeholder="Nhập chủ đề" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1 font-serif">Nội dung</label>
                  <textarea required rows={5} className="w-full px-4 py-3 border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-yellow bg-brand-paper/50 font-serif resize-none" placeholder="Nhập nội dung tin nhắn..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-brown text-brand-yellow font-medium tracking-wide rounded-lg hover:bg-brand-ink transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? "ĐANG GỬI..." : <><Send size={18} /> GỬI TIN NHẮN</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
