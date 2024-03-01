import { CardProps } from "@/components/Card";
import { SalesProps } from "@/components/SalesCard";
import { LucideIcon } from "lucide-react";

type IDashboard = {
  cardData: CardProps[];
  salesData: SalesProps[];
};

type NavProps = {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    href: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
};

type Payment = (
  | { order: string; status: string; name?: never; email?: never }
  | { order?: never; status?: never; name: string; email: string }
) & {
  lastOrder: string;
  method: string;
};

type Setting = {
  category: string;
  value: string | number | boolean;
}
