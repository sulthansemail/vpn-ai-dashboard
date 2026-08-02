import { Plus, Server as ServerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function DeployServerDialog() {
  return <Dialog><DialogTrigger render={<Button><Plus />Deploy server</Button>} /><DialogContent className="border-white/10 bg-[#111b2e] p-6 sm:max-w-lg"><DialogHeader><DialogTitle className="flex items-center gap-2 text-white"><ServerIcon className="size-4 text-blue-400" />Deploy a server</DialogTitle><DialogDescription>Configure a new VPN server. This frontend preview does not deploy infrastructure.</DialogDescription></DialogHeader><div className="grid gap-4 py-2 sm:grid-cols-2"><Field label="Server name" placeholder="e.g. us-west-01" /><Field label="Provider" placeholder="Select provider" /><Field label="Region" placeholder="Select region" /><Field label="Protocol" placeholder="WireGuard" /></div><DialogFooter showCloseButton><Button>Prepare deployment</Button></DialogFooter></DialogContent></Dialog>;
}

function Field({ label, placeholder }: { label: string; placeholder: string }) { return <label className="grid gap-1.5 text-xs font-medium text-slate-400">{label}<Input placeholder={placeholder} className="border-white/8 bg-white/5 text-slate-100 placeholder:text-slate-600" /></label>; }
