# Monitoring Architecture

The monitoring architecture collects infrastructure data and exposes it to Mission Control through the Operations Database.

## Monitoring scope

- Server availability and uptime
- Bandwidth usage and capacity
- Latency and packet loss
- Error rates and connection failures
- Deployment status and maintenance windows

## Data flow

1. Monitoring agents or collectors gather telemetry from VPN servers and network endpoints.
2. Metrics are ingested into the Operations Database or a dedicated monitoring store.
3. Alert rules evaluate anomalies and threshold breaches.
4. Mission Control surfaces active alerts and trend summaries.

## Key design principles

- Decouple monitoring ingestion from the CRM.
- Keep monitoring data in the operations layer, not the CRM database.
- Store time-series or aggregated snapshots optimized for dashboard queries.
- Expose a clean service interface for frontend consumption.
- Maintain alert state and event history for incident investigation.
