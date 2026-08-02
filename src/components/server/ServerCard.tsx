import { Bot, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CapacityIndicator } from "@/components/server/CapacityIndicator";
import { ProtocolBadge } from "@/components/server/ProtocolBadge";
import { ServerStatusBadge } from "@/components/server/ServerStatusBadge";
import type { Server } from "@/types/server";

interface ServerCardProps { server: Server; onViewDetails: (server: Server) => void; }

export function ServerCard({ server, onViewDetails }: ServerCardProps) {
  return (
    <Card className="gap-0 border-white/8 bg-[#111b2e] py-0">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-white">{server.name}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin className="size-3" />{server.city}, {server.country}</p></div><ServerStatusBadge status={server.status} /></div>
        <div className="mt-4 flex items-center justify-between"><ProtocolBadge protocol={server.protocol} /><span className="flex items-center gap-1 text-sm text-slate-300"><Users className="size-3.5 text-slate-500" />{server.users.toLocaleString()}</span></div>
        <div className="mt-5 grid grid-cols-3 gap-3"><CapacityIndicator label="CPU" value={server.cpu} /><CapacityIndicator label="RAM" value={server.ram} /><CapacityIndicator label="Band" value={server.bandwidth} /></div>
        <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4"><span className="flex items-center gap-1.5 text-xs text-slate-400"><Bot className="size-3.5 text-blue-400" />AI score <strong className="text-slate-200">{server.aiScore}</strong></span><Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-500/10 hover:text-blue-300" onClick={() => onViewDetails(server)}>View details</Button></div>
      </CardContent>
    </Card>
  );
}
