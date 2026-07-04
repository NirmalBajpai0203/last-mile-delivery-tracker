"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalDrivers: number;
  activeDrivers: number;
  totalDeliveries: number;
  delivered: number;
};

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalDrivers: 0,
    activeDrivers: 0,
    totalDeliveries: 0,
    delivered: 0,
  });

  useEffect(() => {
    fetch("/api/dashboard/stats")
      .then((res) => res.json())
      .then(setStats);
  }, []);

  const cards = [
    {
      title: "Total Drivers",
      value: stats.totalDrivers,
    },
    {
      title: "Active Drivers",
      value: stats.activeDrivers,
    },
    {
      title: "Total Deliveries",
      value: stats.totalDeliveries,
    },
    {
      title: "Delivered",
      value: stats.delivered,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <h3 className="text-slate-400">{card.title}</h3>

          <p className="mt-4 text-4xl font-bold text-white">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}