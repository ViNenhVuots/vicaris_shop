import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Materials from "@/components/home/Materials";
import Charity from "@/components/home/Charity";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { getFeaturedProducts } from "@/services/productService";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col w-full bg-brand-beige">
      <Hero />
      <Story />
      <Materials />
      
      {/* Category Highlights (Ánh sáng chữa lành) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm">Ánh sáng chữa lành</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mt-3 sm:mt-4 mb-4 sm:mb-6">
              An toàn và đa dạng lựa chọn
            </h2>
            <div className="w-16 h-[2px] bg-brand-yellow mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518384401463-d38761b3fee7?q=80&w=1000&auto=format&fit=crop')" }}
                role="img"
                aria-label="Nến Tealight Sáp Ong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col justify-end text-white p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-4 drop-shadow-md">Nến Tealight Sáp Ong</h3>
                <p className="opacity-90 max-w-sm font-serif text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm line-clamp-3 sm:line-clamp-none">
                  Sử dụng nến bơ sáp ong cao cấp cháy trong 4h, mang lại không gian thư giãn với độ an toàn tuyệt đối, hoàn hảo cho việc thưởng trà và thờ phụng.
                </p>
              </div>
            </div>
            
            <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1000&auto=format&fit=crop')" }}
                role="img"
                aria-label="Đèn LED Ánh Vàng Ấm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col justify-end text-white p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-4 drop-shadow-md">Đèn LED Ánh Vàng Ấm</h3>
                <p className="opacity-90 max-w-sm font-serif text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm line-clamp-3 sm:line-clamp-none">
                  Tích hợp đèn LED với cổng USB tiện dụng và có công tắc. Ánh sáng dịu nhẹ dễ dàng di chuyển, phù hợp cho bàn làm việc và không gian nghỉ ngơi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} />
      <Charity />
    </div>
  );
}
