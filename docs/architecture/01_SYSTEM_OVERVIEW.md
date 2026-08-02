# System Overview

The VPN Operations Platform is an internal business operations stack with a strict separation from the CRM.

## Architecture

The system is organized as:

```
CRM
 │
 │
Sync Service
 │
 ▼
Operations Database
 │
 ┌────────┬─────────┐
 │        │         │
Monitoring Analytics AI
 │        │         │
 └────────┴─────────┘
          │
          ▼
 Mission Control Dashboard
```

## Layers

### 1. CRM and transactional systems

- CRM remains the source of truth for transactions.
- Requires data for users, subscriptions, payments, referrals, and servers.

### 2. Sync Service

- Moves data from CRM to the Operations Database.
- Enforces one-way sync and data validation.

### 3. Operations Database

- Stores synchronized CRM records, telemetry, alerts, and AI outputs.
- Optimized for analytics, historical queries, and dashboard reads.

### 4. Intelligence layer

- Includes analytics, monitoring, alerting, and AI recommendation engines.
- Produces advisory outputs for Mission Control.

### 5. Presentation layer

- Mission Control dashboard and supporting frontend modules.
- Consumes only service-layer APIs.

## Principles

- CRM owns transactions; Operations Platform owns decisions.
- The dashboard never communicates directly with CRM.
- All frontend modules consume data through the service layer.
- AI outputs are advisory, not automatic CRM updates.
