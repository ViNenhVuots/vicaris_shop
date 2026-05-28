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
    id: "den-thien-co-nho",
    slug: "den-thien-co-nho",
    name: "Đèn thiền Mực, trà và thi - Cỡ Nhỏ",
    price: 370000,
    image: "/images/products/tam-an.png",
    images: [
      "/images/products/tam-an.png",
      "/images/products/hoa-sen-thuy-mac.png",
    ],
    category: "Đèn Thiền",
    description: "Đèn thiền Mực, trà và thi kích thước nhỏ (15x15x18cm), phù hợp cho không gian bàn trà nhỏ, góc làm việc hoặc tủ đầu giường. Mang lại ánh sáng dịu nhẹ và năng lượng bình an.",
    features: [
      "Chất liệu: gỗ pơmu, gỗ me tây; giấy dó, hạt nút dừa, nhựa PET",
      "Ánh sáng: LED (cổng USB) / Nến tealight (sáp ong)",
      "Kích thước: 15x15x18cm",
      "Đơn vị sản xuất: Quỹ Bảo trợ giáo dục Vicaris"
    ],
    isCombo: false
  },
  {
    id: "den-thien-co-lon",
    slug: "den-thien-co-lon",
    name: "Đèn thiền Mực, trà và thi - Cỡ Lớn",
    price: 450000,
    image: "/images/products/neo-ve-sen-no.png",
    images: [
      "/images/products/neo-ve-sen-no.png",
      "/images/products/thuy-mac-tre-truc.png",
    ],
    category: "Đèn Thiền",
    description: "Đèn thiền Mực, trà và thi kích thước lớn (18x18x25cm), họa tiết tranh vẽ nổi bật hơn. Phù hợp đặt ở phòng khách, phòng thờ hoặc không gian thiền định rộng rãi.",
    features: [
      "Chất liệu: gỗ pơmu, gỗ me tây; giấy dó, hạt nút dừa, nhựa PET",
      "Ánh sáng: LED (cổng USB) / Nến tealight (sáp ong)",
      "Kích thước: 18x18x25cm",
      "Đơn vị sản xuất: Quỹ Bảo trợ giáo dục Vicaris"
    ],
    isCombo: false
  },
  {
    id: "combo-dt1",
    slug: "combo-dt1",
    name: "Combo ĐT1 - Tiết kiệm",
    price: 777000,
    image: "/images/products/combo1.png",
    images: [
      "/images/products/combo1.png",
    ],
    category: "Combo",
    description: "Sự kết hợp hoàn hảo giữa 2 kích cỡ đèn để bạn linh hoạt bố trí cho các không gian khác nhau. Đặc biệt tặng kèm 1 gói trà Sơn Động giúp trải nghiệm thưởng trà thêm trọn vẹn.",
    features: [
      "1 đèn nhỏ thắp nến tealight (15x15x18cm)",
      "1 đèn lớn ánh sáng LED (18x18x25cm)",
      "Tặng kèm 1 gói trà Sơn Động tự nhiên"
    ],
    isCombo: true,
    comboDetails: "ĐT1"
  },
  {
    id: "combo-dt2",
    slug: "combo-dt2",
    name: "Combo ĐT2 - Trà & Thiền",
    price: 777000,
    image: "/images/products/hoa-sen-thuy-mac.png",
    images: [
      "/images/products/hoa-sen-thuy-mac.png",
    ],
    category: "Combo",
    description: "Tận hưởng không gian bình yên với đèn thiền và hương vị trà mộc mạc từ vùng núi Chứa Chan.",
    features: [
      "1 đèn thiền Mực Trà và Thi (tùy chọn kích thước/họa tiết)",
      "Tặng kèm 1 gói trà thảo dược Sơn Động",
      "Thành phần trà: Chiên đàn, Đinh lăng, Cốt toái bổ, Quế chi"
    ],
    isCombo: true,
    comboDetails: "ĐT2"
  },
  {
    id: "combo-dt3",
    slug: "combo-dt3",
    name: "Combo ĐT3 - Quà Tặng Cao Cấp",
    price: 777000,
    image: "/images/products/tam-an.png",
    images: [
      "/images/products/tam-an.png",
    ],
    category: "Combo",
    description: "Hộp quà tặng cao cấp trọn vẹn ý nghĩa, thích hợp làm quà biếu đối tác, người thân mang thông điệp 'Hiểu và Thương'.",
    features: [
      "1 đèn thiền Mực Trà và Thi (tùy chọn)",
      "1 gói trà thảo dược Sơn Động",
      "1 Tranh 'Hiểu và Thương' (khung gỗ pơmu 23x23x2cm)",
      "1 Hộp gỗ quà tặng cao cấp (30x26x22cm)"
    ],
    isCombo: true,
    comboDetails: "ĐT3"
  }
];
