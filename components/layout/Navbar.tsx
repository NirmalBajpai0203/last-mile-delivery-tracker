"use client";

import { Bell, Search, Menu, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-800 bg-[#020817]/90 px-8 backdrop-blur-xl">

      {/* Left */}

      <div className="flex items-center gap-4">

        <button
  aria-label="Open menu"
  title="Open menu"
  className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
>
          <Menu className="h-6 w-6 text-white" />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-sm text-slate-400">
            Welcome back 👋
          </p>
        </div>

      </div>

      {/* Center */}

      <div className="hidden w-[420px] md:block">

        <div className="relative">

          <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

          <Input
            placeholder="Search Orders..."
            className="border-slate-700 bg-slate-900 pl-10 text-white"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button
  aria-label="Toggle theme"
  title="Toggle theme"
  className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800"
>

          <Sun className="h-5 w-5 text-yellow-400" />

        </button>

       <button
  aria-label="Notifications"
  title="Notifications"
  className="relative rounded-xl bg-slate-900 p-3 hover:bg-slate-800"
>

          <Bell className="h-5 w-5 text-white" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <Avatar className="h-11 w-11 border border-slate-700">

          <AvatarFallback className="bg-blue-600 text-white">

            NB

          </AvatarFallback>

        </Avatar>

      </div>

    </header>
  );
}