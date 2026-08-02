import { operationEvents } from "@/mock/operations"; export function DeploymentHistory(){return <div className="text-sm text-slate-400">{operationEvents[1].title} · {operationEvents[1].time}</div>}
