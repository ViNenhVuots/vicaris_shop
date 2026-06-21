import Image from "next/image";

export default function ProductStory() {
  const stories = [
    {
      title: "Một sáng tác mới đến từ Quỹ Bảo trợ giáo dục Vicaris",
      desc: "Nối tiếp hành trình thắp sáng tri thức, chiếc đèn thiền ra đời không chỉ để thắp sáng không gian mà còn mang theo sứ mệnh gieo hạt giống thiện lành cho giáo dục vùng cao.",
      img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=70&w=800&auto=format&fit=crop"
    },
    {
      title: "Lên ý tưởng từ một lời động viên của tình huynh đệ",
      desc: "Từ những buổi hàn huyên bên tách trà, ý tưởng về một chiếc đèn mang hơi thở của sự tĩnh tại đã được nhen nhóm. Mực, trà và thi - ba yếu tố thanh tao hội tụ trong một thiết kế duy nhất.",
      img: "https://images.unsplash.com/photo-1512414584143-b9a3e3484950?q=70&w=800&auto=format&fit=crop"
    },
    {
      title: "Hòa hợp chất liệu truyền thống và hiện đại",
      desc: "Sự thô mộc của giấy dó kết hợp với khung gỗ tinh tế tạo nên một khối kiến trúc thu nhỏ. Đèn LED hiện đại được khéo léo giấu đi, nhường chỗ cho vẻ đẹp nguyên sơ tỏa sáng.",
      img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=70&w=800&auto=format&fit=crop"
    },
    {
      title: "Tái sinh từ gỗ pơmu và gỗ me tây",
      desc: "Những thanh gỗ cũ từ mái nhà sàn được thu thập, xử lý qua đôi tay tài hoa của nghệ nhân mộc để tái sinh thành phần đế vững chãi, mang theo cả mùi hương của rừng núi và dấu vết của thời gian.",
      img: "https://images.unsplash.com/photo-1611080780287-c1d42a8b9e66?q=70&w=800&auto=format&fit=crop"
    },
    {
      title: "Ánh sáng nhỏ, ý nghĩa lớn",
      desc: "Khi ánh sáng được thắp lên, xuyên qua lớp giấy dó và những nét mực tàu, không gian bỗng trở nên an trú. Chiếc đèn vỗ về những tâm hồn đang cần một chốn nương tựa bình yên.",
      img: "https://images.unsplash.com/photo-1513258525046-24e64f891b65?q=70&w=800&auto=format&fit=crop"
    },
    {
      title: "Gieo hạt hiểu thương – sáng đời trẻ thơ",
      desc: "100% lợi nhuận từ chiếc đèn này được Vicaris chuyển thành học bổng, sách vở và áo ấm cho trẻ em khó khăn. Ánh sáng thiền trong nhà bạn đang thắp sáng cả tương lai của một đứa trẻ.",
      img: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=70&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-4 block">Câu Chuyện Sản Phẩm</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown leading-tight">
            Thắp sáng không gian bằng vẻ đẹp mộc mạc được tạo nên từ những trái tim phụng sự
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto mt-8 mb-8" />
          <p className="text-lg text-brand-ink/80 font-serif leading-relaxed">
            Đèn thiền Mực, trà và thi là sự kết hợp hài hòa giữa nghệ thuật thủ công truyền thống và tư duy thiết kế hiện đại. Chiếc đèn được tạo nên từ giấy dó thủ công, gỗ tái sinh và những bức họa thủy mặc được vẽ tay bằng mực tàu. Không chỉ là vật dụng chiếu sáng, đây còn là một tác phẩm nghệ thuật mang theo tinh thần thiền và vẻ đẹp văn hóa Việt.
          </p>
        </div>

        <div className="space-y-32">
          {stories.map((story, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={story.img} alt={story.title} fill loading="lazy" className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-brand-yellow font-serif text-xl italic">0{idx + 1}</span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-brand-brown leading-tight">{story.title}</h3>
                <p className="text-lg text-brand-ink/70 font-serif leading-relaxed">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
