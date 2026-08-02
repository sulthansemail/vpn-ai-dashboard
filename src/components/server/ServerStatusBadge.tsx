import { Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ServerStatus } from "@/types/server";

const statusStyles: Record<ServerStatus, string> = {
  online: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  degraded: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  maintenance: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  offline: "border-slate-500/20 bg-slate-500/10 text-slate-400",
};

export function ServerStatusBadge({ status }: { status: ServerStatus }) {
  return <Badge variant="outline" className={cn("capitalize", statusStyles[status])}><Circle className="size-1.5 fill-current" />{status}</Badge>;
}
