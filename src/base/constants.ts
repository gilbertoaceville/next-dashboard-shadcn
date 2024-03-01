import { IDashboard, NavProps } from "@/global";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  DollarSign,
  Users,
  CreditCard,
  Activity,
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

export const dashboardData: IDashboard = {
  cardData: [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      description: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      description: "+180.1% from last month",
      icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      icon: CreditCard,
    },
    {
      label: "Active Now",
      amount: "+573",
      description: "+201 since last hour",
      icon: Activity,
    },
  ],

  salesData: [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00",
    },
  ],
};
