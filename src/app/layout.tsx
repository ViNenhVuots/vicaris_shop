import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://muctravatri.vn";

export const metadata: Metadata = {
  title: {
    default: "Đèn thiền Mực, trà và thi | Ánh sáng chữa lành",
    template: "%s | Đèn thiền Mực, trà và thi",
  },
  description: "Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Sản phẩm được thực hiện bởi Quỹ Bảo trợ giáo dục Vicaris.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Đèn thiền Mực, trà và thi",
    title: "Đèn thiền Mực, trà và thi | Ánh sáng chữa lành",
    description: "Đèn thiền thủ công từ giấy dó, gỗ pơmu và mực tàu – Gây quỹ giáo dục từ Quỹ Vicaris.",
    images: [{ url: "/images/products/p1.jpg", width: 1200, height: 630, alt: "Đèn thiền Mực, trà và thi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đèn thiền Mực, trà và thi | Ánh sáng chữa lành",
    description: "Đèn thiền thủ công từ giấy dó, gỗ pơmu và mực tàu – Gây quỹ giáo dục từ Quỹ Vicaris.",
    images: ["/images/products/p1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-beige text-brand-ink min-h-screen flex flex-col`}>
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-link">
          Bỏ qua đến nội dung chính
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
