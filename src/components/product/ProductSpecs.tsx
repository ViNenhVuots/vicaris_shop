export default function ProductSpecs() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-brown text-brand-beige relative overflow-hidden" aria-label="Thông số kỹ thuật">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-10 mix-blend-overlay pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">Thông số<br/>Kỹ thuật</h2>
            <div className="w-16 h-[2px] bg-brand-yellow mb-4 sm:mb-8" aria-hidden="true" />
            <p className="text-base sm:text-lg text-brand-beige/70 font-serif leading-relaxed">
              Mọi chi tiết đều được chăm chút tỉ mỉ bởi đôi tay của những người thợ lành nghề, mang đến một sản phẩm hoàn thiện vừa an toàn vừa thẩm mỹ.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-10">
            <div className="border-t border-brand-beige/20 pt-4 sm:pt-6">
              <h3 className="text-brand-yellow font-serif font-bold text-lg sm:text-xl mb-3 sm:mb-4">Chất liệu</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-brand-beige/80 font-serif">
                <li>• Gỗ Pơmu (tái sinh từ nhà sàn)</li>
                <li>• Gỗ Me Tây nguyên tấm</li>
                <li>• Giấy Dó truyền thống</li>
                <li>• Tấm bảo vệ PET cao cấp</li>
                <li>• Hạt nút dừa thân thiện</li>
              </ul>
            </div>
            
            <div className="border-t border-brand-beige/20 pt-4 sm:pt-6">
              <h3 className="text-brand-yellow font-serif font-bold text-lg sm:text-xl mb-3 sm:mb-4">Kích thước</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-brand-beige/80 font-serif">
                <li>• Phiên bản Nhỏ: 15 × 15 × 18 cm</li>
                <li>• Phiên bản Lớn: 18 × 18 × 25 cm</li>
                <li>• Trọng lượng: ~1.2kg – 1.8kg</li>
              </ul>
            </div>
            
            <div className="border-t border-brand-beige/20 pt-4 sm:pt-6">
              <h3 className="text-brand-yellow font-serif font-bold text-lg sm:text-xl mb-3 sm:mb-4">Ánh sáng &amp; Phụ kiện</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-brand-beige/80 font-serif">
                <li>• Tùy chọn 1: Nến Tealight sáp ong</li>
                <li>• Tùy chọn 2: LED ấm (Warm White 2700K)</li>
                <li>• Cáp nguồn USB bọc dù siêu bền</li>
                <li>• Công tắc điều khiển tích hợp</li>
              </ul>
            </div>
            
            <div className="border-t border-brand-beige/20 pt-4 sm:pt-6">
              <h3 className="text-brand-yellow font-serif font-bold text-lg sm:text-xl mb-3 sm:mb-4">Nguồn gốc</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-brand-beige/80 font-serif">
                <li>• Chế tác thủ công tại Việt Nam</li>
                <li>• Đơn vị: Quỹ Bảo trợ giáo dục Vicaris</li>
                <li>• Phân phối độc quyền</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
