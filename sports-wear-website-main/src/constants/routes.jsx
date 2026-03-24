import { lazy } from "react";
import Layout from "../components/Global/Layout";

const Home = lazy(() => import("../pages/Home"));
const ShopAll = lazy(() => import("../pages/ShopAll"));
const Men = lazy(() => import("../pages/Men"));
const Women = lazy(() => import("../pages/Women"));
const PacksAndGear = lazy(() => import("../pages/PacksAndGear"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));

const ProductPage = lazy(() => import("../pages/ProductPage"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<Home />} />,
  },
  {
    title: "Home Page",
    url: "/products/:title",
    page: <Layout pages={<ProductPage />} />,
  },
  {
    title: "All Products Page",
    url: "/shop-all",
    page: <Layout pages={<ShopAll />} />,
  },
  {
    title: "Men Products Page",
    url: "/men",
    page: <Layout pages={<Men />} />,
  },
  {
    title: "Women Products Page",
    url: "/women",
    page: <Layout pages={<Women />} />,
  },
  {
    title: "Packs % Gear Page",
    url: "/packs-gear",
    page: <Layout pages={<PacksAndGear />} />,
  },
  {
    title: "Cart Page",
    url: "/cart",
    page: <Layout pages={<Cart />} />,
  },
  {
    title: "Checkout Page",
    url: "/checkout",
    page: <Layout pages={<Checkout />} />,
  },
];
