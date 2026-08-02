"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function ProductStory() {
  const stories = [
    {
      title: "Thắp sáng không gian bằng vẻ đẹp mộc mạc được tạo nên từ những trái tim phụng sự",
      desc: "Thưởng thức sự mộc mạc và thi vị, hoàn hảo cho cả không gian thưởng trà, ngủ nghỉ, bàn làm việc và bàn thờ. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, đèn thiền Mực, trà và thi chính là một món quà cao cấp và ý nghĩa dành tặng những ai yêu thích sự lắng sâu và xúc chạm với di sản văn hóa Việt.",
      img: "/images/products/story/anh1.gif"
    },
    {
      title: "",
      desc: "Một sáng tác mới đến từ Quỹ Bảo trợ giáo dục Vicaris.",
      img: "/images/products/story/anh2.jpg",
      isHighlight: true
    },
    {
      title: "Lên ý tưởng từ một lời động viên của tình huynh đệ",
      desc: "Thầy Tuệ Đạt - điều hành Quỹ nhận được lời động viên từ Sư anh Mãn Pháp về việc sáng tác đèn thiền phát hành gây quỹ để có kinh phí giúp đỡ học sinh, sinh viên khó khăn có thêm cơ hội đến trường. Sau 3 tháng lặng lẽ lên ý tưởng, thử nghiệm và điều chỉnh, khi hoàn thiện, chiếc đèn mang theo sự trọn vẹn, tinh tế và ấm áp nhất khi đến với người hữu duyên.",
      img: "/images/products/story/anh3.jpg"
    },
    {
      title: "Hòa hợp chất liệu truyền thống và hiện đại",
      desc: "Thân đèn được khéo léo kết hợp giữa 2 vật liệu là giấy dó và nhựa PET. Sự kết hợp giữa truyền thống nương vào hiện đại để đứng vững. Giấy dó bền dai, mộc mạc, được vẽ tay tranh thủy mặc bằng mực tàu mang theo hơi thở thời gian và tinh thần của nền văn hóa lâu đời; nhựa PET trong suốt, dẻo dai, có khả năng chịu lực, ổn định nhiệt và có thể tái chế.",
      img: "/images/products/story/anh4.jpg"
    },
    {
      title: "Tái sinh",
      desc: "Đế đèn được chọn từ gỗ pơmu hoặc gỗ me tây. Gỗ pơmu - một loại gỗ quý được sống lại từ những tấm gỗ trên mái nhà sàn đặc trưng của đồng bào vùng cao phía Bắc, mang hương thơm dịu nhẹ, ấm áp và thanh khiết, mà từ lâu đã là một phần của di sản văn hóa. Gỗ me tây - loại cây du nhập vào Việt Nam trong thời kỳ thuộc địa, khoảng cuối thế kỷ 19 đến đầu thế kỷ 20, gỗ chắc, vân đẹp, ít bị nứt nẻ và mộc mạc.",
      img: "/images/products/story/anh5.jpg"
    },
    {
      title: "Đèn xinh trao gửi nụ cười / Gieo hạt hiểu thương, sáng đời trẻ thơ",
      desc: "Không chỉ là một vật phẩm để thắp sáng, đèn thiền còn là một góc nhỏ nghệ thuật cho không gian sống. Chiếc đèn nhỏ xinh mang ánh sáng dịu dàng soi chiếu không gian và góp phần thắp sáng đời trẻ thơ.",
      img: "/images/products/story/anh6.jpg",
      isPoem: true
    },
    {
      title: "Tình thương lan tỏa",
      desc: "Mỗi chiếc đèn được biểu hiện không chỉ đến từ sự khéo léo bởi đôi tay của những người lành nghề Mộc - Giấy - Họa, mà còn từ những trái tim phụng sự đã lân mẫn ghép nối những mảnh tách biệt thành một câu chuyện tử tế, mang theo ước nguyện gieo những hạt giống lành, nuôi dưỡng học sinh, sinh viên yếu thế của các thành viên Quỹ Bảo trợ giáo dục Vicaris. Trân quý và biết ơn!",
      img: "/images/products/story/anh7.jpg"
    },
    {
      title: "An toàn và đa dạng lựa chọn",
      desc: "Nến tealight sáp ong cao cấp với độ an toàn tuyệt đối. Đèn LED ánh sáng vàng ấm với cổng USB tiện dụng và dễ di chuyển. Với 2 loại kích thước: Nhỏ (15x15x18cm) và Lớn (18x18x25cm).",
      img: "/images/products/story/anh8.jpg"
    },
    {
      title: "Mẫu có sẵn hoặc ý tưởng của bạn?",
      desc: "Họa tiết tranh vẽ: Đá và hoa + chữ Tâm An, Hoa sen thủy mặc, Thủy mặc tre trúc, Hoa sen thủy mặc + chữ Nẻo về sen nở. Hoặc đặt vẽ chiếc đèn theo ý tưởng của riêng bạn?",
      img: "/images/products/story/anh9.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-4 block">Câu Chuyện Sản Phẩm</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown leading-tight">
            Đèn thiền Mực, trà và thi
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto mt-8 mb-8" />
        </div>

        <div className="space-y-32">
          {stories.map((story, idx) => {
            if (story.isHighlight) {
              return (
                <div key={idx} className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center w-full min-h-[300px]">
                  <Image 
                    src={story.img} 
                    alt="Highlight" 
                    width={1600}
                    height={900}
                    className="w-full h-auto object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-8 max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                      {story.desc}
                    </h3>
                  </div>
                </div>
              )
            }

            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl bg-[#e8e4db] min-h-[200px] flex items-center justify-center">
                  <Image 
                    src={story.img} 
                    alt={story.title || 'Hình ảnh sản phẩm'} 
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 relative z-10" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  {story.isPoem && (
                    <Quote className="text-brand-yellow w-12 h-12 opacity-50 mb-2" />
                  )}
                  {story.title && (
                    <h3 className={`text-2xl md:text-4xl font-serif font-bold text-brand-brown leading-tight ${story.isPoem ? 'italic text-brand-terracotta' : ''}`}>
                      {story.title}
                    </h3>
                  )}
                  <p className="text-lg text-brand-ink/80 font-serif leading-relaxed text-justify">
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
