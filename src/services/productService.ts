import { supabase } from "@/lib/supabase";
import { products as mockProducts, ProductData } from "@/data/products";

/**
 * Service to handle product fetching.
 * Attempts to fetch from Supabase. If Supabase is not configured or fails,
 * it gracefully falls back to the mock data.
 */

export async function getProducts(): Promise<ProductData[]> {
  // Fast fail if no real Supabase URL is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
    return mockProducts;
  }

  try {
    // Attempt to fetch from Supabase
    const { data, error } = await supabase
      .from('products')
      .select(`
        id,
        slug,
        name,
        price,
        image_url,
        images,
        description,
        features,
        categories (name)
      `);

    if (error) throw error;
    
    if (data && data.length > 0) {
      // Map Supabase schema to our frontend ProductData interface
      return data.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        price: Number(item.price),
        image: item.image_url || "/images/products/placeholder.png",
        images: item.images || [],
        category: item.categories?.name || "Sản phẩm",
        description: item.description || "",
        features: item.features || [],
        isCombo: item.name.toLowerCase().includes("combo"),
      }));
    }
    
    // If no data returned but no error, maybe table is empty. Fallback.
    console.warn("Supabase returned empty products. Falling back to mock data.");
    return mockProducts;

  } catch (error) {
    console.warn("Failed to fetch products from Supabase, falling back to mock data:", error);
    return mockProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<ProductData | null> {
  // Fast fail if no real Supabase URL is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
    return mockProducts.find(p => p.slug === slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        id,
        slug,
        name,
        price,
        image_url,
        images,
        description,
        features,
        categories (name)
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;

    if (data) {
      return {
        id: data.id,
        slug: data.slug,
        name: data.name,
        price: Number(data.price),
        image: data.image_url || "/images/products/placeholder.png",
        images: data.images || [],
        category: data.categories?.name || "Sản phẩm",
        description: data.description || "",
        features: data.features || [],
        isCombo: data.name.toLowerCase().includes("combo"),
      };
    }

    return null;
  } catch (error) {
    console.warn(`Failed to fetch product ${slug} from Supabase, falling back to mock data:`, error);
    const mockProduct = mockProducts.find(p => p.slug === slug);
    return mockProduct || null;
  }
}

export async function getFeaturedProducts(): Promise<ProductData[]> {
  // Fast fail if no real Supabase URL is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
    return mockProducts.slice(0, 3);
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        id,
        slug,
        name,
        price,
        image_url,
        images,
        description,
        features,
        categories (name)
      `)
      .eq('is_featured', true)
      .limit(3);

    if (error) throw error;

    if (data && data.length > 0) {
      return data.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        price: Number(item.price),
        image: item.image_url || "/images/products/placeholder.png",
        images: item.images || [],
        category: item.categories?.name || "Sản phẩm",
        description: item.description || "",
        features: item.features || [],
        isCombo: item.name.toLowerCase().includes("combo"),
      }));
    }

    return mockProducts.slice(0, 3);
  } catch (error) {
    console.warn("Failed to fetch featured products from Supabase, falling back to mock data:", error);
    return mockProducts.slice(0, 3);
  }
}
