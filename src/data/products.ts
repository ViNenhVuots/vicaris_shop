export type ProductConfiguratorType = "lamp" | "wood-board";

export interface ProductVariant {
  id: string;
  label: string;
  size?: string;
  price: number | null;
  image?: string;
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceMax?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  shortDescription?: string;
  features: string[];
  isCombo: boolean;
  comboDetails?: string;
  configurator?: ProductConfiguratorType;
  variants?: ProductVariant[];
}

const WOOD_BOARD_IMG = "/images/products/bang-go-thu-phap";

export const products: ProductData[] = [
  {
    id: "den-thien-muc-tra-va-thi",
    slug: "den-thien-muc-tra-va-thi",
    name: "Đèn thiền Mực, trà và thi",
    price: 370000,
    image: "/images/products/p1.jpg",
    images: [
      "/images/products/p1.jpg",
      "/images/products/p2.jpg",
      "/images/products/p3.jpg",
      "/images/products/p4.jpg",
      "/images/products/p5.jpg",
      "/images/products/p6.jpg",
      "/images/products/p7.jpg",
      "/images/products/p8.jpg",
    ],
    category: "Đèn Thiền",
    description: "Đèn thiền Mực, trà và thi là một sáng tác đề cao nét thiền từ chất liệu và ánh sáng mộc mạc. Sự kết hợp thủ công giữa truyền thống và hiện đại để định hình đầy tinh tế, là món quà cao cấp ý nghĩa.",
    features: [
      "Chất liệu: gỗ pơmu, gỗ me tây; giấy dó, hạt nút dừa, nhựa PET",
      "Ánh sáng: LED (cổng USB) / Nến tealight (sáp ong)",
      "Kích thước: 15x15x18cm",
      "Đơn vị sản xuất: Quỹ Bảo trợ giáo dục Vicaris"
    ],
    isCombo: false,
    configurator: "lamp",
  },
  {
    id: "bang-go-pomu-dieu-khac-chu-thu-phap",
    slug: "bang-go-pomu-dieu-khac-chu-thu-phap",
    name: "Bảng gỗ pơmu điêu khắc chữ thư pháp",
    price: 1500000,
    priceMax: 2500000,
    image: `${WOOD_BOARD_IMG}/01-tong-the.jpg`,
    images: [
      `${WOOD_BOARD_IMG}/01-tong-the.jpg`,
      `${WOOD_BOARD_IMG}/02-uong-tra-di.jpg`,
      `${WOOD_BOARD_IMG}/04-ngoi-yen-thay-ro.jpg`,
      `${WOOD_BOARD_IMG}/06-an-tru-thanh-thoi.jpg`,
      `${WOOD_BOARD_IMG}/08-den-di-thong-dong-vang.jpg`,
      `${WOOD_BOARD_IMG}/09-den-di-thong-dong-den.jpg`,
      `${WOOD_BOARD_IMG}/12-tuy-duyen-thuan-phap.jpg`,
      `${WOOD_BOARD_IMG}/13-chanh-niem.jpg`,
      `${WOOD_BOARD_IMG}/14-tron.jpg`,
      `${WOOD_BOARD_IMG}/custom-lien-doi.jpg`,
    ],
    category: "Bảng gỗ thư pháp",
    description:
      "Bảng gỗ pơmu – điêu khắc chữ thư pháp thủ công, phù hợp trang trí không gian sống và làm quà tặng.",
    shortDescription:
      "Bảng gỗ pơmu – điêu khắc chữ thư pháp thủ công, phù hợp trang trí không gian sống và làm quà tặng.",
    features: [
      "Chất liệu: gỗ pơmu tái sinh từ mái nhà sàn đồng bào miền núi phía Bắc",
      "Điêu khắc chữ thư pháp thủ công",
      "Nhận thiết kế theo yêu cầu: nội dung, logo, nét chữ, màu chữ, kích thước, bố cục",
      "Phù hợp không gian sống, phòng trà, nơi làm việc, không gian thiền hoặc làm quà tặng",
      "Đơn vị sản xuất: Quỹ Bảo trợ giáo dục Vicaris",
    ],
    isCombo: false,
    configurator: "wood-board",
    variants: [
      {
        id: "custom",
        label: "Đặt chữ theo yêu cầu",
        price: null,
        image: `${WOOD_BOARD_IMG}/custom-lien-doi.jpg`,
      },
      {
        id: "uong-tra-30x50",
        label: "Uống trà đi",
        size: "30x50cm",
        price: 1500000,
        image: `${WOOD_BOARD_IMG}/02-uong-tra-di.jpg`,
      },
      {
        id: "uong-tra-44",
        label: "Uống trà đi",
        size: "đường kính 44cm",
        price: 1500000,
        image: `${WOOD_BOARD_IMG}/14-tron.jpg`,
      },
      {
        id: "ngoi-yen",
        label: "Ngồi yên thấy rõ",
        size: "36x60cm",
        price: 1700000,
        image: `${WOOD_BOARD_IMG}/04-ngoi-yen-thay-ro.jpg`,
      },
      {
        id: "an-tru",
        label: "An trú thảnh thơi",
        size: "36x60cm",
        price: 1700000,
        image: `${WOOD_BOARD_IMG}/06-an-tru-thanh-thoi.jpg`,
      },
      {
        id: "den-di",
        label: "Đến đi thong dong",
        size: "33x1m2",
        price: 2300000,
        image: `${WOOD_BOARD_IMG}/08-den-di-thong-dong-vang.jpg`,
      },
      {
        id: "tuy-duyen",
        label: "Tuỳ duyên thuận pháp",
        size: "33x1m2",
        price: 2300000,
        image: `${WOOD_BOARD_IMG}/12-tuy-duyen-thuan-phap.jpg`,
      },
      {
        id: "chanh-niem",
        label: "Chánh niệm là suối nguồn hạnh phúc",
        size: "40x1m2",
        price: 2500000,
        image: `${WOOD_BOARD_IMG}/13-chanh-niem.jpg`,
      },
    ],
  },
];
