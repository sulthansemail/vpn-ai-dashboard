import type { Server } from "@/types/server";

export const servers: Server[] = [
  { id: "srv-01", name: "us-east-01", country: "United States", city: "Ashburn", provider: "DigitalOcean", protocol: "WireGuard", users: 1842, cpu: 42, ram: 58, bandwidth: 61, health: 99, aiScore: 97, status: "online" },
  { id: "srv-02", name: "de-central-01", country: "Germany", city: "Frankfurt", provider: "Hetzner", protocol: "WireGuard", users: 1627, cpu: 55, ram: 63, bandwidth: 72, health: 98, aiScore: 94, status: "online" },
  { id: "srv-03", name: "sg-edge-01", country: "Singapore", city: "Singapore", provider: "Vultr", protocol: "OpenVPN", users: 938, cpu: 78, ram: 81, bandwidth: 88, health: 91, aiScore: 72, status: "degraded" },
  { id: "srv-04", name: "gb-london-01", country: "United Kingdom", city: "London", provider: "Linode", protocol: "IKEv2", users: 1203, cpu: 39, ram: 49, bandwidth: 54, health: 99, aiScore: 96, status: "online" },
  { id: "srv-05", name: "jp-tokyo-01", country: "Japan", city: "Tokyo", provider: "AWS", protocol: "WireGuard", users: 764, cpu: 32, ram: 45, bandwidth: 41, health: 97, aiScore: 93, status: "maintenance" },
  { id: "srv-06", name: "ca-toronto-01", country: "Canada", city: "Toronto", provider: "DigitalOcean", protocol: "OpenVPN", users: 1108, cpu: 47, ram: 52, bandwidth: 57, health: 98, aiScore: 95, status: "online" },
  { id: "srv-07", name: "au-sydney-01", country: "Australia", city: "Sydney", provider: "Akamai", protocol: "IKEv2", users: 389, cpu: 12, ram: 24, bandwidth: 19, health: 100, aiScore: 99, status: "offline" },
];

export const countries = [...new Set(servers.map((server) => server.country))];
