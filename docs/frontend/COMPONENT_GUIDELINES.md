# Component Guidelines

The frontend should be built with reusable, composable components.

## Rules

- Prefer presentational components with props.
- Keep state management at the page or container level.
- Avoid hardcoded data inside reusable components.
- Keep components under 200 lines when possible.

## Structure

- `layout/` for shell and navigation components
- `dashboard/` for mission control and business panels
- `operations/` for alerts, tasks, incidents, and monitoring cards
- `intelligence/` for AI recommendations and predictions
- `ui/` for generic primitives like buttons, inputs, and tooltips

## Data flow

- Components should receive data through props
- Pages should orchestrate service calls and state
- Use the service layer as the single source of truth for data fetching
