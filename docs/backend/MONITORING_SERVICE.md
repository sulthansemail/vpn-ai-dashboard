# Monitoring Service

The Monitoring Service collects infrastructure telemetry and creates operational alerts.

## Purpose

- Ingest server health metrics
- Detect anomalies and threshold breaches
- Provide monitoring data to Mission Control and Operations pages

## Key functions

- Collect server telemetry such as availability, latency, and bandwidth
- Store monitoring events in the Operations Database
- Trigger alerts for critical conditions
- Provide aggregated health summaries to the frontend

## Integration

- Monitoring data is separate from CRM sync data
- Monitoring service outputs are consumed by the frontend through the service layer
- Alert state is persisted in the Operations Database for history and investigation
