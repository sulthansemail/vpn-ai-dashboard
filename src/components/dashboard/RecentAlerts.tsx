import { CircleAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { recentAlerts } from "@/mock/dashboard";
import { cn } from "@/lib/utils";

const statusStyles = { Investigating: "text-rose-400", Monitoring: "text-amber-400", Resolved: "text-emerald-400" };
export function RecentAlerts() { return <Card className="gap-0 border-white/8 bg-[#111b2e] py-0"><CardContent className="p-5"><div className="flex items-center gap-2"><div className="rounded-lg bg-amber-500/10 p-2 text-amber-400"><CircleAlert className="size-4" /></div><div><h2 className="font-semibold text-white">Recent alerts</h2><p className="text-xs text-slate-500">Events requiring attention</p></div></div><div className="mt-5 space-y-4">{recentAlerts.map((alert) => <div key={alert.title} className="rounded-lg border border-white/8 bg-white/[0.025] p-3"><div className="flex items-start justify-between gap-2"><p className="text-sm font-medium text-slate-200">{alert.title}</p><span className="shrink-0 text-[11px] text-slate-500">{alert.time}</span></div><p className="mt-1 text-xs text-slate-500">{alert.detail}</p><p className={cn("mt-2 text-xs font-medium", statusStyles[alert.status])}>{alert.status}</p></div>)}</div></CardContent></Card>; }
