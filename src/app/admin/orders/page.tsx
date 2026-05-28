import { ShoppingCart } from "lucide-react";

export const metadata = {
  title: "Quản lý đơn hàng | Admin",
};

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Quản lý Đơn hàng</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <ShoppingCart className="text-gray-400" size={32} />
        </div>
        <h2 className="text-xl font-medium text-gray-900 mb-2">Đang tải dữ liệu đơn hàng...</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Module quản lý đơn hàng đang trong quá trình tích hợp với hệ thống thanh toán và cơ sở dữ liệu. Vui lòng quay lại sau.
        </p>
      </div>
    </div>
  );
}
