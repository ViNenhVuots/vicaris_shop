import type { Metadata } from "next";
import AboutProjectClient from "./AboutProjectClient";

export const metadata: Metadata = {
  title: "Giới thiệu dự án",
  description: "Tìm hiểu về dự án Đèn thiền Mực, trà và thi từ Quỹ Bảo trợ giáo dục Vicaris – gây quỹ hỗ trợ học sinh, sinh viên khó khăn.",
  openGraph: {
    title: "Giới thiệu dự án | Đèn thiền Mực, trà và thi",
    description: "Tìm hiểu về dự án Đèn thiền Mực, trà và thi từ Quỹ Bảo trợ giáo dục Vicaris.",
  },
};

export default function AboutProjectPage() {
  return <AboutProjectClient />;
}
