import Home from "../pages/Home";
import LikedProducts from "../pages/Liked";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import ShopNow from "../pages/ShopNow";
import ProductInfo from "../pages/ShopNow/Info";
import { HomeIcon, OrderIcon, ProductsIcon, StarIcon, CartIcon } from "../assets/index";

export const routes = [
    {
        path: "/",
        component: <Home />,
        key: "home"
    },
    {
        path: "/orders",
        component: <Orders />,
        key: "orders"
    },
    {
        path: "/products",
        component: <Products />,
        key: "products"
    },
    {
        path: "/shopnow",
        component: <ShopNow />,
        key: "shopnow"
    },
    {
        path: "/shopnow/:id",
        component: <ProductInfo />,
        key: "uniqueproduct"
    },
    {
        path: "/starred",
        component: <LikedProducts />,
        key: "home",
    },
];


export const ROUTES_LINK = [
    {
        id: 0,
        title: "Home",
        link: "/",
        icon: <HomeIcon />,
    },
    {
        id: 1,
        title: "Orders",
        link: "/orders",
        icon: <OrderIcon />
    },
    {
        id: 2,
        title: "Products",
        link: "/products",
        icon: <ProductsIcon />,
    },
    {
        id: 3,
        title: "Favourites",
        link: "/starred",
        icon: <StarIcon />
    },
    {
        id: 4,
        title: "Shop",
        link: "/shopnow",
        icon: <CartIcon />
    },
]