import Image from "next/image";

const MATERIALS = [
  {
    name: "Giấy Dó",
    traits: ["Bền bỉ", "Thủ công", "Văn hóa Việt"],
    img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mực Tàu",
    traits: ["Thủy mặc", "Nghệ thuật", "Tĩnh tại"],
    img: "https://images.unsplash.com/photo-1583214796336-d44208479e49?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Gỗ Pơmu",
    traits: ["Hương thơm dịu", "Tái sinh", "Nhà sàn"],
    img: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Gỗ Me Tây",
    traits: ["Vân mộc mạc", "Chắc chắn", "Tự nhiên"],
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
  },
] as const;

export default function ProductMaterials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white" aria-label="Nguyên liệu sản phẩm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm mb-3 sm:mb-4 block">Nguyên Bản</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown">Hồn cốt từ thiên nhiên</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {MATERIALS.map((mat) => (
            <div key={mat.name} className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              <Image 
                src={mat.img} 
                alt={`Chất liệu ${mat.name}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/30 to-transparent transition-opacity duration-500" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-beige mb-2 sm:mb-4 drop-shadow-md">{mat.name}</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {mat.traits.map((trait) => (
                    <li key={trait} className="text-brand-yellow font-serif text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
