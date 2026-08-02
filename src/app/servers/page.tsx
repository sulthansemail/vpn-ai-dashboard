"use client";

import { useMemo, useState } from "react";
import { Server as ServerIcon } from "lucide-react";
import { ServerCard } from "@/components/server/ServerCard";
import { ServerDetailsDialog } from "@/components/server/ServerDetailsDialog";
import { DeployServerDialog } from "@/components/server/DeployServerDialog";
import { ServerFilters, type ServerFiltersValue } from "@/components/server/ServerFilters";
import { ServerTable } from "@/components/server/ServerTable";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { countries, servers } from "@/mock/servers";
import type { Server } from "@/types/server";

const initialFilters: ServerFiltersValue = { query: "", country: "all", protocol: "all", status: "all" };

export default function ServersPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  const filteredServers = useMemo(() => servers.filter((server) => {
    const query = filters.query.toLowerCase();
    const matchesQuery = !query || [server.name, server.city, server.country, server.provider].some((value) => value.toLowerCase().includes(query));
    return matchesQuery && (filters.country === "all" || server.country === filters.country) && (filters.protocol === "all" || server.protocol === filters.protocol) && (filters.status === "all" || server.status === filters.status);
  }), [filters]);

  return <div className="flex min-h-screen bg-[#0d1524] font-sans text-white">
    <Sidebar collapsed={sidebarCollapsed} onCollapsedChange={setSidebarCollapsed} activeItem="Servers" />
    <Sheet open={mobileNavigationOpen} onOpenChange={setMobileNavigationOpen}><SheetContent side="left" showCloseButton={false} className="w-72 border-white/8 bg-[#0b1220] p-0 sm:w-72 lg:hidden"><Sidebar collapsed={false} onCollapsedChange={setSidebarCollapsed} activeItem="Servers" mobile /></SheetContent></Sheet>
    <div className="flex min-w-0 flex-1 flex-col"><TopBar onMenuClick={() => setMobileNavigationOpen(true)} />
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-sm font-medium text-blue-400">Infrastructure</p><h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"><ServerIcon className="size-6 text-blue-400" />Server management</h1><p className="mt-2 text-sm text-slate-400">Manage capacity, protocols, and health across your VPN network.</p></div><DeployServerDialog /></div>
        <section className="mt-8 rounded-xl border border-white/8 bg-[#111b2e] p-4 sm:p-5"><ServerFilters value={filters} countries={countries} onChange={setFilters} /><div className="mt-5 flex items-center justify-between"><p className="text-sm text-slate-400"><span className="font-medium text-slate-200">{filteredServers.length}</span> servers found</p><p className="text-xs text-slate-500">Last synced moments ago</p></div></section>
        <section className="mt-5 hidden overflow-hidden rounded-xl border border-white/8 bg-[#111b2e] lg:block"><ServerTable servers={filteredServers} onViewDetails={setSelectedServer} /></section>
        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:hidden">{filteredServers.map((server) => <ServerCard key={server.id} server={server} onViewDetails={setSelectedServer} />)}</section>
        {filteredServers.length === 0 && <div className="mt-5 rounded-xl border border-dashed border-white/10 p-12 text-center text-sm text-slate-500">No servers match the selected filters.</div>}
      </main>
    </div>
    <ServerDetailsDialog server={selectedServer} open={Boolean(selectedServer)} onOpenChange={(open) => { if (!open) setSelectedServer(null); }} />
  </div>;
}
