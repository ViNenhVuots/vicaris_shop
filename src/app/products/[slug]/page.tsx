import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import ProductConfigurator from "@/components/product/ProductConfigurator";
import ProductGallery from "@/components/product/ProductGallery";
import { getProductBySlug, getAllProductSlugs } from "@/services/productService";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Lazy load below-the-fold components - they don't block initial render
const ProductStory = dynamic(() => import("@/components/product/ProductStory"), {
  loading: () => <SectionSkeleton />,
});
const ProductVideo = dynamic(() => import("@/components/product/ProductVideo"), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div className="py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mx-auto" />
          <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse mx-auto" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}

// Pre-generate product pages at build time for instant loading
export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return { title: "Sản phẩm không tìm thấy" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Đèn thiền Mực, trà và thi`,
      description: product.description,
      images: [
        { 
          url: product.image?.startsWith('http') 
            ? product.image 
            : `https://vicaris-shop.vercel.app${product.image || '/images/logo.png'}?v=3`, 
          width: 1200, 
          height: 630, 
          alt: product.name 
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [
        product.image?.startsWith('http') 
          ? product.image 
          : `https://vicaris-shop.vercel.app${product.image || '/images/logo.png'}?v=3`
      ],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  // Use product's own images if available, fallback to Zen images
  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511424187101-2aaa60069337?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
      ];

  return (
    <main className="bg-brand-paper min-h-screen">
      {/* Section 1: Hero */}
      <section className="pt-6 pb-8 sm:pt-12 sm:pb-12 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-brand-ink/60 mb-4 sm:mb-6 md:mb-8 font-serif" aria-label="Breadcrumb">
            <Link href="/products" className="hover:text-brand-yellow transition-colors flex items-center gap-1">
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Cửa hàng</span>
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-brown font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left: Gallery */}
            <div className="lg:col-span-7 relative lg:sticky lg:top-24 z-10">
              <ProductGallery images={galleryImages} productName={product.name} />
            </div>

            {/* Right: Info & Configurator */}
            <div className="lg:col-span-5 flex flex-col relative z-20">
              <div className="mb-2 sm:mb-4 text-brand-yellow font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-serif">
                Sản phẩm độc quyền
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-brown mb-4 sm:mb-6 leading-tight">
                {product.name}
              </h1>
              
              {/* Section 2 inside Configurator */}
              <ProductConfigurator productBase={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3-9: Introduction and Storytelling */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProductStory product={product} />
      </Suspense>

      {product.configurator !== "wood-board" && (
        <Suspense fallback={<SectionSkeleton />}>
          <ProductVideo />
        </Suspense>
      )}
    </main>
  );
}
