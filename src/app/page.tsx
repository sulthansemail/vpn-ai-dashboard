"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Activity, Users, Server, HardDrive, DollarSign, AlertTriangle } from "lucide-react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d1524] font-sans text-white">
      <Sidebar collapsed={sidebarCollapsed} onCollapsedChange={setSidebarCollapsed} />

      <Sheet open={mobileNavigationOpen} onOpenChange={setMobileNavigationOpen}>
        <SheetContent side="left" showCloseButton={false} className="w-72 border-white/8 bg-[#0b1220] p-0 sm:w-72 lg:hidden">
          <Sidebar collapsed={false} onCollapsedChange={setSidebarCollapsed} mobile />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setMobileNavigationOpen(true)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <DashboardHeader />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            <StatCard
              title="System Health"
              value="98.6%"
              change="+0.2% from last hour"
              trend="up"
              icon={Activity}
            />
            <StatCard
              title="Active Users"
              value="18,542"
              change="+4.1% today"
              trend="up"
              icon={Users}
            />
            <StatCard
              title="Servers Online"
              value="68"
              change="2 under heavy load"
              trend="alert"
              icon={Server}
            />
            <StatCard
              title="Bandwidth Used"
              value="12.5 TB"
              change="-1.2 TB from yesterday"
              trend="down"
              icon={HardDrive}
            />
            <StatCard
              title="Daily Revenue"
              value="$5,420"
              change="+12.5% this week"
              trend="up"
              icon={DollarSign}
            />
            <StatCard
              title="AI Alerts"
              value="4"
              change="Action required"
              trend="alert"
              icon={AlertTriangle}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
