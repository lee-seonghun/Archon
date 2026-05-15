# Eulji CMS Implement Command

## Objective
Implement a single cohesive feature for eulji_cms_platform using deterministic coding-agent execution.

## Primary Model
pi - openai/gpt-5.4-mini

## Why This Model
Use gpt-5.4-mini for:
- small bounded CRUD work
- focused UI/API implementation
- narrow bug fixes
- low-risk refactoring
- test updates close to implementation

Do not use gpt-5.4-mini as the final authority for:
- auth or RBAC correctness
- audit logging guarantees
- security-sensitive logic
- accessibility compliance
- data retention rules
- deployment architecture
- cross-module integration design
- public-sector acceptance judgement

## Escalation Rules
Escalate to pi - openai/gpt-5.3-codex when:
- the implementation changes multiple modules
- repository-wide refactoring is required
- integration boundaries are unclear
- architecture drift is detected
- security or operational concerns appear

Escalate to pi - openai/gpt-5.5 when:
- validating government-delivery requirements
- checking accessibility or barrier-free readiness
- reviewing auditability and operational readiness
- validating requirement traceability
- making acceptance or delivery decisions

## Execution Rules
- Implement only one bounded feature or task at a time.
- Follow the architecture and requirements documents.
- Keep commits small and reviewable.
- Update tests with production code.
- Preserve coding conventions.
- Prefer explicit validation commands before finishing.
- Avoid speculative architectural redesign during implementation.

## Required Workflow
1. Read the current requirements and architecture documents.
2. Identify the next smallest implementation slice.
3. Determine risk level:
   - low
   - medium
   - high
4. Implement only the bounded change.
5. Run narrow relevant validation commands.
6. If the feature is high-risk, explicitly request:
   - codex architecture/code review
   - gpt-5.5 delivery validation
7. Summarize:
   - changed files
   - tests executed
   - known risks
   - remaining follow-up tasks
