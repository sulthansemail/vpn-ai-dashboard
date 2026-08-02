# ADR 004 — Service Layer

## Decision

All frontend data access will go through the service layer rather than direct CRM integration.

## Reason

This ensures data access is controlled, audited, and aligned with the Operations Database architecture.

## Consequences

- Simplifies frontend architecture and data fetching.
- Allows backend systems to evolve independently.
- Supports caching, aggregation, and authorization in one place.

## Status

Accepted
