"use client";

import { DollarSign, Package, ShoppingBag, Users, ChevronRight, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

const stats = [
  { 
    title: "Doanh thu", 
    value: "125.000.000đ", 
    trend: "+15%", 
    icon: DollarSign,
    color: "text-[#4A7C59]",
    bgColor: "bg-[#4A7C59]/10",
  },
  { 
    title: "Đơn hàng", 
    value: "450", 
    trend: "+5%", 
    icon: ShoppingBag,
    color: "text-[#5C4D43]",
    bgColor: "bg-[#5C4D43]/10",
  },
  { 
    title: "Sản phẩm", 
    value: "1", 
    subtitle: "Đang hoạt động", 
    icon: Package,
    color: "text-[#C4642D]",
    bgColor: "bg-[#C4642D]/10",
  },
  { 
    title: "Khách hàng", 
    value: "1,250", 
    trend: "+12%", 
    icon: Users,
    color: "text-[#6B5B95]",
    bgColor: "bg-[#6B5B95]/10",
  },
];

const recentOrders = [
  { id: "#ORD-1025", name: "Nguyễn Văn A", date: "26/05/2026", amount: "1.500.000đ", status: "Chờ xử lý", statusColor: "bg-[#F4C430]/20 text-[#8B6914] border-[#F4C430]/30" },
  { id: "#ORD-1024", name: "Trần Thị B", date: "25/05/2026", amount: "850.000đ", status: "Đang giao", statusColor: "bg-[#4A90E2]/10 text-[#2B609E] border-[#4A90E2]/20" },
  { id: "#ORD-1023", name: "Lê Văn C", date: "24/05/2026", amount: "2.100.000đ", status: "Hoàn thành", statusColor: "bg-[#4A7C59]/10 text-[#2D5A39] border-[#4A7C59]/20" },
  { id: "#ORD-1022", name: "Phạm D", date: "23/05/2026", amount: "350.000đ", status: "Hoàn thành", statusColor: "bg-[#4A7C59]/10 text-[#2D5A39] border-[#4A7C59]/20" },
  { id: "#ORD-1021", name: "Hoàng E", date: "22/05/2026", amount: "1.200.000đ", status: "Đã hủy", statusColor: "bg-[#D9534F]/10 text-[#A03532] border-[#D9534F]/20" },
];

export default function AdminDashboard() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-10"
    >
      <motion.div variants={item} className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-[#2D2D2D] tracking-tight">Tổng Quan</h1>
        <p className="text-[#7A7067] mt-1 font-medium">Báo cáo tình hình kinh doanh hôm nay</p>
      </motion.div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE0D5]/60 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-300 transform translate-x-4 -translate-y-4">
               <stat.icon size={80} />
            </div>

            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
                <stat.icon size={22} strokeWidth={2.5} />
              </div>
              {stat.trend && (
                <span className="flex items-center text-xs font-bold text-[#4A7C59] bg-[#4A7C59]/10 px-2.5 py-1 rounded-full">
                  <TrendingUp size={12} className="mr-1" strokeWidth={3} />
                  {stat.trend}
                </span>
              )}
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[#7A7067] font-medium text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-[#2D2D2D] tracking-tight">{stat.value}</p>
              {stat.subtitle && (
                <p className="text-xs text-[#A89F91] mt-2 font-medium">{stat.subtitle}</p>
              )}
              {stat.trend && !stat.subtitle && (
                <p className="text-xs text-[#A89F91] mt-2 font-medium">so với tháng trước</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <motion.div 
        variants={item}
        className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE0D5]/60 overflow-hidden"
      >
        <div className="px-8 py-6 border-b border-[#EAE0D5]/50 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-lg font-bold text-[#2D2D2D]">Đơn hàng gần đây</h2>
            <p className="text-sm text-[#A89F91] mt-1 font-medium">Danh sách các đơn hàng mới nhất cần xử lý</p>
          </div>
          <button className="flex items-center text-sm text-[#C4642D] hover:text-[#A04F20] font-semibold transition-colors group">
            Xem tất cả
            <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FDFBF7] text-[#7A7067] text-xs uppercase tracking-wider font-semibold border-b border-[#EAE0D5]/50">
                <th className="px-8 py-4 whitespace-nowrap">Mã Đơn</th>
                <th className="px-8 py-4 whitespace-nowrap">Khách Hàng</th>
                <th className="px-8 py-4 whitespace-nowrap">Ngày Đặt</th>
                <th className="px-8 py-4 whitespace-nowrap">Tổng Tiền</th>
                <th className="px-8 py-4 whitespace-nowrap">Trạng Thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE0D5]/30">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#FDFBF7]/50 transition-colors duration-200 group">
                  <td className="px-8 py-5 whitespace-nowrap font-medium text-[#2D2D2D] group-hover:text-[#C4642D] transition-colors">{order.id}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-[#5C4D43] font-medium">{order.name}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-[#7A7067]">{order.date}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-[#2D2D2D] font-bold">{order.amount}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
