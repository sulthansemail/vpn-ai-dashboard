import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, LucideIcon, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral" | "alert";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, trend = "neutral", icon: Icon }: StatCardProps) {
  const trendStyles = {
    up: "text-emerald-400",
    down: "text-rose-400",
    neutral: "text-slate-400",
    alert: "text-amber-400",
  };
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;

  return (
    <Card className="gap-0 border-white/8 bg-[#111b2e] py-0 shadow-sm shadow-black/20 transition-colors hover:border-white/12">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
            <Icon className="h-4 w-4 text-blue-400" />
          </div>
        </div>
        
        <div className="mt-5">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{value}</h3>
          {change && (
            <span className={cn("mt-2 flex items-center gap-1 text-xs font-medium", trendStyles[trend])}>
              <TrendIcon className="size-3" />
              {change}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
