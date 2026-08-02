# API Specification

This document describes the internal API contracts for the Operations Platform.

## Service layer principles

- The frontend never queries CRM directly.
- All data flows through the service layer.
- APIs are designed around the Operations Database and analytics outputs.

## Core API groups

### Intelligence
- `GET /api/intelligence/summary` — business and AI dashboard summary
- `GET /api/intelligence/recommendations` — AI recommendations list
- `GET /api/intelligence/predictions` — forecast and risk cards

### Operations
- `GET /api/operations/overview` — operational status and key metrics
- `GET /api/operations/alerts` — critical alerts
- `GET /api/operations/incidents` — incident timeline and status
- `GET /api/operations/tasks` — prioritized task queue

### Monitoring
- `GET /api/monitoring/servers` — server health and capacity
- `GET /api/monitoring/events` — server event history
- `GET /api/monitoring/maintenance` — upcoming maintenance windows

### Business
- `GET /api/business/metrics` — revenue, growth, and subscription metrics
- `GET /api/business/customers` — customer and subscription health data

### CRM sync
- `POST /api/sync/crm` — trigger sync from CRM to operations DB
- `GET /api/sync/status` — sync job state and last run

## Data ownership reminders

- Transactional data is owned by the CRM.
- Operations Platform owns derived analytics, AI outputs, and alert state.
