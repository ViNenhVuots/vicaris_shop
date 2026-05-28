# The Craft House Clone

Dự án clone giao diện và chức năng của website The Craft House.

## Công nghệ sử dụng
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS v4
- Framer Motion (Animation)
- Zustand (State management)
- Zod + React Hook Form (Form validation)
- Supabase (Database + Auth)

## Cấu trúc thư mục
- `src/app`: Chứa các route của ứng dụng (trang chủ, chi tiết sản phẩm, thanh toán, admin).
- `src/components`: Chứa các component tái sử dụng (Header, Footer, ProductCard, CartDrawer).
- `src/store`: Chứa state store (Zustand) cho giỏ hàng.
- `src/lib`: Chứa các tiện ích, cấu hình Supabase.
- `supabase.sql`: Chứa cấu trúc database schema cho Supabase.

## Chức năng đã hoàn thiện
1. Giao diện (UI/UX) responsive.
2. Trang chủ với Header, Hero banner, Featured products, Footer.
3. Chi tiết sản phẩm với Image Gallery, form thêm vào giỏ.
4. Drawer Giỏ hàng (Thêm, Xóa, Sửa số lượng).
5. Trang Thanh toán với Form validation bằng Zod.
6. Trang Admin Dashboard tổng quan.
7. Schema Supabase database đầy đủ.

## Hướng dẫn cài đặt và chạy
1. Đảm bảo bạn đã cài đặt Node.js.
2. Chạy lệnh cài đặt các gói phụ thuộc (nếu chưa cài):
   ```bash
   npm install
   ```
3. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
4. Truy cập `http://localhost:3000` để xem kết quả.

## Tích hợp Database (Tùy chọn)
- Tạo project trên [Supabase](https://supabase.com/).
- Copy nội dung trong file `supabase.sql` chạy vào SQL Editor của Supabase.
- Cập nhật `.env.local` với cấu hình:
  ```
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  ```
"# vicaris_shop" 
