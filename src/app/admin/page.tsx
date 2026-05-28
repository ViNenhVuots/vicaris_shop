import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tổng Quan</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Doanh thu</h3>
            <div className="p-2 bg-green-100 text-green-600 rounded-lg">
              <DollarSign size={24} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">125.000.000đ</p>
          <p className="text-sm text-green-600 mt-2 flex items-center">
            <span className="font-medium">+15%</span>
            <span className="text-gray-500 ml-1">so với tháng trước</span>
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Đơn hàng</h3>
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <ShoppingBag size={24} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">450</p>
          <p className="text-sm text-green-600 mt-2 flex items-center">
            <span className="font-medium">+5%</span>
            <span className="text-gray-500 ml-1">so với tháng trước</span>
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Sản phẩm</h3>
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <Package size={24} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">120</p>
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <span>Đang hoạt động</span>
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Khách hàng</h3>
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <Users size={24} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">1,250</p>
          <p className="text-sm text-green-600 mt-2 flex items-center">
            <span className="font-medium">+12%</span>
            <span className="text-gray-500 ml-1">so với tháng trước</span>
          </p>
        </div>
      </div>

      {/* Recent Orders Table Mock */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Đơn hàng gần đây</h2>
          <button className="text-sm text-brand-terracotta hover:underline font-medium">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="px-6 py-3 font-medium">Mã Đơn</th>
                <th className="px-6 py-3 font-medium">Khách Hàng</th>
                <th className="px-6 py-3 font-medium">Ngày Đặt</th>
                <th className="px-6 py-3 font-medium">Tổng Tiền</th>
                <th className="px-6 py-3 font-medium">Trạng Thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: "#ORD-1025", name: "Nguyễn Văn A", date: "26/05/2026", amount: "1.500.000đ", status: "Chờ xử lý", statusColor: "bg-yellow-100 text-yellow-800" },
                { id: "#ORD-1024", name: "Trần Thị B", date: "25/05/2026", amount: "850.000đ", status: "Đang giao", statusColor: "bg-blue-100 text-blue-800" },
                { id: "#ORD-1023", name: "Lê Văn C", date: "24/05/2026", amount: "2.100.000đ", status: "Hoàn thành", statusColor: "bg-green-100 text-green-800" },
                { id: "#ORD-1022", name: "Phạm D", date: "23/05/2026", amount: "350.000đ", status: "Hoàn thành", statusColor: "bg-green-100 text-green-800" },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.name}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
