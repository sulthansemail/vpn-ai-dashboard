# Operations Database

The Operations Database is a separate data store that supports mission control, analytics, monitoring, and AI.

## Why a separate database?

The CRM remains the system of record for transactions.
The Operations Database is designed for operational visibility, not transactional integrity.

### Reasons

- Avoid direct dashboard access to production CRM data
- Enable specialized analytical schemas and time-series storage
- Support historical and aggregated analytics without impacting CRM performance
- Persist AI outputs, scoring, and recommendation history
- House operational metadata such as incidents, alerts, and audit logs

## What it stores

- Synchronized CRM business data
  - users, subscriptions, payments, referrals, server inventory
- Monitoring and telemetry data
  - server health, availability, latency, packet loss
- Operational events
  - incidents, maintenance windows, deployments, alerts
- AI outputs
  - forecasts, risk scores, recommendations, annotations
- Historical analytics
  - time-series trends, weekly/monthly aggregation, cohort metrics

## Synchronization model

- CRM sync service copies selected transactional records into the Operations Database
- Sync is one-way: CRM → Operations Database
- Mission Control consumes only service-layer endpoints backed by the Operations Database
- The dashboard never communicates directly with CRM

## Benefits

- Clear separation of responsibility between transaction systems and operations systems
- Faster dashboard response for analytics and monitoring
- Consistent data model for AI and decision support
- Safer integration layer with audit and retry logic
