import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  gradient: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  gradient,
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

          <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {change}
          </span>

        </div>

        <div
          className={`rounded-2xl bg-gradient-to-br ${gradient} p-4 text-white shadow-lg`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}