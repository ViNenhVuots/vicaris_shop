"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { ProductData } from "@/data/products";
import ProductWoodBoardStory from "@/components/product/ProductWoodBoardStory";

import img1 from "../../../public/images/products/story/anh1.gif";
import img2 from "../../../public/images/products/story/anh2.jpg";
import img3 from "../../../public/images/products/story/anh3.jpg";
import img4 from "../../../public/images/products/story/anh4.jpg";
import img5 from "../../../public/images/products/story/anh5.jpg";
import img6 from "../../../public/images/products/story/anh6.jpg";
import img7 from "../../../public/images/products/story/anh7.jpg";
import img8 from "../../../public/images/products/story/anh8.jpg";
import img9 from "../../../public/images/products/story/anh9.jpg";
import img10 from "../../../public/images/products/story/anh10.jpg";
import img11 from "../../../public/images/products/story/phu-kien-usb.jpg";
import img12 from "../../../public/images/products/story/phu-kien-nen.jpg";
import img13 from "../../../public/images/products/story/bang-gia-den-thap-nen.jpg";

interface StoryItem {
  title?: string;
  desc?: string;
  img?: typeof img1;
  isHighlight?: boolean;
  isPoem?: boolean;
  isFullWidthImage?: boolean;
  isFullWidthImages?: boolean;
  images?: (typeof img1)[];
  isTwoImages?: boolean;
  imgLeft?: typeof img1;
  imgRight?: typeof img1;
}

const STORIES: StoryItem[] = [
  {
    title: "Thắp sáng không gian bằng vẻ đẹp mộc mạc được tạo nên từ những trái tim phụng sự",
    desc: "Thưởng thức sự mộc mạc và thi vị, hoàn hảo cho cả không gian thưởng trà, ngủ nghỉ, bàn làm việc và bàn thờ. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, đèn thiền Mực, trà và thi chính là một món quà cao cấp và ý nghĩa dành tặng những ai yêu thích sự lắng sâu và xúc chạm với di sản văn hóa Việt.",
    img: img1,
  },
  {
    title: "",
    desc: "Một sáng tác mới đến từ Quỹ Bảo trợ giáo dục Vicaris.",
    img: img2,
    isHighlight: true,
  },
  {
    title: "Lên ý tưởng từ một lời động viên của tình huynh đệ",
    desc: "Thầy Tuệ Đạt - điều hành Quỹ nhận được lời động viên từ Sư anh Mãn Pháp về việc sáng tác đèn thiền phát hành gây quỹ để có kinh phí giúp đỡ học sinh, sinh viên khó khăn có thêm cơ hội đến trường. Sau 3 tháng lặng lẽ lên ý tưởng, thử nghiệm và điều chỉnh, khi hoàn thiện, chiếc đèn mang theo sự trọn vẹn, tinh tế và ấm áp nhất khi đến với người hữu duyên.",
    img: img3,
  },
  {
    title: "Hòa hợp chất liệu truyền thống và hiện đại",
    desc: "Thân đèn được khéo léo kết hợp giữa 2 vật liệu là giấy dó và nhựa PET. Sự kết hợp giữa truyền thống nương vào hiện đại để đứng vững. Giấy dó bền dai, mộc mạc, được vẽ tay tranh thủy mặc bằng mực tàu mang theo hơi thở thời gian và tinh thần của nền văn hóa lâu đời; nhựa PET trong suốt, dẻo dai, có khả năng chịu lực, ổn định nhiệt và có thể tái chế.",
    img: img4,
  },
  {
    title: "Tái sinh",
    desc: "Đế đèn được chọn từ gỗ pơmu hoặc gỗ me tây. Gỗ pơmu - một loại gỗ quý được sống lại từ những tấm gỗ trên mái nhà sàn đặc trưng của đồng bào vùng cao phía Bắc, mang hương thơm dịu nhẹ, ấm áp và thanh khiết, mà từ lâu đã là một phần của di sản văn hóa. Gỗ me tây - loại cây du nhập vào Việt Nam trong thời kỳ thuộc địa, khoảng cuối thế kỷ 19 đến đầu thế kỷ 20, gỗ chắc, vân đẹp, ít bị nứt nẻ và mộc mạc.",
    img: img5,
  },
  {
    title: "Đèn xinh trao gửi nụ cười / Gieo hạt hiểu thương, sáng đời trẻ thơ",
    desc: "Không chỉ là một vật phẩm để thắp sáng, đèn thiền còn là một góc nhỏ nghệ thuật cho không gian sống. Chiếc đèn nhỏ xinh mang ánh sáng dịu dàng soi chiếu không gian và góp phần thắp sáng đời trẻ thơ.",
    img: img6,
    isPoem: true,
  },
  {
    title: "Tình thương lan tỏa",
    desc: "Mỗi chiếc đèn được biểu hiện không chỉ đến từ sự khéo léo bởi đôi tay của những người lành nghề Mộc - Giấy - Họa, mà còn từ những trái tim phụng sự đã lân mẫn ghép nối những mảnh tách biệt thành một câu chuyện tử tế, mang theo ước nguyện gieo những hạt giống lành, nuôi dưỡng học sinh, sinh viên yếu thế của các thành viên Quỹ Bảo trợ giáo dục Vicaris. Trân quý và biết ơn!",
    img: img7,
  },
  {
    title: "An toàn và đa dạng lựa chọn",
    desc: "Nến tealight sáp ong cao cấp với độ an toàn tuyệt đối. Đèn LED ánh sáng vàng ấm với cổng USB tiện dụng và dễ di chuyển. Với 2 loại kích thước: Nhỏ (15x15x18cm) và Lớn (18x18x25cm).",
    img: img8,
  },
  {
    title: "Đèn theo ý tưởng của bạn?",
    desc: "Họa tiết tranh vẽ: Đá và hoa + chữ Tâm An, Hoa sen thủy mặc, Hoa sen rực rỡ, Thủy mặc tre trúc, Hoa sen thủy mặc + chữ Nẻo về sen nở. Hoặc đặt vẽ theo ý tưởng của riêng bạn.",
    img: img9,
  },
  {
    isTwoImages: true,
    imgLeft: img11,
    imgRight: img12,
  },
  {
    isFullWidthImages: true,
    images: [img10, img13],
  },
];

export default function ProductStory({ product }: { product?: ProductData }) {
  if (product?.configurator === "wood-board") {
    return <ProductWoodBoardStory />;
  }
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF9F5]" aria-label="Câu chuyện sản phẩm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-xs sm:text-sm mb-3 sm:mb-4 block">Câu Chuyện Sản Phẩm</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown leading-tight">
            Đèn thiền Mực, trà và thi
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8" aria-hidden="true" />
        </div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {STORIES.map((story, idx) => {
            if (story.isHighlight) {
              return (
                <div key={idx} className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center w-full min-h-[200px] sm:min-h-[300px]">
                  <Image 
                    src={story.img!} 
                    alt="Sáng tác mới từ Vicaris" 
                    width={1600}
                    height={900}
                    quality={70}
                    className="w-full h-auto object-cover"
                    sizes="100vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 md:p-8 max-w-4xl mx-auto text-center">
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                      {story.desc}
                    </h3>
                  </div>
                </div>
              );
            }

            if (story.isFullWidthImage) {
              return (
                <div key={idx} className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl flex items-center justify-center w-full">
                  <Image 
                    src={story.img!} 
                    alt="Bảng giá sản phẩm" 
                    quality={70}
                    className="w-full h-auto"
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
              );
            }

            if (story.isFullWidthImages && story.images) {
              return (
                <div key={idx} className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
                  {story.images.map((image, i) => (
                    <div key={i} className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl flex items-center justify-center w-full">
                      <Image 
                        src={image} 
                        alt={`Bảng giá sản phẩm ${i + 1}`} 
                        quality={70}
                        className="w-full h-auto"
                        sizes="100vw"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            if (story.isTwoImages) {
              return (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl aspect-square bg-[#e8e4db]">
                    <Image 
                      src={story.imgLeft!} 
                      alt="Phụ kiện đèn LED USB" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl aspect-square bg-[#e8e4db]">
                    <Image 
                      src={story.imgRight!} 
                      alt="Phụ kiện nến tealight sáp ong" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-[#e8e4db] min-h-[200px] flex items-center justify-center">
                  <Image 
                    src={story.img!} 
                    alt={story.title || 'Hình ảnh sản phẩm'} 
                    quality={70}
                    className="w-full h-auto hover:scale-105 transition-transform duration-700 relative z-10" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                  {story.isPoem && (
                    <Quote className="text-brand-yellow w-10 h-10 sm:w-12 sm:h-12 opacity-50 mb-1 sm:mb-2" aria-hidden="true" />
                  )}
                  {story.title && (
                    <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-brown leading-tight ${story.isPoem ? 'italic text-brand-terracotta' : ''}`}>
                      {story.title}
                    </h3>
                  )}
                  <p className="text-base sm:text-lg text-brand-ink/80 font-serif leading-relaxed text-justify">
                    {story.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
