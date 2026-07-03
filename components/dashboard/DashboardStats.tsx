"use client";

import { useEffect, useState } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  IndianRupee,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  const [orders, setOrders] = useState(156);
  const [active, setActive] = useState(48);
  const [completed, setCompleted] = useState(108);
  const [revenue, setRevenue] = useState(24500);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) => prev + Math.floor(Math.random() * 3));
      setActive((prev) => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)));
      setCompleted((prev) => prev + Math.floor(Math.random() * 2));
      setRevenue((prev) => prev + Math.floor(Math.random() * 500));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Today's Orders"
        value={orders.toString()}
        change="+12%"
        icon={<Package size={28} />}
        gradient="from-blue-500 to-cyan-500"
      />

      <StatCard
        title="Active Deliveries"
        value={active.toString()}
        change="+8%"
        icon={<Truck size={28} />}
        gradient="from-orange-500 to-red-500"
      />

      <StatCard
        title="Completed"
        value={completed.toString()}
        change="+18%"
        icon={<CheckCircle size={28} />}
        gradient="from-green-500 to-emerald-500"
      />

      <StatCard
        title="Revenue"
        value={`₹${revenue.toLocaleString()}`}
        change="+22%"
        icon={<IndianRupee size={28} />}
        gradient="from-purple-500 to-pink-500"
      />

    </div>
  );
}