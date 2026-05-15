---
description: Implement a bounded feature slice for eulji_cms_platform
argument-hint: <feature-or-task>
---

# Eulji CMS Implement

**Input**: $ARGUMENTS
**Artifacts directory**: $ARTIFACTS_DIR
**Workflow run**: $WORKFLOW_ID
**Base branch**: $BASE_BRANCH

---

## Your Task

Implement one bounded feature slice for eulji_cms_platform.

This command is intended for:
- low-risk or medium-risk implementation
- small CRUD/API/UI work
- focused bug fixes
- bounded refactoring
- implementation aligned to existing architecture
- updating tests together with implementation

Do not perform broad speculative architecture redesign.

## Model Routing Context

This command is intended to run with:

- provider: pi
- model: openai/gpt-5.4-mini

Escalate review or validation when implementation touches:
- auth or RBAC
- security-sensitive logic
- audit logging
- accessibility
- data retention
- monitoring
- deployment
- cross-module integration
- public-sector acceptance behavior

These high-risk areas require:
- pi + openai-codex/gpt-5.3-codex architecture/code verification
- pi + openai/gpt-5.5 delivery validation

## Steps

1. Read:
   - requirements documents
   - architecture documents
   - artifacts from $ARTIFACTS_DIR
   - current implementation state

2. Identify the next bounded implementation slice for:

```text
$ARGUMENTS
```

3. Determine implementation risk level:
   - low
   - medium
   - high

4. Implement only the smallest safe change required.

5. Update tests together with implementation changes.

6. Run narrow relevant validation commands.

7. Produce a structured summary with:
   - Status: IMPLEMENTED, IMPLEMENTED_WITH_RISKS, or BLOCKED
   - Changed files
   - Tests executed
   - Known risks
   - Required follow-up review
   - Remaining follow-up tasks

## High-Risk Handling

If the implementation touches high-risk domains:
- minimize the code change scope
- avoid repository-wide redesign
- explicitly mark the implementation for architecture review
- explicitly mark the implementation for delivery validation

## Artifact Output

Write a markdown artifact to:

```text
$ARTIFACTS_DIR/eulji-cms-implementation-summary.md
```

If the implementation introduces high-risk concerns, also write:

```text
$ARTIFACTS_DIR/eulji-cms-high-risk-items.md
```

## If Blocked

If implementation cannot proceed safely because requirements or architecture are unclear:
- stop implementation
- explain the blocker
- recommend whether eulji-cms-analyze or eulji-cms-architecture should run next

## Success Criteria

- One bounded feature slice is implemented
- Tests are updated and executed
- High-risk areas are explicitly marked
- Follow-up validation requirements are identified
- Required artifact files are written to $ARTIFACTS_DIR
