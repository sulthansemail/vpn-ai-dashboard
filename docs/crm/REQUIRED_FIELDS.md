# CRM Required Fields

These are the minimum fields required from CRM data for the Operations Platform.

## Users
- `user_id`
- `email`
- `country`
- `subscription_id`
- `subscription_status`
- `created_at`
- `expires_at`
- `referral_code`
- `lifetime_revenue`

## Servers
- `server_id`
- `hostname`
- `country`
- `city`
- `provider`
- `protocols`
- `status`
- `created_at`

## Sessions
- `session_id`
- `user_id`
- `server_id`
- `protocol`
- `start_time`
- `end_time`
- `duration`
- `platform`
- `country`

## Subscriptions
- `subscription_id`
- `user_id`
- `plan_name`
- `status`
- `started_at`
- `renewal_date`
- `price`

## Payments
- `payment_id`
- `user_id`
- `amount`
- `currency`
- `status`
- `gateway`
- `created_at`

## Referrals
- `referral_code`
- `owner_user_id`
- `reward_amount`
- `usage_count`
- `revenue_generated`
