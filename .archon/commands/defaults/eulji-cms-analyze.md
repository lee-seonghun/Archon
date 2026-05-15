---
description: Analyze eulji_cms_platform requirements and government-delivery readiness
argument-hint: <analysis-scope-or-delivery-goal>
---

# Eulji CMS Analyze

**Input**: $ARGUMENTS
**Artifacts directory**: $ARTIFACTS_DIR
**Workflow run**: $WORKFLOW_ID
**Base branch**: $BASE_BRANCH

---

## Your Task

Analyze eulji_cms_platform from a government-delivery CMS perspective and produce clear requirements, risks, acceptance criteria, and validation guidance.

This command is for high-context analysis, delivery judgement, accessibility readiness, security/auditability reasoning, operations readiness, and requirement traceability. Do not implement code unless the workflow prompt explicitly asks for a documentation-only update.

## Model Routing Context

This command is intended to run with:

- provider: pi
- model: openai/gpt-5.5

When producing recommendations, route follow-up work as follows:

- pi + openai/gpt-5.4-mini: small bounded low-risk or medium-risk implementation
- pi + openai-codex/gpt-5.3-codex: architecture, repository-wide code review, integration, refactoring, and code-level verification
- pi + openai/gpt-5.5: government-delivery requirements, acceptance, accessibility, security posture, auditability, operations, and final validation judgement

## Steps

1. Read the current repository context, especially:
   - docs/
   - requirements documents
   - architecture documents
   - implementation summaries in $ARTIFACTS_DIR
   - validation or review artifacts in $ARTIFACTS_DIR

2. Analyze the project from these viewpoints:
   - public-sector CMS delivery
   - accessibility and barrier-free kiosk expansion readiness
   - signage and outdoor kiosk operation
   - security and RBAC
   - audit logging and traceability
   - data retention
   - operational monitoring and maintenance
   - deployment readiness

3. Produce findings with this structure:
   - Status: READY, READY_WITH_RISKS, or NOT_READY
   - Scope analyzed
   - Requirements and acceptance criteria
   - Requirement traceability observations
   - Gaps and blockers
   - Risk classification: low, medium, high
   - Required downstream model route
   - Recommended next implementation slice
   - Evidence reviewed

4. Mark high-risk items explicitly when they touch:
   - auth or RBAC
   - security-sensitive logic
   - audit logging
   - accessibility
   - data retention
   - monitoring
   - deployment
   - public-sector acceptance criteria
   - cross-module integration

5. For every high-risk item, state that it requires:
   - pi + openai-codex/gpt-5.3-codex code and integration verification
   - pi + openai/gpt-5.5 delivery validation

## Artifact Output

Write a markdown artifact to:

```text
$ARTIFACTS_DIR/eulji-cms-analysis.md
```

If this command is being used for final delivery validation, also write:

```text
$ARTIFACTS_DIR/eulji-cms-delivery-validation.md
```

## If Information Is Missing

If required documents or implementation evidence are missing, do not guess. State what is missing, why it matters, and which command should produce it next.

## Success Criteria

- Input scope is acknowledged
- Repository and available artifacts are reviewed
- Government-delivery CMS requirements are analyzed
- Accessibility, security, audit, and operations risks are classified
- High-risk items are clearly marked
- Follow-up model routing is specified
- Required artifact files are written to $ARTIFACTS_DIR
