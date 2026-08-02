import { cn } from "@/lib/utils";

interface CapacityIndicatorProps { label: string; value: number; }

export function CapacityIndicator({ label, value }: CapacityIndicatorProps) {
  const color = value >= 80 ? "bg-rose-400" : value >= 65 ? "bg-amber-400" : "bg-emerald-400";
  return (
    <div className="min-w-20">
      <div className="mb-1 flex justify-between text-[11px] text-slate-500"><span>{label}</span><span className="text-slate-300">{value}%</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/8"><div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} /></div>
    </div>
  );
}
