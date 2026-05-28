import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Search, SlidersHorizontal, Eye } from "lucide-react";

export const metadata = {
  title: "Sản Phẩm | Đèn thiền Mực, trà và thi",
  description: "Khám phá các sản phẩm đèn thiền và combo quà tặng cao cấp từ Quỹ Bảo trợ giáo dục Vicaris.",
};

export default function ProductsPage() {
  return (
    <div className="bg-brand-paper min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header & Filter/Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-brown mb-2">Sản Phẩm</h1>
            <p className="text-brand-ink/60 font-serif">Hiển thị {products.length} sản phẩm</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="w-full pl-10 pr-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:border-brand-yellow bg-white text-sm font-serif"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/40" size={16} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-brand-brown/20 rounded-md hover:bg-brand-brown/5 transition-colors text-sm font-medium text-brand-brown">
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Lọc</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              href={`/products/${product.slug}`} 
              key={product.id}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-brown/5"
            >
              <div className="aspect-square relative overflow-hidden bg-brand-beige/50">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-brand-brown px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={16} />
                    Xem chi tiết
                  </span>
                </div>
                
                {product.isCombo && (
                  <div className="absolute top-3 left-3 bg-brand-yellow text-brand-brown text-xs font-bold px-3 py-1 rounded shadow-sm">
                    COMBO
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-xs text-brand-ink/60 uppercase tracking-wider mb-2 font-serif">
                  {product.category}
                </div>
                <h3 className="font-serif font-bold text-brand-brown text-lg mb-2 line-clamp-1 group-hover:text-brand-yellow transition-colors">
                  {product.name}
                </h3>
                <div className="font-bold text-brand-yellow">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
