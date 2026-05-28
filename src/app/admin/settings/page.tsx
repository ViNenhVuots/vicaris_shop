import { Settings, Save } from "lucide-react";

export const metadata = {
  title: "Cài đặt hệ thống | Admin",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cài đặt Hệ thống</h1>
        <button className="bg-brand-brown hover:bg-brand-brown/90 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
          <Save size={16} />
          Lưu thay đổi
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
          <Settings className="text-gray-400 mb-4" size={48} />
          <h2 className="text-xl font-medium text-gray-900 mb-2">Khu vực cấu hình</h2>
          <p className="text-gray-500 text-center max-w-md">
            Giao diện cài đặt cấu hình cửa hàng, phí vận chuyển và kết nối Supabase đang được xây dựng.
          </p>
        </div>
      </div>
    </div>
  );
}
