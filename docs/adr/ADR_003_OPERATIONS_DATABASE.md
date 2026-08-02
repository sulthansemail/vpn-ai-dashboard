# ADR 003 — Operations Database

## Decision

Maintain an independent Operations Database for analytics, monitoring, and AI outputs.

## Reason

The dashboard must not impact CRM performance or transactional integrity.

## Consequences

- Allows optimized storage for analytics and historical trends.
- Preserves a clean boundary between transactional and operational data.
- Supports AI output persistence and data enrichment.

## Status

Accepted
