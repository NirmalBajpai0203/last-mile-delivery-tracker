"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Driver {
  _id: string;
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  status: string;
}

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  

useEffect(() => {
  const loadDrivers = async () => {
    try {
      const res = await fetch("/api/dashboard/drivers", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch drivers");
      }

      const data: Driver[] = await res.json();
      setDrivers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  void loadDrivers();
}, []);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Drivers
        </h1>

        <Link
          href="/drivers/add"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Add Driver
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-slate-400"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              drivers.map((driver) => (
                <tr
                  key={driver._id}
                  className="border-t border-slate-800"
                >
                  <td className="p-4">{driver.name}</td>
                  <td className="p-4">{driver.email}</td>
                  <td className="p-4">{driver.phone}</td>
                  <td className="p-4">{driver.vehicle}</td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        driver.status === "Available"
                          ? "bg-green-600"
                          : driver.status === "Busy"
                          ? "bg-yellow-500"
                          : "bg-red-600"
                      }`}
                    >
                      {driver.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}