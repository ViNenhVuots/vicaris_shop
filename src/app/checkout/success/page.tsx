import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-brand-paper min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-lg text-center bg-brand-beige p-10 rounded-xl shadow-lg border border-brand-brown/10">
        <CheckCircle2 size={80} className="text-brand-yellow mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-brand-brown mb-4">Trân Quý Và Biết Ơn!</h1>
        <p className="text-brand-ink/80 mb-8 leading-relaxed font-serif">
          Cảm ơn bạn đã mua sắm tại Đèn thiền Mực, trà và thi. Mỗi đơn hàng của bạn đã góp phần gieo một hạt giống lành, nuôi dưỡng học sinh sinh viên khó khăn từ Quỹ Bảo trợ giáo dục Vicaris.
          Chúng tôi sẽ sớm liên hệ để giao hàng cho bạn.
        </p>
        <Link 
          href="/products"
          className="inline-block bg-brand-brown hover:bg-brand-ink text-brand-yellow font-medium py-3 px-8 rounded transition-colors tracking-wider"
        >
          TIẾP TỤC KHÁM PHÁ
        </Link>
      </div>
    </div>
  );
}
