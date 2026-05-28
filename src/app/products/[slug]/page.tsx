import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft } from "lucide-react";
import ProductConfigurator from "@/components/product/ProductConfigurator";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find product from mock data
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-brand-paper min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-brand-ink/60 mb-8 font-serif">
          <Link href="/products" className="hover:text-brand-yellow transition-colors flex items-center gap-1">
            <ArrowLeft size={16} />
            Quay lại Sản phẩm
          </Link>
          <span>/</span>
          <span className="text-brand-brown font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-lg border border-brand-brown/5">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square relative rounded-lg overflow-hidden shadow-sm border border-brand-brown/10 hover:border-brand-yellow cursor-pointer transition-colors">
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2 text-brand-yellow font-medium uppercase tracking-wider text-sm">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-brand-yellow">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-sm text-brand-ink/60 font-serif">Một tác phẩm từ Quỹ Vicaris</span>
            </div>

            <p className="text-brand-ink/80 mb-8 leading-relaxed font-serif text-lg">
              {product.description}
            </p>

            <ul className="space-y-3 mb-10 text-brand-ink/80 font-serif">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1">🌿</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <ProductConfigurator productBase={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
