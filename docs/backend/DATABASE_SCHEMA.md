# Database Schema

This document defines the high-level schema for the Operations Database.

## Core entities

- `users` — synchronized CRM users
- `subscriptions` — subscription status and plans
- `servers` — server inventory and metadata
- `payments` — payment history
- `referrals` — referral performance
- `alerts` — active and historical alerts
- `recommendations` — AI-generated advisory items
- `predictions` — forecast values and risk estimates
- `server_metrics` — server telemetry and capacity data
- `vpn_sessions` — session health and usage signals
- `audit_logs` — operations and sync events
- `notifications` — workflow notifications and task updates

## Design notes

- Data should be normalized for transactional sync and denormalized for query performance as needed.
- Maintain timestamped history for analytics and trend modeling.
- Store AI outputs separately from raw telemetry to preserve derived state.
- Keep the operations schema independent from CRM production tables.
