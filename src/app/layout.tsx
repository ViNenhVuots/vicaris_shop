import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Đèn thiền Mực, trà và thi | Ánh sáng chữa lành",
  description: "Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-beige text-brand-ink min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
