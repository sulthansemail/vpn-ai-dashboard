import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { SubscriptionStatus } from "@/mock/customers";

const styles: Record<SubscriptionStatus, string> = { active: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400", trial: "border-blue-500/20 bg-blue-500/10 text-blue-400", past_due: "border-amber-500/20 bg-amber-500/10 text-amber-400", cancelled: "border-slate-500/20 bg-slate-500/10 text-slate-400" };
export function SubscriptionBadge({ status }: { status: SubscriptionStatus }) { return <Badge variant="outline" className={cn("capitalize", styles[status])}>{status.replace("_", " ")}</Badge>; }
