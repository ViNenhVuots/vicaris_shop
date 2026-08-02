export interface ProductData {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  isCombo: boolean;
  comboDetails?: string;
}

export const products: ProductData[] = [
  {
    id: "den-thien-muc-tra-va-thi",
    slug: "den-thien-muc-tra-va-thi",
    name: "Đèn thiền Mực, trà và thi",
    price: 370000,
    image: "/images/products/gallery1.jpg",
    images: [
      "/images/products/gallery1.jpg",
      "/images/products/gallery2.jpg",
      "/images/products/gallery3.jpg",
      "/images/products/gallery4.jpg",
    ],
    category: "Đèn Thiền",
    description: "Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, là món quà cao cấp ý nghĩa.",
    features: [
      "Chất liệu: gỗ pơmu, gỗ me tây; giấy dó, hạt nút dừa, nhựa PET",
      "Ánh sáng: LED (cổng USB) / Nến tealight (sáp ong)",
      "Kích thước: 15x15x18cm",
      "Đơn vị sản xuất: Quỹ Bảo trợ giáo dục Vicaris"
    ],
    isCombo: false
  },
];
