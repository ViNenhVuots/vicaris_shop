import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Materials from "@/components/home/Materials";
import Charity from "@/components/home/Charity";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-brand-beige">
      <Hero />
      <Story />
      <Materials />
      
      {/* Category Highlights (Ánh sáng chữa lành) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Ánh sáng chữa lành</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">
              An toàn và đa dạng lựa chọn
            </h2>
            <div className="w-16 h-[2px] bg-brand-yellow mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518384401463-d38761b3fee7?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end text-white p-10">
                <h3 className="text-3xl font-serif font-bold mb-4 drop-shadow-md">Nến Tealight Sáp Ong</h3>
                <p className="opacity-90 max-w-sm font-serif text-lg leading-relaxed drop-shadow-sm">
                  Sử dụng nến bơ sáp ong cao cấp cháy trong 4h, mang lại không gian thư giãn với độ an toàn tuyệt đối, hoàn hảo cho việc thưởng trà và thờ phụng.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end text-white p-10">
                <h3 className="text-3xl font-serif font-bold mb-4 drop-shadow-md">Đèn LED Ánh Vàng Ấm</h3>
                <p className="opacity-90 max-w-sm font-serif text-lg leading-relaxed drop-shadow-sm">
                  Tích hợp đèn LED với cổng USB tiện dụng và có công tắc. Ánh sáng dịu nhẹ dễ dàng di chuyển, phù hợp cho bàn làm việc và không gian nghỉ ngơi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <Charity />
    </div>
  );
}
