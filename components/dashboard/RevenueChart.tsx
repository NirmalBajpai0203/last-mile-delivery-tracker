"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { day: "Mon", revenue: 3200 },
  { day: "Tue", revenue: 4100 },
  { day: "Wed", revenue: 3800 },
  { day: "Thu", revenue: 5600 },
  { day: "Fri", revenue: 4900 },
  { day: "Sat", revenue: 6900 },
  { day: "Sun", revenue: 6200 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">
            Revenue Analytics
          </h2>

          <p className="text-sm text-slate-400">
            Last 7 Days Revenue
          </p>

        </div>

        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
          Live
        </span>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />

                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />

              </linearGradient>

            </defs>

            <CartesianGrid stroke="#1e293b" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#colorRevenue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}