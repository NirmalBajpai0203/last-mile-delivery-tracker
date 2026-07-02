"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/admin"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
        <Truck className="h-6 w-6 text-white" />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wide text-white">
          LastMile
        </span>

        <span className="text-xs text-slate-400">
          Delivery Tracker
        </span>
      </div>
    </Link>
  );
}