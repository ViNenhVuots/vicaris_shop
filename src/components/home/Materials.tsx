"use client";

import { motion } from "framer-motion";

const MATERIALS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M3 12h18"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/></svg>
    ),
    title: "Giấy Dó & Thủy Mặc",
    desc: "Giấy dó bền dai, mộc mạc, được vẽ tay tranh thủy mặc bằng mực tàu mang theo hơi thở thời gian và tinh thần của nền văn hóa lâu đời."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
    ),
    title: "Tái Sinh Từ Gỗ Cũ",
    desc: "Gỗ pơmu quý hiếm được sống lại từ mái nhà sàn Tây Bắc. Gỗ me tây mộc mạc, vân đẹp, ít nứt nẻ. Cả hai tạo nên chiếc đế vững chãi và thơm dịu nhẹ."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Nhựa PET Hiện Đại",
    desc: "Sự kết hợp giữa truyền thống nương vào hiện đại để đứng vững. Nhựa PET trong suốt, dẻo dai, ổn định nhiệt và có thể tái chế bảo vệ môi trường."
  },
] as const;

export default function Materials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm">Chất liệu</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mt-3 sm:mt-4 mb-4 sm:mb-6">
            Hòa hợp truyền thống và hiện đại
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIALS.map((material, idx) => (
            <motion.div 
              key={material.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-paper p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-brand-brown/5 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-brown/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-brand-brown">
                {material.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-brown mb-3 sm:mb-4">{material.title}</h3>
              <p className="text-brand-ink/70 leading-relaxed font-serif text-sm sm:text-base">
                {material.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
