import { Package, Plus } from "lucide-react";

export const metadata = {
  title: "Quản lý sản phẩm | Admin",
};

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý Sản phẩm</h1>
        <button className="bg-brand-brown hover:bg-brand-brown/90 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
          <Plus size={16} />
          Thêm sản phẩm
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <Package className="text-gray-400" size={32} />
        </div>
        <h2 className="text-xl font-medium text-gray-900 mb-2">Chưa có sản phẩm nào được hiển thị</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Tính năng quản lý danh sách sản phẩm đang được phát triển và sẽ sớm được kết nối với cơ sở dữ liệu Supabase.
        </p>
      </div>
    </div>
  );
}
