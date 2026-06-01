import Link from "next/link";
import { getFeaturedProducts } from "@/services/productService";
import ProductCard from "@/components/product/ProductCard";

export default async function ProductRelated() {
  const products = await getFeaturedProducts();
  
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 bg-brand-paper">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12 border-b border-brand-brown/10 pb-6">
          <div>
            <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-2 block">Khám Phá</span>
            <h2 className="text-3xl font-serif font-bold text-brand-brown">Các tác phẩm khác</h2>
          </div>
          <Link href="/products" className="text-brand-ink/60 hover:text-brand-terracotta transition-colors font-serif hidden sm:block">
            Xem tất cả &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products" className="text-brand-ink/60 hover:text-brand-terracotta transition-colors font-serif">
            Xem tất cả &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
