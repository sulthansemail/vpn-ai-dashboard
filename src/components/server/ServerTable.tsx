import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CapacityIndicator } from "@/components/server/CapacityIndicator";
import { ProtocolBadge } from "@/components/server/ProtocolBadge";
import { ServerStatusBadge } from "@/components/server/ServerStatusBadge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Server } from "@/types/server";

interface ServerTableProps { servers: Server[]; onViewDetails: (server: Server) => void; }

export function ServerTable({ servers, onViewDetails }: ServerTableProps) {
  return <Table><TableCaption className="sr-only">VPN infrastructure server inventory</TableCaption><TableHeader><TableRow className="border-white/8 hover:bg-transparent">{["Server", "Protocol", "Users", "Capacity", "Health", "AI score", "Status", ""].map((heading) => <TableHead key={heading} className="h-12 px-4 text-xs font-medium text-slate-500">{heading}</TableHead>)}</TableRow></TableHeader><TableBody>{servers.map((server) => <TableRow key={server.id} className="border-white/8 hover:bg-white/3"><TableCell className="px-4"><p className="font-medium text-slate-100">{server.name}</p><p className="mt-0.5 text-xs text-slate-500">{server.city}, {server.country} · {server.provider}</p></TableCell><TableCell className="px-4"><ProtocolBadge protocol={server.protocol} /></TableCell><TableCell className="px-4 font-medium text-slate-200">{server.users.toLocaleString()}</TableCell><TableCell className="min-w-72 px-4"><div className="flex gap-3"><CapacityIndicator label="CPU" value={server.cpu} /><CapacityIndicator label="RAM" value={server.ram} /><CapacityIndicator label="Band" value={server.bandwidth} /></div></TableCell><TableCell className="px-4 font-medium text-slate-200">{server.health}%</TableCell><TableCell className="px-4"><span className={server.aiScore < 80 ? "text-amber-400" : "text-emerald-400"}>{server.aiScore}</span></TableCell><TableCell className="px-4"><ServerStatusBadge status={server.status} /></TableCell><TableCell className="px-4"><Button variant="ghost" size="icon-sm" aria-label={`View ${server.name} details`} onClick={() => onViewDetails(server)}><MoreHorizontal /></Button></TableCell></TableRow>)}</TableBody></Table>;
}
