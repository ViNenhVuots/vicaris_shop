"use client";

import { motion } from "framer-motion";

export default function Materials() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Chất liệu</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">
            Hòa hợp truyền thống và hiện đại
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-paper p-10 rounded-xl shadow-lg border border-brand-brown/5 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center mb-6 text-brand-brown">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/></svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-brown mb-4">Giấy Dó & Thủy Mặc</h3>
            <p className="text-brand-ink/70 leading-relaxed font-serif">
              Giấy dó bền dai, mộc mạc, được vẽ tay tranh thủy mặc bằng mực tàu mang theo hơi thở thời gian và tinh thần của nền văn hóa lâu đời.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-paper p-10 rounded-xl shadow-lg border border-brand-brown/5 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center mb-6 text-brand-brown">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-brown mb-4">Tái Sinh Từ Gỗ Cũ</h3>
            <p className="text-brand-ink/70 leading-relaxed font-serif">
              Gỗ pơmu quý hiếm được sống lại từ mái nhà sàn Tây Bắc. Gỗ me tây mộc mạc, vân đẹp, ít nứt nẻ. Cả hai tạo nên chiếc đế vững chãi và thơm dịu nhẹ.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-paper p-10 rounded-xl shadow-lg border border-brand-brown/5 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center mb-6 text-brand-brown">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-brown mb-4">Nhựa PET Hiện Đại</h3>
            <p className="text-brand-ink/70 leading-relaxed font-serif">
              Sự kết hợp giữa truyền thống nương vào hiện đại để đứng vững. Nhựa PET trong suốt, dẻo dai, ổn định nhiệt và có thể tái chế bảo vệ môi trường.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
