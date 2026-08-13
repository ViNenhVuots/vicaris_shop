import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Bảo mật thông tin | Đèn thiền Mực, trà và thi",
  description: "Chính sách bảo mật thông tin khách hàng của Đèn thiền Mực, trà và thi.",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Thông tin chúng tôi thu thập",
      content: "Chúng tôi chỉ thu thập những thông tin cần thiết để xử lý đơn hàng và cung cấp dịch vụ tốt nhất, bao gồm: họ tên, email, số điện thoại, địa chỉ giao hàng và ghi chú đơn hàng.",
    },
    {
      title: "2. Mục đích sử dụng thông tin",
      content: "Thông tin của bạn được sử dụng để: xử lý và giao đơn hàng, liên hệ xác nhận đơn hàng, hỗ trợ khách hàng khi cần, gửi thông báo về đơn hàng và cải thiện trải nghiệm mua sắm.",
    },
    {
      title: "3. Bảo vệ thông tin",
      content: "Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng. Mọi dữ liệu được mã hóa và lưu trữ an toàn. Chúng tôi không bán, trao đổi hay chia sẻ thông tin cá nhân cho bên thứ ba ngoài mục đích vận chuyển đơn hàng.",
    },
    {
      title: "4. Quyền của khách hàng",
      content: "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân bất kỳ lúc nào bằng cách liên hệ qua email gieohathieuthuong@gmail.com hoặc hotline 036 381 6213.",
    },
    {
      title: "5. Cookie",
      content: "Website sử dụng cookie để lưu trữ giỏ hàng và cải thiện trải nghiệm người dùng. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể bị ảnh hưởng.",
    },
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Hỗ trợ</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">Bảo mật thông tin</h1>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto mb-6" />
          <div className="flex items-center justify-center gap-2 text-brand-ink/60 font-serif">
            <ShieldCheck size={20} className="text-brand-yellow" />
            <span>Cam kết bảo mật 100% thông tin khách hàng</span>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-brand-brown/5">
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">{section.title}</h2>
              <p className="text-brand-ink/80 font-serif leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
