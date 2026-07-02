"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex flex-1 flex-col">

          <Navbar />

          <main className="flex-1 bg-slate-950 p-6">

            {children}

          </main>

        </div>

      </div>

    </div>
  );
}