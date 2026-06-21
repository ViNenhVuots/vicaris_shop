"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, Eye, ChevronDown } from "lucide-react";
import { ProductData } from "@/data/products";

export default function ProductListClient({ initialProducts }: { initialProducts: ProductData[] }) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");
  const [sortBy, setSortBy] = useState<string>("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search !== null) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const categories = ["Tất cả", ...Array.from(new Set(initialProducts.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description?.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by category
    if (activeCategory !== "Tất cả") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [initialProducts, searchQuery, activeCategory, sortBy]);

  return (
    <>
      {/* Header & Filter/Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-4xl font-serif font-bold text-brand-brown mb-2">Sản Phẩm</h1>
          <p className="text-brand-ink/60 font-serif">Hiển thị {filteredAndSortedProducts.length} sản phẩm</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:border-brand-yellow bg-white text-sm font-serif"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/40" size={16} />
          </div>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-md transition-colors text-sm font-medium w-full sm:w-auto ${
              isFilterOpen 
                ? 'bg-brand-brown text-white border-brand-brown' 
                : 'border-brand-brown/20 hover:bg-brand-brown/5 text-brand-brown'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span>Lọc & Sắp xếp</span>
          </button>
        </div>
      </div>

      {/* Filter & Sort Controls */}
      {isFilterOpen && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-brown/10 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-bold text-brand-brown uppercase mb-3 tracking-wider">Danh mục</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-brand-yellow text-brand-brown font-bold'
                        : 'bg-brand-beige text-brand-ink/70 hover:bg-brand-brown/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Order */}
            <div>
              <h3 className="text-sm font-bold text-brand-brown uppercase mb-3 tracking-wider">Sắp xếp theo</h3>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-brand-beige border-none px-4 py-2.5 rounded-md text-brand-ink focus:ring-2 focus:ring-brand-yellow focus:outline-none cursor-pointer text-sm"
                >
                  <option value="default">Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến cao</option>
                  <option value="price-desc">Giá: Cao đến thấp</option>
                  <option value="name-asc">Tên: A-Z</option>
                  <option value="name-desc">Tên: Z-A</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/50 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-brand-brown/10">
          <p className="text-brand-ink/60 text-lg">Không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("Tất cả");
              setSortBy("default");
            }}
            className="mt-4 px-6 py-2 bg-brand-brown text-white rounded-md hover:bg-brand-brown/90 transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </>
  );
}
