import { CalendarDays } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-sm font-medium text-blue-400">Overview</p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Operations dashboard</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Monitor VPN infrastructure health, capacity, and AI-prioritized alerts in one place.</p>
      </div>
      <div className="flex items-center gap-2 self-start rounded-lg border border-white/8 bg-white/4 px-3 py-2 text-xs font-medium text-slate-400 sm:self-auto">
        <CalendarDays className="size-3.5 text-slate-500" />
        Updated just now
      </div>
    </div>
  );
}
