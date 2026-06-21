import ProductListClient from "./ProductListClient";
import { getProducts } from "@/services/productService";
import { Suspense } from "react";

export const metadata = {
  title: "Sản Phẩm | Đèn thiền Mực, trà và thi",
  description: "Khám phá các sản phẩm đèn thiền và combo quà tặng cao cấp từ Quỹ Bảo trợ giáo dục Vicaris.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-brand-paper min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <Suspense fallback={<div className="py-20 text-center text-brand-ink/60">Đang tải sản phẩm...</div>}>
          <ProductListClient initialProducts={products} />
        </Suspense>
      </div>
    </div>
  );
}
