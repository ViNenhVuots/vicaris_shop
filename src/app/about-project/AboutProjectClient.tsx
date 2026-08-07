"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, BookOpen, Users, Target } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Tình Thương",
    desc: "Mỗi sản phẩm chứa đựng tấm lòng của những người phụng sự, mang theo thông điệp 'Hiểu và Thương'.",
  },
  {
    icon: BookOpen,
    title: "Giáo Dục",
    desc: "100% lợi nhuận dành cho quỹ bảo trợ giáo dục, giúp các em học sinh, sinh viên khó khăn.",
  },
  {
    icon: Users,
    title: "Cộng Đồng",
    desc: "Kết nối những trái tim đồng cảm, lan tỏa giá trị tử tế trong cộng đồng.",
  },
  {
    icon: Target,
    title: "Thủ Công",
    desc: "Mỗi chiếc đèn được làm thủ công tỉ mỉ bởi những người thợ lành nghề Mộc - Giấy - Họa.",
  },
] as const;

export default function AboutProjectClient() {
  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-brand-brown text-brand-beige overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Nền trang trí"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium text-xs sm:text-sm">
              Giới thiệu dự án
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              Đèn thiền <br className="hidden sm:block" /> Mực, trà và thi
            </h1>
            <p className="text-brand-beige/90 font-serif text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc.
              Sản phẩm được thực hiện bởi Quỹ Bảo trợ giáo dục Vicaris nhằm
              gây quỹ hỗ trợ học sinh, sinh viên khó khăn có thêm cơ hội đến trường.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[280px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop')",
                }}
                role="img"
                aria-label="Hình minh họa sứ mệnh"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 sm:space-y-8"
            >
              <div>
                <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm">
                  Sứ mệnh
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mt-3 sm:mt-4 leading-tight">
                  Gieo hạt giống lành, nuôi dưỡng tương lai
                </h2>
              </div>
              <div className="w-16 h-[2px] bg-brand-yellow" aria-hidden="true" />
              <p className="text-brand-ink/80 text-base sm:text-lg leading-relaxed font-serif">
                Quỹ Bảo trợ giáo dục Vicaris được thành lập với mong muốn hỗ trợ các em học sinh, sinh viên có hoàn cảnh khó khăn nhưng giàu ý chí vươn lên. 100% lợi nhuận từ mỗi chiếc đèn thiền được sử dụng cho hoạt động giáo dục và bảo trợ.
              </p>
              <p className="text-brand-ink/80 text-base sm:text-lg leading-relaxed font-serif">
                Mỗi chiếc đèn không chỉ mang lại ánh sáng cho không gian sống mà còn thắp sáng con đường học vấn của các em nhỏ trên khắp mọi miền đất nước.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm">
              Giá trị cốt lõi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mt-3 sm:mt-4 mb-4 sm:mb-6">
              Điều chúng tôi theo đuổi
            </h2>
            <div className="w-16 h-[2px] bg-brand-yellow mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VALUES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-brand-paper p-6 sm:p-8 rounded-xl shadow-lg border border-brand-brown/5 text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-brown/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto text-brand-yellow">
                  <item.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-brown mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-ink/70 leading-relaxed font-serif text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4 sm:mb-6">
            Cùng chung tay lan tỏa ánh sáng
          </h2>
          <p className="text-brand-ink/70 font-serif text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Mỗi chiếc đèn bạn mua là một đóng góp cho tương lai của các em nhỏ.
            Hãy cùng Vicaris thắp sáng ước mơ!
          </p>
          <Link
            href="/products"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-brown text-brand-yellow font-medium tracking-wide hover:bg-brand-ink transition-colors duration-300 shadow-md text-sm sm:text-base"
          >
            KHÁM PHÁ SẢN PHẨM
          </Link>
        </div>
      </section>
    </div>
  );
}
