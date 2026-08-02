"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const checkoutSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().regex(/^(0|\+84)[35789][0-9]{8}$/, "Số điện thoại không hợp lệ"),
  address: z.string().min(10, "Địa chỉ phải có ít nhất 10 ký tự"),
  city: z.string().min(2, "Vui lòng nhập Tỉnh/Thành phố"),
  district: z.string().min(2, "Vui lòng nhập Quận/Huyện"),
  ward: z.string().min(2, "Vui lòng nhập Phường/Xã"),
  notes: z.string().optional(),
  paymentMethod: z.enum(["cod", "banking"])
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "cod"
    }
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    if (items.length === 0) {
      toast.error("Giỏ hàng của bạn đang trống");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare order details
      const orderDetails = items.map(
        (item) => `${item.name} (${item.size} - ${item.combo} - ${item.motif}) x ${item.quantity}`
      ).join(" | ");

      const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        address: `${data.address}, ${data.ward}, ${data.district}, ${data.city}`,
        notes: data.notes || "",
        paymentMethod: data.paymentMethod,
        orderDetails: orderDetails,
        totalAmount: totalAmount,
        date: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
      };

      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      } else {
        console.warn("Google Script URL is not configured. Order simulated.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSubmitting(false);
      clearCart();
      toast.success("Đặt hàng thành công!");
      router.push("/checkout/success");
      
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-brand-brown mb-6">Thông tin giao hàng</h2>
      
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
          <input
            {...register("fullName")}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Nhập họ và tên"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Nhập email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
            <input
              {...register("phone")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Nhập số điện thoại"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ (Số nhà, đường)</label>
          <input
            {...register("address")}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Nhập địa chỉ"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tỉnh/Thành phố</label>
            <input
              {...register("city")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tỉnh/Thành phố"
            />
            {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quận/Huyện</label>
            <input
              {...register("district")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.district ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Quận/Huyện"
            />
            {errors.district && <p className="mt-1 text-sm text-red-500">{errors.district.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phường/Xã</label>
            <input
              {...register("ward")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta ${errors.ward ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Phường/Xã"
            />
            {errors.ward && <p className="mt-1 text-sm text-red-500">{errors.ward.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú đơn hàng (Tùy chọn)</label>
          <textarea
            {...register("notes")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
            placeholder="Ghi chú thêm về đơn hàng..."
            rows={3}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-brand-brown mb-6 pt-6 border-t border-gray-100">Phương thức thanh toán</h2>
      
      <div className="space-y-3 mb-8">
        <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            value="cod"
            {...register("paymentMethod")}
            className="w-4 h-4 text-brand-terracotta focus:ring-brand-terracotta"
          />
          <span className="ml-3 font-medium text-gray-700">Thanh toán khi nhận hàng (COD)</span>
        </label>
        
        <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            value="banking"
            {...register("paymentMethod")}
            className="w-4 h-4 text-brand-terracotta focus:ring-brand-terracotta"
          />
          <span className="ml-3 font-medium text-gray-700">Chuyển khoản ngân hàng</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-brown hover:bg-brand-brown/90 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            ĐANG XỬ LÝ...
          </>
        ) : (
          "ĐẶT HÀNG"
        )}
      </button>
    </form>
  );
}
