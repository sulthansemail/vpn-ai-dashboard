"use client";

import {
  BarChart3,
  Bell,
  BrainCircuit,
  Bot,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Server,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, isActive: true },
  { label: "AI Insights", icon: BrainCircuit },
  { label: "Servers", icon: Server },
  { label: "Users", icon: Users },
  { label: "Analytics", icon: BarChart3 },
  { label: "Alerts", icon: Bell },
  { label: "AI Assistant", icon: Bot },
];

interface SidebarProps {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  mobile?: boolean;
}

export function Sidebar({ collapsed, onCollapsedChange, mobile = false }: SidebarProps) {
  return (
    <aside
      className={cn(
        "shrink-0 flex-col border-r border-white/8 bg-[#0b1220] px-3 py-4",
        mobile ? "flex h-full w-full" : "hidden h-screen transition-[width] duration-200 lg:flex",
        !mobile && (collapsed ? "w-20" : "w-64")
      )}
    >
      <div className={cn("mb-8 flex items-center", collapsed ? "justify-center" : "justify-between px-2")}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
            <BrainCircuit className="size-5" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-white">VPN AI</p>
              <p className="text-[10px] font-medium tracking-[0.16em] text-slate-500 uppercase">Operations</p>
            </div>
          )}
        </div>
        {!collapsed && !mobile && <CollapseButton collapsed={collapsed} onChange={onCollapsedChange} />}
      </div>

      <nav className="flex-1 space-y-1" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <NavigationButton key={item.label} item={item} collapsed={collapsed} />
        ))}
      </nav>

      <div className="border-t border-white/8 pt-3">
        <NavigationButton item={{ label: "Settings", icon: Settings }} collapsed={collapsed} />
        {collapsed && !mobile && <CollapseButton collapsed={collapsed} onChange={onCollapsedChange} />}
      </div>
    </aside>
  );
}

function NavigationButton({ item, collapsed }: { item: NavigationItem; collapsed: boolean }) {
  const Icon = item.icon;
  const button = (
    <button
      type="button"
      aria-current={item.isActive ? "page" : undefined}
      className={cn(
        "flex h-10 w-full items-center rounded-lg text-sm font-medium transition-colors",
        collapsed ? "justify-center" : "gap-3 px-3",
        item.isActive
          ? "bg-blue-500 text-white shadow-sm shadow-blue-950/30"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
      )}
    >
      <Icon className="size-4 shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </button>
  );

  return collapsed ? (
    <Tooltip>
      <TooltipTrigger render={button} />
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  ) : (
    button
  );
}

function CollapseButton({ collapsed, onChange }: { collapsed: boolean; onChange: (collapsed: boolean) => void }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      onClick={() => onChange(!collapsed)}
      className="text-slate-400 hover:bg-white/5 hover:text-white"
    >
      {collapsed ? <ChevronRight /> : <ChevronLeft />}
    </Button>
  );
}
