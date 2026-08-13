import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ với Quỹ Bảo trợ giáo dục Vicaris – Đèn thiền Mực, trà và thi. Hotline: 036 381 6213.",
  openGraph: {
    title: "Liên hệ | Đèn thiền Mực, trà và thi",
    description: "Liên hệ với Quỹ Bảo trợ giáo dục Vicaris. Hotline: 036 381 6213.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
