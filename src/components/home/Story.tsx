"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="cau-chuyen" className="py-24 bg-brand-paper">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Câu chuyện hình thành</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 leading-tight">
                Lên ý tưởng từ một lời động viên của tình huynh đệ
              </h2>
            </div>
            <div className="w-16 h-[2px] bg-brand-yellow" />
            <p className="text-brand-ink/80 text-lg leading-relaxed font-serif">
              Thầy Tuệ Đạt - điều hành Quỹ nhận được lời động viên từ Sư anh Mãn Pháp về việc sáng tác đèn thiền phát hành gây quỹ để có kinh phí giúp đỡ học sinh, sinh viên khó khăn có thêm cơ hội đến trường. 
            </p>
            <p className="text-brand-ink/80 text-lg leading-relaxed font-serif">
              Sau 3 tháng lặng lẽ lên ý tưởng, thử nghiệm và điều chỉnh, khi hoàn thiện, chiếc đèn mang theo sự trọn vẹn, tinh tế và ấm áp nhất khi đến với người hữu duyên.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
