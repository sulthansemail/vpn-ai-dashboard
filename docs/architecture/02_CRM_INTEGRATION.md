# CRM Integration

The CRM is the source of truth for all transactional business data.

This platform does not replace or duplicate CRM functionality.
It consumes CRM-derived data only after it has been synchronized into the Operations Database.

## Integration boundaries

- CRM owns users, subscriptions, payments, referrals, and server inventory.
- The Operations Platform owns mission control, analytics, monitoring, and AI-derived outputs.
- The frontend never calls CRM APIs directly.
- The dashboard reads from the Operations Database and service layer only.

## Data domains to synchronize

- Users
- Subscriptions
- Payments
- Referrals
- Servers
- Sessions

## Sync model

- One-way sync: CRM → Sync Service → Operations Database.
- Use delta sync or time-based sync intervals.
- Prefer webhooks for critical updates when available.
- Maintain source identifiers for auditability.

## Design considerations

- Keep CRM and Operations Database schemas separate.
- Sync only the fields required for operational analytics.
- Preserve historical records for trend modeling.
- Ensure the sync service validates and transforms data consistently.

## Reference documents

- `docs/crm/REQUIRED_APIS.md`
- `docs/crm/REQUIRED_FIELDS.md`
- `docs/crm/WEBHOOKS.md`
- `docs/backend/SYNC_SERVICE.md`
