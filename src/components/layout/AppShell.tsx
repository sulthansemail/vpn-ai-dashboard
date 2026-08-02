"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface AppShellProps {
  activeItem: string;
  children: ReactNode;
}

export function AppShell({ activeItem, children }: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d1524] font-sans text-white">
      <Sidebar collapsed={sidebarCollapsed} onCollapsedChange={setSidebarCollapsed} activeItem={activeItem} />
      <Sheet open={mobileNavigationOpen} onOpenChange={setMobileNavigationOpen}>
        <SheetContent side="left" showCloseButton={false} className="w-72 border-white/8 bg-[#0b1220] p-0 sm:w-72 lg:hidden">
          <Sidebar collapsed={false} onCollapsedChange={setSidebarCollapsed} activeItem={activeItem} mobile />
        </SheetContent>
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setMobileNavigationOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
