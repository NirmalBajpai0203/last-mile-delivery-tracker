"use client";

import { useEffect, useState } from "react";
import { MapPin, Truck, Clock, Wifi } from "lucide-react";

interface Driver {
  _id: string;
  name: string;
  vehicle: string;
  status: string;
}

export default function LiveTracking() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    async function fetchDrivers() {
      const res = await fetch("/api/dashboard/drivers");
      const data = await res.json();
      setDrivers(data);
    }

    fetchDrivers();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Live Driver Tracking
        </h2>

        <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
          <Wifi size={14} />
          Live
        </span>
      </div>

      <div className="space-y-4">
        {drivers.map((driver) => (
          <div
            key={driver._id}
            className="rounded-xl border border-slate-800 bg-slate-800/40 p-4 transition hover:border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  {driver.name}
                </h3>

                <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                  <Truck size={14} />
                  {driver.vehicle}
                </p>
              </div>

              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                {driver.status}
              </span>
            </div>

            <div className="mt-4 flex justify-between text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Clock size={15} />
                Live Driver
              </span>

              <span className="flex items-center gap-2 text-emerald-400">
                <MapPin size={15} />
                GPS Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}