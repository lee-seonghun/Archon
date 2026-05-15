# Eulji CMS Architecture Command

## Objective
Maintain whole-system architecture consistency for eulji_cms_platform.

## Model
pi - openai/gpt-5.3-codex

## Responsibilities
- maintain cross-module architecture consistency
- validate domain boundaries and integrations
- detect duplicated logic and architectural drift
- optimize repository structure for long-term maintainability
- review deployment and operations architecture

## Workflow
1. Read requirements and implementation artifacts.
2. Review the complete repository structure.
3. Validate:
   - module boundaries
   - APIs
   - auth and RBAC
   - audit and logging
   - deployment topology
   - kiosk/signage integration
4. Refactor architecture-level problems if needed.
5. Produce an architecture review summary.
