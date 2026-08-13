import { RotateCcw, CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  title: "Chính sách đổi trả | Đèn thiền Mực, trà và thi",
  description: "Tìm hiểu chính sách đổi trả sản phẩm của Đèn thiền Mực, trà và thi.",
};

export default function ReturnsPage() {
  return (
    <div className="bg-brand-paper min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm">Hỗ trợ</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mt-4 mb-6">Chính sách đổi trả</h1>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto" />
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-brown/5">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle2 size={24} className="text-green-600" />
              <h2 className="text-xl font-serif font-bold text-brand-brown">Trường hợp được đổi trả</h2>
            </div>
            <ul className="space-y-3 ml-10 text-brand-ink/80 font-serif">
              <li>• Sản phẩm bị lỗi do nhà sản xuất (vỡ, nứt, hỏng hóc).</li>
              <li>• Sản phẩm giao sai mẫu, sai kích thước, sai họa tiết so với đơn hàng.</li>
              <li>• Sản phẩm bị hư hại trong quá trình vận chuyển.</li>
              <li>• Yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-brown/5">
            <div className="flex items-center gap-4 mb-4">
              <XCircle size={24} className="text-red-500" />
              <h2 className="text-xl font-serif font-bold text-brand-brown">Trường hợp không được đổi trả</h2>
            </div>
            <ul className="space-y-3 ml-10 text-brand-ink/80 font-serif">
              <li>• Sản phẩm đã qua sử dụng, có dấu hiệu hao mòn tự nhiên.</li>
              <li>• Sản phẩm bị hư hỏng do lỗi người dùng.</li>
              <li>• Yêu cầu đổi trả sau 7 ngày kể từ ngày nhận hàng.</li>
              <li>• Không có hóa đơn hoặc chứng từ mua hàng.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-brown/5">
            <div className="flex items-center gap-4 mb-4">
              <RotateCcw size={24} className="text-brand-yellow" />
              <h2 className="text-xl font-serif font-bold text-brand-brown">Quy trình đổi trả</h2>
            </div>
            <ol className="space-y-3 ml-10 text-brand-ink/80 font-serif list-decimal list-inside">
              <li>Liên hệ hotline 036 381 6213 hoặc email gieohathieuthuong@gmail.com.</li>
              <li>Cung cấp mã đơn hàng, hình ảnh sản phẩm lỗi.</li>
              <li>Nhận xác nhận đổi trả từ bộ phận chăm sóc khách hàng.</li>
              <li>Gửi sản phẩm về địa chỉ được cung cấp (miễn phí ship hoàn).</li>
              <li>Nhận sản phẩm mới hoặc hoàn tiền trong 5–7 ngày làm việc.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
