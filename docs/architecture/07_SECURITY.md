# Security

Security boundaries are essential because the platform is an internal operations layer.

## Boundaries

- The dashboard never connects directly to CRM systems.
- The CRM remains the source of transactional truth.
- The Operations Database owns analytical and advisory data.
- Service layer APIs mediate all frontend access.

## Data ownership

- CRM owns users, payments, subscriptions, referrals, server inventory.
- Operations Platform owns mission control, analytics, monitoring, and AI outputs.

## Security design

- Use service-to-service authentication for CRM sync operations.
- Restrict frontend access to operations APIs only.
- Encrypt sensitive data in transit and at rest.
- Log sync activity, alerts, and AI recommendation changes.
- Avoid exposing raw CRM identifiers unless required for troubleshooting.

## Consequences

- Reduces risk of unauthorized CRM access from the dashboard.
- Allows the operations platform to enforce its own data retention and audit controls.
- Enables safer experimentation with AI and analytics.
