"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const IMG = "/images/products/bang-go-thu-phap";
const HOTLINE = "0363816213";
const HOTLINE_LABEL = "0363.816.213";

const CUSTOM_SAMPLES = [
  { src: `${IMG}/custom-lien-doi.jpg`, alt: "Cặp liễn đối thư pháp theo yêu cầu" },
  { src: `${IMG}/custom-an-tam.jpg`, alt: "Mẫu thiết kế An Tâm Dịch Viện" },
  { src: `${IMG}/custom-may-khong-chan.jpg`, alt: "Mẫu thiết kế Mây không chân" },
  { src: `${IMG}/custom-pas-garden.jpg`, alt: "Mẫu logo Pa's Garden" },
  { src: `${IMG}/custom-an-cung-hoa.jpg`, alt: "Mẫu An cùng hoa" },
  { src: `${IMG}/custom-ink-sa.jpg`, alt: "Mẫu logo và biểu tượng theo yêu cầu" },
  { src: `${IMG}/custom-cong-duc-dien.jpg`, alt: "Mẫu Công Đức Điện" },
  { src: `${IMG}/custom-hi-lac.jpg`, alt: "Mẫu Hỉ Lạc" },
  { src: `${IMG}/custom-xu-so.jpg`, alt: "Mẫu Xứ sở của giây phút hiện tại" },
  { src: `${IMG}/custom-binh-yen.jpg`, alt: "Mẫu Bình yên trong tách trà" },
  { src: `${IMG}/17-hien-phap-lac-tru.jpg`, alt: "Mẫu Hiện pháp lạc trú" },
];

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-[#e8e4db] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={70}
        className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />
    </div>
  );
}

export default function ProductWoodBoardStory() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF9F5]" aria-label="Câu chuyện sản phẩm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm mb-3 sm:mb-4 block">
            Câu Chuyện Sản Phẩm
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown leading-tight">
            Bảng gỗ pơmu – điêu khắc chữ thư pháp
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8" aria-hidden="true" />
        </div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24">
            <Photo
              src={`${IMG}/15-di-san.jpg`}
              alt="Gỗ pơmu tái sinh từ mái nhà sàn"
              className="w-full md:w-1/2 aspect-[4/5]"
            />
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-brand-ink/80 font-serif leading-relaxed text-justify">
                Gỗ pơmu – một loại gỗ quý được sống lại từ những tấm gỗ trên mái nhà sàn đặc trưng của đồng bào miền núi phía Bắc, mang hương thơm dịu nhẹ, ấm áp và thanh khiết, mà từ lâu đã là một phần của di sản văn hóa.
              </p>
              <p className="text-base sm:text-lg text-brand-ink/80 font-serif leading-relaxed text-justify">
                Trên nền gỗ mộc mạc ấy, những nét thư pháp được điêu khắc thủ công, tạo nên một điểm nhấn vừa nghệ thuật, vừa an yên cho không gian sống.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-brown text-center mb-8 sm:mb-12">
              Hình ảnh sản phẩm
            </h3>
            <Photo
              src={`${IMG}/01-tong-the.jpg`}
              alt="Ảnh tổng thể – các mẫu bảng gỗ thư pháp"
              className="w-full aspect-[16/10] max-w-5xl mx-auto"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
              <div>
                <Photo src={`${IMG}/04-ngoi-yen-thay-ro.jpg`} alt="Mẫu bảng dọc" className="aspect-[3/4]" />
                <p className="mt-3 text-center font-serif text-brand-brown text-sm sm:text-base">Mẫu bảng dọc</p>
              </div>
              <div>
                <Photo src={`${IMG}/08-den-di-thong-dong-vang.jpg`} alt="Mẫu bảng ngang" className="aspect-[4/3]" />
                <p className="mt-3 text-center font-serif text-brand-brown text-sm sm:text-base">Mẫu bảng ngang</p>
              </div>
              <div>
                <Photo src={`${IMG}/02-uong-tra-di.jpg`} alt="Mẫu chữ màu vàng" className="aspect-[3/4]" />
                <p className="mt-3 text-center font-serif text-brand-brown text-sm sm:text-base">Mẫu chữ màu vàng</p>
              </div>
              <div>
                <Photo src={`${IMG}/09-den-di-thong-dong-den.jpg`} alt="Mẫu chữ màu đen" className="aspect-[4/3]" />
                <p className="mt-3 text-center font-serif text-brand-brown text-sm sm:text-base">Mẫu chữ màu đen</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24">
            <Photo
              src={`${IMG}/16-di-san-2.jpg`}
              alt="Đặt bảng gỗ pơmu theo chữ của bạn"
              className="w-full md:w-1/2 aspect-[4/5]"
            />
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-brown leading-tight">
                Thiết kế theo yêu cầu riêng
              </h3>
              <p className="text-base sm:text-lg text-brand-ink/80 font-serif leading-relaxed">
                Ngoài các mẫu có sẵn, sản phẩm nhận thiết kế theo yêu cầu riêng về:
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-brand-ink/80 font-serif list-disc pl-5">
                <li>Nội dung / câu chữ</li>
                <li>Logo</li>
                <li>Nét chữ thư pháp</li>
                <li>Màu chữ</li>
                <li>Kích thước</li>
                <li>Bố cục phù hợp với không gian và dấu ấn cá nhân</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-brown text-center mb-8 sm:mb-12">
              Các mẫu thiết kế theo yêu cầu riêng
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CUSTOM_SAMPLES.map((item) => (
                <Photo key={item.src} src={item.src} alt={item.alt} className="aspect-[4/3]" />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24">
            <Photo
              src={`${IMG}/06-an-tru-thanh-thoi.jpg`}
              alt="Bảng gỗ thư pháp làm quà tặng an yên"
              className="w-full md:w-1/2 aspect-[3/4]"
            />
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-brown leading-tight">
                Một món quà mang theo sự an yên
              </h3>
              <p className="text-base sm:text-lg text-brand-ink/80 font-serif leading-relaxed text-justify">
                Không chỉ là một vật phẩm trang trí, bảng gỗ pơmu điêu khắc thư pháp kết hợp chất liệu mộc và nét chữ thủ công để tạo nên một điểm nhấn có chiều sâu, phù hợp với không gian sống, phòng trà, nơi làm việc, không gian thiền hoặc làm quà tặng.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-brand-brown/10 shadow-sm px-6 py-10 sm:px-10 sm:py-14">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-brown mb-4">
              Đặt hàng / Tư vấn
            </h3>
            <p className="text-brand-ink/80 font-serif mb-6 leading-relaxed">
              Liên hệ hotline: {HOTLINE_LABEL} (Ms. Hoài)
              <br />
              Thiết kế theo yêu cầu về nội dung, logo, nét chữ, màu chữ và kích thước.
            </p>
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#1F2937] hover:bg-black text-white font-medium transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              Gọi {HOTLINE_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
