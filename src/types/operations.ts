export type AlertSeverity = "critical" | "warning" | "info";
export interface OperationAlert { id: string; title: string; detail: string; severity: AlertSeverity; time: string; status: string; }
export interface OperationEvent { id: string; title: string; detail: string; time: string; category: string; }
export interface OperationTask { id: string; title: string; owner: string; priority: "P0" | "P1" | "P2"; due: string; }
