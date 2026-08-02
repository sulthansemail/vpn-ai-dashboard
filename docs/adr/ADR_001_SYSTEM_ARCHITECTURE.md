# ADR 001 — System Architecture

## Decision

The platform will be built as an internal operations stack with a separate Operations Database and service layer.

## Reason

This project is not a CRM replacement and must not read CRM data directly from the frontend.

## Consequences

- The CRM remains the system of record.
- The Operations Platform can use different data models optimized for decision support.
- The dashboard uses service-layer APIs only.

## Status

Accepted
