export interface TrendPoint { label: string; value: number; }
export interface BusinessMetric { label: string; value: string; change: string; tone: "positive" | "warning" | "neutral"; }
export interface CountryRevenue { country: string; revenue: number; growth: number; subscribers: number; }
export interface PlanMetric { name: string; subscribers: number; revenue: string; share: number; }
