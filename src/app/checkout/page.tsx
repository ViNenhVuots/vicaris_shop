import type { Metadata } from "next";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export const metadata: Metadata = {
  title: "Thanh toán",
  description: "Hoàn tất đơn hàng đèn thiền Mực, trà và thi.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="bg-brand-beige min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-brown mb-6 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-4 font-serif">Thanh Toán</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
