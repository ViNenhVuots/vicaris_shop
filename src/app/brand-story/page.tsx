"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandStoryPage() {
  const chapters = [
    {
      label: "Khởi nguồn",
      title: "Một lời động viên",
      paragraphs: [
        "Thầy Tuệ Đạt – người điều hành Quỹ Bảo trợ giáo dục Vicaris – nhận được lời động viên từ Sư anh Mãn Pháp về việc sáng tác đèn thiền để phát hành gây quỹ hỗ trợ học sinh, sinh viên khó khăn có thêm cơ hội đến trường.",
        "Lời động viên ấy như một hạt giống lành, được gieo vào mảnh đất phì nhiêu của tình huynh đệ và lòng phụng sự.",
      ],
    },
    {
      label: "Hành trình",
      title: "3 tháng lặng lẽ",
      paragraphs: [
        "Sau 3 tháng lặng lẽ lên ý tưởng, thử nghiệm và điều chỉnh – từ việc chọn chất liệu giấy dó bền dai, tìm kiếm gỗ pơmu quý hiếm từ mái nhà sàn Tây Bắc, đến việc vẽ tay từng bức tranh thủy mặc bằng mực tàu lên giấy dó.",
        "Mỗi chi tiết đều được chăm chút tỉ mỉ bởi đôi tay của những người thợ lành nghề Mộc – Giấy – Họa.",
      ],
    },
    {
      label: "Ý nghĩa",
      title: "Mực, trà và thi",
      paragraphs: [
        "Mực – Nét vẽ tranh thủy mặc trên giấy dó, mang theo hơi thở nghệ thuật truyền thống ngàn năm.",
        "Trà – Hương trà Sơn Động thảo dược tự nhiên, đi kèm theo đèn thiền tạo nên không gian thư thái trọn vẹn.",
        "Thi – Thi ca, nguồn cảm hứng cho những họa tiết trên đèn: hoa sen, tre trúc, đá và hoa.",
      ],
    },
    {
      label: "Tâm nguyện",
      title: "Tình thương lan tỏa",
      paragraphs: [
        "Mỗi chiếc đèn được biểu hiện không chỉ đến từ sự khéo léo bởi đôi tay của những người lành nghề, mà còn từ những trái tim phụng sự.",
        "Sản phẩm mang theo ước nguyện gieo những hạt giống lành, nuôi dưỡng học sinh, sinh viên yếu thế. Trân quý và biết ơn!",
      ],
    },
  ];

  return (
    <div className="bg-brand-paper min-h-screen">
      <section className="relative py-24 md:py-32 bg-brand-brown text-brand-beige overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-brand-yellow tracking-[0.3em] uppercase font-medium text-sm">Câu chuyện thương hiệu</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6 leading-tight drop-shadow-lg">
              Từ tình huynh đệ <br /> đến ánh sáng chữa lành
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-20">
          {chapters.map((ch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start"
            >
              <div>
                <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">{ch.label}</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown mt-2">{ch.title}</h2>
              </div>
              <div className="space-y-4">
                {ch.paragraphs.map((p, i) => (
                  <p key={i} className="text-brand-ink/80 text-lg leading-relaxed font-serif">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="pt-12 text-center">
            <Link href="/products" className="inline-block px-8 py-4 bg-brand-brown text-brand-yellow font-medium tracking-wide hover:bg-brand-ink transition-colors duration-300 shadow-md">
              KHÁM PHÁ SẢN PHẨM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
