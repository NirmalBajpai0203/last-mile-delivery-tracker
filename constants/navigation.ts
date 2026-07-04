import {
  LayoutDashboard,
  Package,
  Truck,
  PlusCircle,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Drivers",
    href: "/drivers/add",
    icon: Truck,
  },
  {
    title: "Orders",
    href: "/orders/add",
    icon: Package,
  },
  {
    title: "Create Order",
    href: "/orders/add",
    icon: PlusCircle,
  },
];