import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import StatCard from "@/components/dashboard/StatCard";
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
    change="+12%"
    icon={<Package size={28} />}
    gradient="from-blue-500 to-cyan-500"
  />

  <StatCard
    title="Active Deliveries"
    value="48"
    change="+8%"
    icon={<Truck size={28} />}
    gradient="from-orange-500 to-red-500"
  />

  <StatCard
    title="Completed"
    value="108"
    change="+18%"
    icon={<CheckCircle size={28} />}
    gradient="from-green-500 to-emerald-500"
  />

  <StatCard
    title="Revenue"
    value="₹24,500"
    change="+22%"
    icon={<IndianRupee size={28} />}
    gradient="from-purple-500 to-pink-500"
  />

</div>
{/* Revenue Chart */}

<RevenueChart />

{/* Bottom Section */}

<div className="grid gap-6 xl:grid-cols-2">

  <RecentOrders />

  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

    <h2 className="mb-6 text-xl font-semibold text-white">
      Delivery Status
    </h2>

    <div className="space-y-4">

      <div className="rounded-xl bg-slate-800 p-4">
        🚚 Driver Rahul is delivering Order #1025
      </div>

      <div className="rounded-xl bg-slate-800 p-4">
        📦 48 Orders currently in transit
      </div>

      <div className="rounded-xl bg-slate-800 p-4">
        ✅ 108 Orders delivered today
      </div>

      <div className="rounded-xl bg-slate-800 p-4">
        ⏳ Average delivery time : 24 mins
      </div>

    </div>

  </div>

</div>
</div>

        
    </DashboardLayout>
  );
}