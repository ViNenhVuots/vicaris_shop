import { Package, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/services/productService";

export const metadata = {
  title: "Quản lý sản phẩm | Admin",
};

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Quản lý Sản phẩm</h1>
        <Link 
          href="/admin/products/new"
          className="bg-[#5C4D43] hover:bg-[#4A3B32] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Thêm sản phẩm
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#EAE0D5] overflow-hidden">
        {products.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Package className="text-gray-400" size={32} />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Chưa có sản phẩm nào</h2>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FDFBF7] text-[#7A7067] text-xs uppercase tracking-wider font-semibold border-b border-[#EAE0D5]/50">
                  <th className="px-6 py-4 whitespace-nowrap">Sản phẩm</th>
                  <th className="px-6 py-4 whitespace-nowrap">Danh mục</th>
                  <th className="px-6 py-4 whitespace-nowrap">Giá</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE0D5]/30">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#FDFBF7]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded overflow-hidden mr-4 border border-[#EAE0D5]">
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        <div>
                          <div className="font-medium text-[#2D2D2D]">{product.name}</div>
                          <div className="text-sm text-[#7A7067] truncate max-w-[200px]">{product.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#5C4D43] font-medium">{product.category}</td>
                    <td className="px-6 py-4 font-bold text-[#2D2D2D]">
                      {product.price.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-brand-yellow hover:text-brand-brown p-2 rounded-lg hover:bg-brand-yellow/10 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="text-[#D9534F] hover:text-[#A03532] p-2 rounded-lg hover:bg-[#D9534F]/10 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
