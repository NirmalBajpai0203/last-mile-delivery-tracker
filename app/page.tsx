import DashboardStats from "@/components/dashboard/DashboardStats";
import TrackingMapWrapper from "@/components/dashboard/TrackingMapWrapper";
import LiveTracking from "@/components/dashboard/LiveTracking";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentOrders from "@/components/dashboard/RecentOrders";

import DashboardLayout from "@/components/layout/DashboardLayout";


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

      <DashboardStats />
{/* Revenue Chart */}

<RevenueChart />

{/* Bottom Section */}

<div className="grid gap-6 xl:grid-cols-2">
  <RecentOrders />
  <LiveTracking />
</div>

<div className="mt-6">
 <TrackingMapWrapper />
</div>
</div>

        
    </DashboardLayout>
  );
}