"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

interface TrendDatum { label: string; value: number; }
interface TrendChartProps { title: string; value: string; change: string; data: TrendDatum[]; color: "blue" | "violet"; valueFormatter: (value: number) => string; }

const colors = { blue: "#60a5fa", violet: "#a78bfa" };

export function TrendChart({ title, value, change, data, color, valueFormatter }: TrendChartProps) {
  return <Card className="gap-0 border-white/8 bg-[#111b2e] py-0 shadow-sm shadow-black/20"><CardContent className="p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-400">{title}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p></div><span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">{change}</span></div><div className="mt-6 h-56"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{ top: 6, right: 0, left: -18, bottom: 0 }}><CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" /><XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} dy={8} /><YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 11 }} tickFormatter={valueFormatter} width={48} /><Tooltip cursor={{ stroke: "rgba(255,255,255,0.15)" }} contentStyle={{ background: "#172033", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} labelStyle={{ color: "#94a3b8" }} formatter={(chartValue) => [typeof chartValue === "number" ? valueFormatter(chartValue) : "—", title]} /><Area type="monotone" dataKey="value" stroke={colors[color]} strokeWidth={2} fill={colors[color]} fillOpacity={0.12} /></AreaChart></ResponsiveContainer></div></CardContent></Card>;
}
