import { operationEvents } from "@/mock/operations"; export function ServerEvents(){return <p className="text-sm text-slate-400">{operationEvents[2].title}: {operationEvents[2].detail}</p>}
