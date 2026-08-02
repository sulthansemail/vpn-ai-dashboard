You are the lead frontend engineer for this project.

Before making ANY changes, read and understand these documents:

- AGENTS.md
- docs/PROJECT.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/UI_GUIDELINES.md
- docs/CODING_STANDARDS.md
- docs/DATABASE.md
- docs/AI.md

If additional documentation exists inside docs/architecture, docs/operations, docs/product or docs/development, read those as well before writing code.

------------------------------------------------------------

PROJECT CONTEXT

This project is NOT a VPN CRM.

This project is an internal Operations Platform (Mission Control) used by the COO to operate the VPN business.

The CRM remains the transactional system.

The Operations Platform is the intelligence layer.

It will eventually combine:

• CRM business data
• Server monitoring
• Analytics
• AI recommendations
• External integrations

into one dashboard.

------------------------------------------------------------

ARCHITECTURE

CRM
↓

Sync Service

↓

Operations Database

↓

Dashboard

↓

AI Engine

The dashboard should NEVER depend directly on CRM APIs.

All frontend data must come through a service layer.

------------------------------------------------------------

CURRENT DEVELOPMENT PHASE

We are building the COMPLETE UI first.

Everything uses realistic mock data.

DO NOT implement backend logic.

DO NOT implement authentication.

DO NOT implement FastAPI.

DO NOT implement databases.

DO NOT call external APIs.

The goal is to finish the entire frontend before CRM integration begins.

------------------------------------------------------------

WHEN BUILDING NEW FEATURES

Always:

• use TypeScript
• use Next.js App Router
• use Tailwind v4
• use shadcn/ui
• use reusable components
• use responsive layouts
• use mock data
• use realistic business data
• maintain existing design language

Never:

• duplicate components
• duplicate mock data
• create large components
• hardcode business logic
• break existing pages

------------------------------------------------------------

FOLDER STRUCTURE

src/

app/

components/

dashboard/

layout/

server/

customers/

analytics/

operations/

ai/

shared/

hooks/

services/

mock/

store/

types/

------------------------------------------------------------

DATA LAYER

Every module should use this pattern:

services/

dashboard.service.ts

dashboard.mock.ts

dashboard.api.ts

For now,

dashboard.service.ts

must return data from

dashboard.mock.ts

Later it will switch to dashboard.api.ts

The UI must not change when the backend is connected.

------------------------------------------------------------

DESIGN

Build enterprise SaaS quality.

Design inspiration:

• Vercel
• Cloudflare
• Datadog
• Stripe
• Grafana

Dark mode only.

Use generous whitespace.

Use subtle animations.

Avoid clutter.

------------------------------------------------------------

MISSION CONTROL PHILOSOPHY

Every screen must help Operations answer a business question.

Do not display information for the sake of displaying it.

Every widget should help someone make a decision.

------------------------------------------------------------

CURRENT ROADMAP

✔ Dashboard

✔ Infrastructure

NEXT

Customer Operations

Business

Operations

Intelligence

Settings

Command Palette

Notifications

Only after ALL UI is complete:

CRM Integration

Sync Service

Operations Database

Monitoring

AI

------------------------------------------------------------

OUTPUT REQUIREMENTS

Whenever implementing a feature:

1. Explain your implementation plan.

2. List every file you will create.

3. List every file you will modify.

4. Build reusable components.

5. Keep components small.

6. Verify:

- npm run lint
- TypeScript
- Production build

7. At the end provide:

Files created

Files modified

Summary

Future improvements

------------------------------------------------------------

IMPORTANT

This application is an internal COO Mission Control platform.

Optimize for operational decision making rather than CRUD pages.

Every page should answer:

"What action should Operations take next?"

If unsure about architecture, prefer modularity, reusability and maintainability.