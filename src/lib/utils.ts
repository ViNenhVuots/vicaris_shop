import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatVnd(amount: number) {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}

export function formatProductPrice(price: number, priceMax?: number) {
  if (priceMax && priceMax !== price) {
    return `${formatVnd(price)} - ${formatVnd(priceMax)}`;
  }
  return formatVnd(price);
}
