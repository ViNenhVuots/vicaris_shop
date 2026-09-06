import { supabase } from "@/lib/supabase";
import { products as mockProducts, ProductData } from "@/data/products";
import { unstable_cache } from "next/cache";

/**
 * Service to handle product fetching.
 * Attempts to fetch from Supabase. If Supabase is not configured or fails,
 * it gracefully falls back to the mock data.
 * 
 * Uses Next.js unstable_cache for server-side caching to avoid
 * repeated Supabase calls on every page navigation.
 */

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')
  );
}

function mapSupabaseProduct(item: any): ProductData {
  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    price: Number(item.price),
    image: item.image_url || "/images/products/placeholder.png",
    images: item.images || [],
    category: (item.categories as any)?.name || "Sản phẩm",
    description: item.description || "",
    features: item.features || [],
    isCombo: (item.name as string).toLowerCase().includes("combo"),
    priceMax: item.price_max ? Number(item.price_max) : undefined,
    configurator: item.configurator || undefined,
    variants: item.variants || undefined,
    shortDescription: item.short_description || undefined,
  };
}

const PRODUCT_SELECT = `
  id,
  slug,
  name,
  price,
  image_url,
  images,
  description,
  features,
  categories (name)
`;

// Cached version of getProducts - revalidates every 60 seconds
const getCachedProducts = unstable_cache(
  async (): Promise<ProductData[]> => {
    if (!isSupabaseConfigured()) {
      return mockProducts;
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select(PRODUCT_SELECT);

      if (error) throw error;
      
      let fetchedProducts: ProductData[] = [];
      if (data && data.length > 0) {
        fetchedProducts = data.map(mapSupabaseProduct);
      }
      
      // Merge mock products that don't exist in Supabase
      const supabaseSlugs = new Set(fetchedProducts.map(p => p.slug));
      const missingMockProducts = mockProducts.filter(p => !supabaseSlugs.has(p.slug));
      
      const allProducts = [...fetchedProducts, ...missingMockProducts];
      
      if (allProducts.length === 0) {
        console.warn("Supabase returned empty products. Falling back to mock data.");
        return mockProducts;
      }
      
      return allProducts;

    } catch (error) {
      console.warn("Failed to fetch products from Supabase, falling back to mock data:", error);
      return mockProducts;
    }
  },
  ['products-list'],
  { revalidate: 60, tags: ['products'] }
);

export async function getProducts(): Promise<ProductData[]> {
  return getCachedProducts();
}

// Cached version of getProductBySlug
const getCachedProductBySlug = unstable_cache(
  async (slug: string): Promise<ProductData | null> => {
    if (!isSupabaseConfigured()) {
      return mockProducts.find(p => p.slug === slug) || null;
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select(PRODUCT_SELECT)
        .eq('slug', slug)
        .single();

      if (error) throw error;

      if (data) {
        return mapSupabaseProduct(data);
      }

      return null;
    } catch (error) {
      console.warn(`Failed to fetch product ${slug} from Supabase, falling back to mock data:`, error);
      const mockProduct = mockProducts.find(p => p.slug === slug);
      return mockProduct || null;
    }
  },
  ['product-by-slug'],
  { revalidate: 60, tags: ['products'] }
);

export async function getProductBySlug(slug: string): Promise<ProductData | null> {
  return getCachedProductBySlug(slug);
}

// Cached version of getFeaturedProducts
const getCachedFeaturedProducts = unstable_cache(
  async (): Promise<ProductData[]> => {
    if (!isSupabaseConfigured()) {
      return mockProducts.slice(0, 3);
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select(PRODUCT_SELECT)
        .eq('is_featured', true)
        .limit(3);

      if (error) throw error;

      if (data && data.length > 0) {
        return data.map(mapSupabaseProduct);
      }

      return mockProducts.slice(0, 3);
    } catch (error) {
      console.warn("Failed to fetch featured products from Supabase, falling back to mock data:", error);
      return mockProducts.slice(0, 3);
    }
  },
  ['featured-products'],
  { revalidate: 60, tags: ['products'] }
);

export async function getFeaturedProducts(): Promise<ProductData[]> {
  return getCachedFeaturedProducts();
}

// Get all slugs for static generation
export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getProducts();
  return products.map(p => p.slug);
}
