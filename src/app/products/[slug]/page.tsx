import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductConfigurator from "@/components/product/ProductConfigurator";
import ProductGallery from "@/components/product/ProductGallery";
import ProductStory from "@/components/product/ProductStory";
import ProductMaterials from "@/components/product/ProductMaterials";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductMasonry from "@/components/product/ProductMasonry";
import ProductVideo from "@/components/product/ProductVideo";
import ProductCTA from "@/components/product/ProductCTA";
import ProductRelated from "@/components/product/ProductRelated";
import { getProductBySlug } from "@/services/productService";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  // Use some high quality Zen images for the gallery as requested for the redesign
  const galleryImages = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511424187101-2aaa60069337?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <main className="bg-brand-paper min-h-screen">
      {/* Section 1: Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-brand-ink/60 mb-8 font-serif">
            <Link href="/products" className="hover:text-brand-yellow transition-colors flex items-center gap-1">
              <ArrowLeft size={16} />
              Cửa hàng
            </Link>
            <span>/</span>
            <span className="text-brand-brown font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Gallery */}
            <div className="lg:col-span-7 sticky top-24 z-10">
              <ProductGallery images={galleryImages} productName={product.name} />
            </div>

            {/* Right: Info & Configurator */}
            <div className="lg:col-span-5 flex flex-col relative z-20">
              <div className="mb-4 text-brand-yellow font-medium uppercase tracking-[0.2em] text-sm font-serif">
                Sản phẩm độc quyền
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-6 leading-tight">
                Đèn thiền Mực, trà và thi
              </h1>
              
              {/* Section 2 inside Configurator */}
              <ProductConfigurator productBase={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3 & 4: Introduction and Storytelling */}
      <ProductStory />

      {/* Section 5: Materials */}
      <ProductMaterials />

      {/* Section 6: Technical Specs */}
      <ProductSpecs />

      {/* Section 7: Masonry Gallery */}
      <ProductMasonry />

      {/* Section 8: Video */}
      <ProductVideo />

      {/* Section 9: CTA */}
      <ProductCTA />

      {/* Section 10: Related Products */}
      <ProductRelated />
    </main>
  );
}
