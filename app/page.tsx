import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Package,
  Truck,
  CheckCircle,
  IndianRupee,
} from "lucide-react";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Heading */}

        <div>
          <h2 className="text-3xl font-bold text-white">
            Last Mile Delivery Dashboard
          </h2>

          <p className="mt-2 text-slate-400">
            Monitor deliveries, drivers and business performance in real time.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Today's Orders"
            value="156"
            icon={<Package className="h-7 w-7" />}
            color="from-blue-500 to-cyan-500"
          />

          <StatCard
            title="Active Deliveries"
            value="48"
            icon={<Truck className="h-7 w-7" />}
            color="from-orange-500 to-red-500"
          />

          <StatCard
            title="Completed"
            value="108"
            icon={<CheckCircle className="h-7 w-7" />}
            color="from-green-500 to-emerald-500"
          />

          <StatCard
            title="Revenue"
            value="₹24,500"
            icon={<IndianRupee className="h-7 w-7" />}
            color="from-purple-500 to-pink-500"
          />

        </div>

        {/* Chart Placeholder */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-xl font-semibold text-white">
              Revenue Analytics
            </h3>

            <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
              Live
            </span>

          </div>

          <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-700 text-slate-500">
            Revenue Chart (Coming Next)
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:scale-[1.02]">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

        </div>

        <div
          className={`rounded-2xl bg-gradient-to-br ${color} p-4 text-white`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}