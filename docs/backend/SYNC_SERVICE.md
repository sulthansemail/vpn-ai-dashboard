# Sync Service

The Sync Service synchronizes CRM data into the Operations Database.

## Purpose

- Keep operations data current without direct CRM access.
- Populate the Operations Database with transactional records needed for analytics and dashboards.
- Enable decoupled operations workflows.

## Sync boundaries

- One-way sync: CRM → Operations Database
- CRM remains the system of record
- Dashboard reads only the operations data layer

## Required sync domains

- Users
- Subscriptions
- Payments
- Referrals
- Server inventory
- Sessions

## Sync behavior

- Regular interval sync (e.g. every 5 minutes)
- Retry on failure
- Record last sync timestamp
- Validate field mappings and data quality
