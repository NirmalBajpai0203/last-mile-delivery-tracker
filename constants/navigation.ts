import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  IndianRupee,
  Map,
  BarChart3,
  Settings,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: Package,
    badge: "24",
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Agents",
    href: "/agents",
    icon: Truck,
    badge: "5",
  },
  {
    title: "Rate Cards",
    href: "/rate-cards",
    icon: IndianRupee,
  },
  {
    title: "Zones",
    href: "/zones",
    icon: Map,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];