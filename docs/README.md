# VPN Operations Platform Documentation

This documentation set is the single source of truth for the VPN Operations Platform.

## Purpose

This platform is an internal operations layer for the VPN business. It is not a CRM and it is not a commercial SaaS product.

It provides the COO and operations teams with business intelligence, infrastructure monitoring, AI recommendations, and mission control workflows.

## Recommended reading order

1. `product/01_PRODUCT_VISION.md`
2. `product/02_BUSINESS_MODEL.md`
3. `product/03_USERS_AND_ROLES.md`
4. `architecture/01_SYSTEM_OVERVIEW.md`
5. `architecture/02_CRM_INTEGRATION.md`
6. `architecture/03_OPERATIONS_DATABASE.md`
7. `architecture/04_DATA_PIPELINE.md`
8. `architecture/05_MONITORING_ARCHITECTURE.md`
9. `architecture/06_AI_ARCHITECTURE.md`
10. `architecture/07_SECURITY.md`
11. `frontend/ROUTES.md`
12. `backend/API_SPECIFICATION.md`
13. `operations/MISSION_CONTROL.md`

## Folder purpose

- `product/` — product vision, audience, roadmap, and internal value model
- `architecture/` — system architecture, CRM boundaries, data flow, monitoring, AI, and security
- `frontend/` — UI design system, component guidelines, and route behavior
- `backend/` — API contracts, database model, sync service, and monitoring service
- `operations/` — mission control workflows, KPIs, alerts, and decision engine
- `crm/` — CRM integration requirements, fields, APIs, webhooks, and pending items
- `adr/` — architecture decision records with rationale and consequences

## How to use this documentation

- Read `product/01_PRODUCT_VISION.md` first to align on scope.
- Use `architecture/*` to understand system boundaries and data ownership.
- Use `backend/*` and `crm/*` when integrating the platform with external systems.
- Use `operations/*` to understand how Mission Control should guide daily work.
- Use `frontend/*` to onboard developers to UI expectations and route responsibilities.

## Notes

- The CRM remains the source of transactional truth.
- The dashboard never reads CRM data directly.
- All frontend modules consume data through the service layer.
- Mission Control answers one question: “What should Operations do today?”
