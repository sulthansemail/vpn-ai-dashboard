import { Badge } from "@/components/ui/badge";
import type { Protocol } from "@/types/server";

const protocolStyles: Record<Protocol, string> = {
  WireGuard: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
  OpenVPN: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  IKEv2: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300",
};

export function ProtocolBadge({ protocol }: { protocol: Protocol }) {
  return <Badge variant="outline" className={protocolStyles[protocol]}>{protocol}</Badge>;
}
