export type ServerStatus = "online" | "degraded" | "maintenance" | "offline";
export type Protocol = "WireGuard" | "OpenVPN" | "IKEv2";

export interface Server {
  id: string;
  name: string;
  country: string;
  city: string;
  provider: string;
  protocol: Protocol;
  users: number;
  cpu: number;
  ram: number;
  bandwidth: number;
  health: number;
  aiScore: number;
  status: ServerStatus;
}
