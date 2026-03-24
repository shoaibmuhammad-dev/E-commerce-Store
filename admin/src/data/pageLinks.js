import { FaUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

export const PAGE_LINKS = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    page: "/",
  },
  {
    title: "Users",
    icon: LuUserRound,
    page: "/users",
  },
  {
    title: "Products",
    icon: AiOutlineProduct,
    page: "/products",
  },
  {
    title: "Orders",
    icon: MdOutlineShoppingCart,
    page: "/orders",
  },
  {
    title: "Reports",
    icon: TbReportSearch,
    page: "/reports",
  },
  {
    title: "Settings",
    icon: FiSettings,
    page: "/settings",
  },
];
