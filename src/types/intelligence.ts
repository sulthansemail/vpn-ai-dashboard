export type RecommendationSeverity = "Critical" | "High" | "Medium" | "Low";
export interface Recommendation { id: string; title: string; description: string; category: string; severity: RecommendationSeverity; confidence: number; action: string; timestamp: string; status: "New" | "Acknowledged" | "Completed"; }
export interface Prediction { label: string; value: string; detail: string; confidence: number; tone: "blue" | "amber" | "rose" | "emerald"; }
