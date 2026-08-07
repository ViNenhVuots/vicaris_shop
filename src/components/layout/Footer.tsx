import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-brand-beige py-10 md:py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* About */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg sm:text-xl font-serif font-bold tracking-tighter mb-4 sm:mb-6">ĐÈN THIỀN MỰC, TRÀ VÀ THI</h3>
          <p className="text-sm opacity-80 leading-relaxed font-serif">
            Một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Sản phẩm được thực hiện bởi Quỹ Bảo trợ giáo dục Vicaris nhằm gây quỹ hỗ trợ học sinh, sinh viên khó khăn.
          </p>
          <div className="flex space-x-4 pt-2 sm:pt-4">
            <a 
              href="https://facebook.com/vicaris.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-yellow transition-colors p-1"
              aria-label="Facebook Vicaris"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a 
              href="https://instagram.com/vicaris.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-yellow transition-colors p-1"
              aria-label="Instagram Vicaris"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-base sm:text-lg font-serif font-semibold mb-4 sm:mb-6">Liên Kết Nhanh</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm opacity-80">
            <li><Link href="/products" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Sản phẩm</Link></li>
            <li><Link href="/about-project" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Giới thiệu dự án</Link></li>
            <li><Link href="/brand-story" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Câu chuyện thương hiệu</Link></li>
            <li><Link href="/contact" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-base sm:text-lg font-serif font-semibold mb-4 sm:mb-6">Hỗ Trợ Khách Hàng</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm opacity-80">
            <li><Link href="/shipping" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Chính sách vận chuyển</Link></li>
            <li><Link href="/returns" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Chính sách đổi trả</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Bảo mật thông tin</Link></li>
            <li><Link href="/faq" className="hover:text-brand-yellow transition-colors inline-block py-0.5">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base sm:text-lg font-serif font-semibold mb-4 sm:mb-6">Thông Tin Liên Hệ</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm opacity-80">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>Quỹ Bảo trợ giáo dục Vicaris</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
              <a href="tel:0909991042" className="hover:text-brand-yellow transition-colors">090 999 1042</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0" aria-hidden="true" />
              <a href="mailto:lienhe@vicaris.vn" className="hover:text-brand-yellow transition-colors">lienhe@vicaris.vn</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm opacity-60">
        <p>&copy; {currentYear} Quỹ Bảo trợ giáo dục Vicaris. All rights reserved.</p>
      </div>
    </footer>
  );
}
