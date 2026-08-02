# Roadmap

This roadmap is organized by platform capability and development phase.

## Phase 1 — Frontend prototype

- Build Mission Control dashboard
- Implement sidebar navigation and topbar layout
- Create KPI cards, charts, alerts, and recommendation panels
- Use mock data for early validation
- Establish frontend architecture and reusable UI components

## Phase 2 — CRM integration and ops database

- Define CRM sync API contracts
- Build the Operations Database schema
- Implement sync service between CRM and operations DB
- Migrate mock data flows to service-layer API calls
- Start ingesting business and server telemetry data

## Phase 3 — Operations and monitoring

- Add operations center workflows for incidents, maintenance, and audit logs
- Build monitoring ingestion for server health and availability
- Surface critical alerts and operational status in Mission Control
- Implement metrics for infrastructure performance and capacity

## Phase 4 — AI and decision support

- Build AI capability definitions for capacity prediction, churn risk, and blocked region detection
- Add AI recommendation engine outputs to Mission Control
- Enable advisory actions and task generation
- Begin storing AI outputs in operations database

## Phase 5 — Production readiness

- Add authentication and access control
- Harden backend with PostgreSQL, Redis, and FastAPI
- Add real-time updates using WebSockets
- Containerize services and define CI/CD
- Deploy to internal infrastructure or private cloud
