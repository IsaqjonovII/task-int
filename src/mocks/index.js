import { ChangeIcon, DiscountIcon, GiftIcon } from "../assets";
export const PRODUCTS__DATA = [
  {
    id: 0,
    title: "Samsung Galaxy Z flip",
    image:
      "https://images.samsung.com/uk/smartphones/galaxy-z-flip3-5g/buy/02_Carousel/03-BasicColor/zflip3_carousel_foldunfoldcombo_lavender_mo.jpg",
    price: 999,
    dividedpayment: 333,
    label: [<GiftIcon />, <DiscountIcon />],
  },
  {
    id: 1,
    title: "iPhone 14 pro max",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1663703841897",
    price: 1099,
    dividedpayment: 333,
    label: [<GiftIcon />, <ChangeIcon />],
  },
  {
    id: 2,
    title: "Samsung Galaxy Z flip",
    image:
      "https://images.samsung.com/uk/smartphones/galaxy-z-flip3-5g/buy/02_Carousel/03-BasicColor/zflip3_carousel_foldunfoldcombo_lavender_mo.jpg",
    price: 999,
    dividedpayment: 333,
    label: [<ChangeIcon />],
  }
];
