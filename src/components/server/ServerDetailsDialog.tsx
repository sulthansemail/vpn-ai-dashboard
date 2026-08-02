import { Activity, Bot, MapPin, Users } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CapacityIndicator } from "@/components/server/CapacityIndicator";
import { ProtocolBadge } from "@/components/server/ProtocolBadge";
import { ServerStatusBadge } from "@/components/server/ServerStatusBadge";
import type { Server } from "@/types/server";

export function ServerDetailsDialog({ server, open, onOpenChange }: { server: Server | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  if (!server) return null;
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="border-white/10 bg-[#111b2e] p-6 sm:max-w-lg"><DialogHeader><div className="flex items-start justify-between pr-8"><div><DialogTitle className="text-white">{server.name}</DialogTitle><DialogDescription className="mt-2 flex items-center gap-1"><MapPin className="size-3.5" />{server.city}, {server.country} · {server.provider}</DialogDescription></div><ServerStatusBadge status={server.status} /></div></DialogHeader><div className="grid grid-cols-2 gap-3 py-2 text-sm"><Metric icon={Users} label="Connected users" value={server.users.toLocaleString()} /><Metric icon={Activity} label="Health score" value={`${server.health}%`} /><Metric icon={Bot} label="AI confidence" value={`${server.aiScore}/100`} /><div><p className="mb-1.5 text-xs text-slate-500">Protocol</p><ProtocolBadge protocol={server.protocol} /></div></div><div className="grid grid-cols-3 gap-4 border-t border-white/8 pt-4"><CapacityIndicator label="CPU utilization" value={server.cpu} /><CapacityIndicator label="RAM utilization" value={server.ram} /><CapacityIndicator label="Bandwidth" value={server.bandwidth} /></div></DialogContent></Dialog>;
}
function Metric({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) { return <div className="rounded-lg bg-white/4 p-3"><Icon className="mb-2 size-4 text-blue-400" /><p className="text-xs text-slate-500">{label}</p><p className="mt-1 font-medium text-slate-100">{value}</p></div>; }
