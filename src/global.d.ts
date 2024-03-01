import { CardProps } from "@/components/Card";
import { SalesProps } from "@/components/SalesCard";
import { LucideIcon } from "lucide-react";

type IDashboard = {
  cardData: CardProps[];
  salesData: SalesProps[];
}

type NavProps = {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    href: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};