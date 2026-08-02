# Data Pipeline

The data pipeline describes how information moves from source systems into Mission Control.

## Flow

1. CRM and external systems produce transactional and event data.
2. The sync service ingests and normalizes the source data.
3. Data is stored in the Operations Database.
4. The intelligence layer processes analytics, monitoring, and AI outputs.
5. Mission Control consumes the derived data via service-layer APIs.

## Pipeline components

### Source systems

- CRM transaction system
- Server monitoring and telemetry
- External analytics feeds
- Support and incident tracking

### Sync service

- Fetches CRM records on a schedule
- Validates and transforms data for the Operations Database
- Supports delta sync and webhook-driven updates

### Operations Database

- Stores synchronized transactional data, monitoring metrics, and AI outputs
- Maintains historical records for trend analysis
- Provides query-optimized views for the dashboard

### Intelligence layer

- Runs analytics and aggregation
- Generates alerts and risk scores
- Produces AI recommendations and forecasts

### Presentation layer

- Frontend routes request data through the service layer
- Mission Control and supporting pages display derived operational insight

## Design principles

- Keep the operations pipeline independent of the CRM.
- Store both current state and historical trends.
- Preserve auditability of sync and AI results.
- Use service-layer APIs to decouple frontend from raw data sources.
