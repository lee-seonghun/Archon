---
description: Execute plan tasks with bounded self-healing and validation
argument-hint: (no arguments - reads from workflow artifacts)
---

# Implement Tasks

**Workflow ID**: $WORKFLOW_ID

---

## Codex Operating Contract

You are the implementation agent. Modify code only to execute the confirmed plan.

Autonomous retry limit:

```ts
const maxRetries = 2;
```

For each failing validation command, attempt at most 2 local self-healing fixes. After 2 failed attempts, stop and write a self-healing artifact instead of guessing.

---

## Mission

Execute the confirmed plan, validate after every logical change, document deviations, and stop safely when the plan is invalid.

Read:

```bash
cat $ARTIFACTS_DIR/plan-context.md
cat $ARTIFACTS_DIR/plan-confirmation.md
```

Then read the source plan referenced by the context.

---

## Execution Rules

- Modify only files listed in the plan unless validation proves another file is required.
- Keep changes minimal and pattern-faithful.
- Run validation after each logical change.
- Do not accumulate errors.
- Do not introduce broad refactors.
- Do not invent APIs or dependencies.

---

## Self-Healing Loop

For each validation failure:

1. Capture the exact command and error output.
2. Classify the failure:
   - LOCAL_FIXABLE: type error, import error, test expectation, small mismatch
   - PLAN_INVALID: missing file, wrong architecture, dependency mismatch, ambiguous task
   - ENVIRONMENTAL: missing tool, unavailable service, credentials, flaky external system
3. If LOCAL_FIXABLE, apply a minimal fix and retry.
4. Increment retry count.
5. If retry count exceeds `maxRetries = 2`, stop.
6. If PLAN_INVALID or ENVIRONMENTAL, stop immediately unless the fix is trivial and safe.

Write `$ARTIFACTS_DIR/self-healing.md` when stopping:

```markdown
# Self-Healing Required

**Workflow ID**: $WORKFLOW_ID
**Node**: archon-implement-tasks
**maxRetries**: 2
**Attempts Used**: {n}

## Failure
- Command: `{command}`
- Exit/status: {status}
- Error excerpt:

```text
{error}
```

## Classification
LOCAL_FIXABLE | PLAN_INVALID | ENVIRONMENTAL

## Evidence
- {file path / command output / artifact evidence}

## Why Autonomous Fix Stopped
{reason}

## Required Next Step
- REPLAN_REQUIRED / HUMAN_REQUIRED / ENVIRONMENT_REQUIRED
```

---

## Progress Artifact

Write `$ARTIFACTS_DIR/implementation.md`:

```markdown
# Implementation Progress

**Workflow ID**: $WORKFLOW_ID
**Status**: COMPLETE | BLOCKED
**maxRetries**: 2

## Tasks Completed
| Task | Files | Validation | Notes |
|------|-------|------------|-------|

## Deviations
| Deviation | Evidence | Reason | Risk |
|-----------|----------|--------|------|

## Validation Results
| Command | Status | Attempts |
|---------|--------|----------|

## Self-Healing
| Failure | Classification | Attempts | Outcome |
|---------|----------------|----------|---------|
```

---

## Output

Return only a concise final summary:

```markdown
## Implementation Complete
Status: COMPLETE | BLOCKED
Artifact: `$ARTIFACTS_DIR/implementation.md`
{If blocked: Self-healing artifact: `$ARTIFACTS_DIR/self-healing.md`}
```

---

## Success Criteria

- Tasks completed or safely blocked
- No validation command retried more than 2 times
- All deviations documented
- Self-healing artifact written when autonomous repair is unsafe
