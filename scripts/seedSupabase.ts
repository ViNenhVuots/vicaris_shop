/**
 * This script seeds the Supabase database with the initial product data.
 * You can run this script using `npx tsx scripts/seedSupabase.ts` after adding your Supabase credentials to .env.
 */

import { createClient } from '@supabase/supabase-js';
import { products } from '../src/data/products';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Use service role key to bypass RLS for seeding, or Anon key if RLS allows inserts
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log("Seeding Supabase Database...");

  try {
    // 1. Ensure categories exist first (if not, we'll create a default one or map them)
    // For simplicity, we create a default category if products table requires it.
    // In our SQL schema, category_id is optional or references a real category.
    // Let's create unique categories from mock data.
    const categories = Array.from(new Set(products.map(p => p.category)));
    const categoryMap: Record<string, string> = {};

    for (const catName of categories) {
      const slug = catName.toLowerCase().replace(/ /g, '-').replace(/,/g, '');
      
      const { data: catData, error: catError } = await supabase
        .from('categories')
        .upsert({ name: catName, slug: slug })
        .select()
        .single();
        
      if (catError) {
        console.error(`Error inserting category ${catName}:`, catError);
      } else if (catData) {
        categoryMap[catName] = catData.id;
      }
    }

    // 2. Insert Products
    for (const p of products) {
      const { data, error } = await supabase
        .from('products')
        .upsert({
          slug: p.slug,
          name: p.name,
          price: p.price,
          description: p.description,
          image_url: p.image,
          images: p.images,
          features: p.features,
          category_id: categoryMap[p.category],
          stock_quantity: 100, // default mock stock
          is_featured: true // Make them featured by default for testing
        }, { onConflict: 'slug' });

      if (error) {
        console.error(`Error inserting product ${p.name}:`, error.message);
      } else {
        console.log(`✅ Inserted: ${p.name}`);
      }
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Unexpected error during seeding:", error);
  }
}

seed();
