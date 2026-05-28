import { Truck, Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Chính sách vận chuyển | Đèn thiền Mực, trà và thi",
  description: "Tìm hiểu chính sách vận chuyển của Đèn thiền Mực, trà và thi.",
};

export default function ShippingPage() {
  const policies = [
    {
      icon: Truck,
      title: "Phí vận chuyển",
      items: [
        "Miễn phí vận chuyển cho đơn hàng từ 699.000đ trở lên.",
        "Đơn hàng dưới 699.000đ: phí vận chuyển 30.000đ toàn quốc.",
        "Giao hàng qua các đơn vị: Giao Hàng Nhanh, Viettel Post.",
      ],
    },
    {
      icon: Clock,
      title: "Thời gian giao hàng",
      items: [
        "Nội thành TP.HCM, Hà Nội: 1–2 ngày làm việc.",
        "Các tỉnh thành khác: 3–5 ngày làm việc.",
        "Đơn đặt hàng trước 14:00 sẽ được xử lý trong ngày.",
      ],
    },
    {
      icon: MapPin,
      title: "Khu vực giao hàng",
      items: [
        "Giao hàng toàn quốc 63 tỉnh thành.",
        "Hỗ trợ giao hàng quốc tế theo yêu cầu (liên hệ trực tiếp).",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Đóng gói bảo vệ",
      items: [
        "Sản phẩm được đóng gói cẩn thận bằng hộp carton chuyên dụng.",
        "Lớp xốp chống sốc bảo vệ sản phẩm trong quá trình vận chuyển.",
        "Kèm hướng dẫn sử dụng và bảo quản sản phẩm.",
      ],
    },
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Hỗ trợ</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">Chính sách vận chuyển</h1>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto" />
        </div>

        <div className="space-y-8">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-brand-brown/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-brown/10 rounded-full flex items-center justify-center">
                  <policy.icon size={22} className="text-brand-yellow" />
                </div>
                <h2 className="text-xl font-serif font-bold text-brand-brown">{policy.title}</h2>
              </div>
              <ul className="space-y-3 ml-16">
                {policy.items.map((item, i) => (
                  <li key={i} className="text-brand-ink/80 font-serif flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
