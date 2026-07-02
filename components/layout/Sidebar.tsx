"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      hidden
      lg:flex
      h-screen
      w-72
      flex-col
      border-r
      border-slate-800
      bg-[#020817]/95
      backdrop-blur-xl
      sticky
      top-0
      "
    >
      {/* ---------- Logo ---------- */}

      <div className="border-b border-slate-800 px-6 py-6">
        <Logo />
      </div>

      {/* ---------- Navigation ---------- */}

      <ScrollArea className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {sidebarLinks.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (

              <Link
                key={item.title}
                href={item.href}
                className={cn(

                  "group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300",

                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"

                )}
              >

                <div className="flex items-center gap-3">

                  <Icon
                    className={cn(
                      "h-5 w-5 transition-all duration-300",

                      active
                        ? "scale-110"
                        : "group-hover:scale-110"
                    )}
                  />

                  <span className="font-medium">

                    {item.title}

                  </span>

                </div>

                {"badge" in item && item.badge && (

                  <Badge
                    className="
                    rounded-full
                    bg-blue-500
                    text-white
                    hover:bg-blue-500
                    "
                  >

                    {item.badge}

                  </Badge>

                )}

              </Link>

            );

          })}

        </div>

      </ScrollArea>
            {/* ---------- User Section ---------- */}

      <div className="border-t border-slate-800 p-4">

        <div
          className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/60
          p-4
          backdrop-blur-lg
          "
        >

          <div className="flex items-center gap-3">

            <div className="relative">

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-cyan-400
                text-lg
                font-bold
                text-white
                "
              >
                NB
              </div>

              <span
                className="
                absolute
                bottom-0
                right-0
                h-3
                w-3
                rounded-full
                border-2
                border-slate-900
                bg-emerald-500
                "
              />

            </div>

            <div className="flex-1">

              <p className="font-semibold text-white">

                Nirmal Bajpai

              </p>

              <p className="text-xs text-slate-400">

                Administrator

              </p>

            </div>

          </div>

        </div>

        {/* Logout Button */}

        <button
          className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          border
          border-red-500/20
          bg-red-500/10
          py-3
          font-medium
          text-red-400
          transition-all
          duration-300
          hover:bg-red-500
          hover:text-white
          "
        >

          Logout

        </button>



    
        {/* ---------- Footer ---------- */}

    <div className="border-t border-slate-800 px-6 py-4">
      <p className="text-center text-xs text-slate-500">
        LastMile Tracker v1.0
      </p>
    </div>

    </div>

  </aside>
  );
}