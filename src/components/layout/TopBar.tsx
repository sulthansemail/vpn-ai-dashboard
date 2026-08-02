import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/8 bg-[#0d1524]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <Button variant="ghost" size="icon" className="text-slate-400 lg:hidden" onClick={onMenuClick} aria-label="Open navigation">
          <Menu />
        </Button>
        <div className="relative hidden w-full max-w-md sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="text"
            aria-label="Search operations data"
            placeholder="Search servers, users, or AI insights..."
            className="h-9 w-full border-white/8 bg-white/5 pl-9 text-sm text-slate-200 placeholder:text-slate-500 focus-visible:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-100" aria-label="View notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-[#0d1524]" />
        </Button>
        
        <div className="mx-1 h-8 w-px bg-white/8" />
        
        <button type="button" className="flex items-center gap-3 rounded-lg text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Admin User</p>
            <p className="text-xs text-slate-500">System Operator</p>
          </div>
          <Avatar className="h-9 w-9 border border-slate-700">
            <AvatarFallback className="bg-blue-600 text-white font-medium">AD</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
}
