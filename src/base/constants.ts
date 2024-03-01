import { NavProps } from "@/components/ui/nav";
import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
} from "lucide-react";

export const NAV_LINKS: NavProps["links"] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Users",
    href: "/users",
    icon: UsersRound,
    variant: "ghost",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
    variant: "ghost",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    variant: "ghost",
  },
];
