# CRM Webhooks

Webhooks are a secondary integration path for near-real-time sync.

## Recommended webhook events

- `user.created`
- `user.updated`
- `subscription.created`
- `subscription.updated`
- `payment.completed`
- `payment.failed`
- `referral.used`
- `server.updated`
- `session.completed`

## Use cases

- Improve sync latency for critical updates
- Trigger immediate recalculation of AI scores
- Notify the operations platform of new incidents or outages

## Behavior

- Webhooks should be ingested by the sync service
- Events should be validated and deduplicated
- The operations database is updated only through the sync service
