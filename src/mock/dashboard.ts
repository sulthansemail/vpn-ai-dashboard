import { Activity, Bot, CircleAlert, Globe2, Server, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const executiveMetrics = [
  { title: "System health", value: "99.42%", change: "0.18% above target", trend: "up" as const, icon: Activity },
  { title: "Online servers", value: "68 / 71", change: "2 at high capacity", trend: "alert" as const, icon: Server },
  { title: "Active users", value: "18,542", change: "+6.8% this week", trend: "up" as const, icon: Users },
  { title: "Today’s revenue", value: "$5,420", change: "+12.5% vs. Tuesday", trend: "up" as const, icon: Globe2 },
];

export const revenueTrend = [
  { label: "Mon", value: 4620 }, { label: "Tue", value: 4810 }, { label: "Wed", value: 5140 }, { label: "Thu", value: 4980 }, { label: "Fri", value: 5420 }, { label: "Sat", value: 5730 }, { label: "Sun", value: 6010 },
];

export const userGrowth = [
  { label: "Mon", value: 16820 }, { label: "Tue", value: 17150 }, { label: "Wed", value: 17580 }, { label: "Thu", value: 17920 }, { label: "Fri", value: 18542 }, { label: "Sat", value: 18860 }, { label: "Sun", value: 19240 },
];

export interface Recommendation { title: string; detail: string; priority: "High" | "Medium" | "Low"; impact: string; }
export const recommendations: Recommendation[] = [
  { title: "Rebalance Singapore traffic", detail: "sg-edge-01 is at 88% bandwidth capacity during peak hours.", priority: "High", impact: "Avoids service degradation" },
  { title: "Schedule Tokyo maintenance", detail: "A kernel upgrade is available for the Tokyo cluster.", priority: "Medium", impact: "Improves stability score" },
  { title: "Increase Frankfurt capacity", detail: "Weekly user growth is outpacing forecast by 9%.", priority: "Low", impact: "Protects future headroom" },
];

export interface Alert { title: string; detail: string; status: "Investigating" | "Resolved" | "Monitoring"; time: string; }
export const recentAlerts: Alert[] = [
  { title: "Elevated latency in Singapore", detail: "p95 latency reached 142 ms", status: "Investigating", time: "8 min ago" },
  { title: "Frankfurt capacity threshold", detail: "Traffic crossed 70% utilization", status: "Monitoring", time: "32 min ago" },
  { title: "Toronto packet loss normalized", detail: "Network path recovered automatically", status: "Resolved", time: "1 hr ago" },
];

export const topCountries = [
  { country: "United States", users: 5240, share: 28.3, code: "US" }, { country: "Germany", users: 2820, share: 15.2, code: "DE" }, { country: "United Kingdom", users: 1984, share: 10.7, code: "GB" }, { country: "Japan", users: 1610, share: 8.7, code: "JP" },
];

export interface TimelineEvent { title: string; detail: string; time: string; icon: LucideIcon; color: string; }
export const activityTimeline: TimelineEvent[] = [
  { title: "Capacity policy updated", detail: "Frankfurt auto-scale threshold set to 75%.", time: "12 min ago", icon: Server, color: "text-blue-400" },
  { title: "AI recommendation acknowledged", detail: "Singapore traffic rebalance assigned to NOC.", time: "26 min ago", icon: Bot, color: "text-violet-400" },
  { title: "Health check completed", detail: "71 servers assessed across 14 regions.", time: "48 min ago", icon: Activity, color: "text-emerald-400" },
  { title: "New alert created", detail: "High latency condition detected in Singapore.", time: "1 hr ago", icon: CircleAlert, color: "text-amber-400" },
];
