import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description: "Giải đáp các câu hỏi thường gặp về đèn thiền Mực, trà và thi – chất liệu, vận chuyển, thanh toán và bảo hành.",
  openGraph: {
    title: "Câu hỏi thường gặp | Đèn thiền Mực, trà và thi",
    description: "Giải đáp các câu hỏi thường gặp về đèn thiền Mực, trà và thi.",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
