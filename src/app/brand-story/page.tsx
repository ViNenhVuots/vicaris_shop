import type { Metadata } from "next";
import BrandStoryClient from "./BrandStoryClient";

export const metadata: Metadata = {
  title: "Câu chuyện thương hiệu",
  description: "Từ tình huynh đệ đến ánh sáng chữa lành – Câu chuyện ra đời của đèn thiền Mực, trà và thi.",
  openGraph: {
    title: "Câu chuyện thương hiệu | Đèn thiền Mực, trà và thi",
    description: "Từ tình huynh đệ đến ánh sáng chữa lành – Câu chuyện ra đời của đèn thiền Mực, trà và thi.",
  },
};

export default function BrandStoryPage() {
  return <BrandStoryClient />;
}
