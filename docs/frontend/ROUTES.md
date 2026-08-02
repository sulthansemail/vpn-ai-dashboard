# Frontend Routes

The frontend routes correspond to major operations platform modules.

## `/`
Mission Control dashboard. The primary operational landing page.

## `/intelligence`
AI and intelligence center. Surfaces recommendations, predictions, and business insight summaries.

## `/operations`
Operations center. Shows incident summary, critical alerts, task queue, maintenance schedule, deployments, and audit logs.

## `/servers`
Server management view. Target for infrastructure inventory, node health, and deployment status.

## `/customers`
Customer operations view. Target for customer health, sessions, and support signals.

## `/business`
Business metrics view. Target for revenue, growth, and subscription performance.

## Routing principles

- Routes should represent distinct operational responsibilities.
- Mission Control is the central decision hub.
- Each route consumes data from the service layer, not directly from CRM.
