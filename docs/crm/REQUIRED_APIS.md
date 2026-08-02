# CRM Required APIs

This document defines CRM APIs that the Operations Platform will depend on.

## Users
- `GET /crm/users`
- `GET /crm/users/{id}`
- `GET /crm/users?updated_since={timestamp}`

## Servers
- `GET /crm/servers`
- `GET /crm/servers/{id}`
- `GET /crm/servers?updated_since={timestamp}`

## Sessions
- `GET /crm/sessions`
- `GET /crm/sessions?updated_since={timestamp}`

## Subscriptions
- `GET /crm/subscriptions`
- `GET /crm/subscriptions?updated_since={timestamp}`

## Payments
- `GET /crm/payments`
- `GET /crm/payments?updated_since={timestamp}`

## Referrals
- `GET /crm/referrals`
- `GET /crm/referrals?updated_since={timestamp}`

## Dashboard data
- `GET /crm/dashboard/summary`
- `GET /crm/dashboard/revenue`

## Notes

- These APIs are used for synchronization only.
- The dashboard will never call CRM endpoints directly.
