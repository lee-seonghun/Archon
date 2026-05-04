---
description: Verify plan research is still valid with GPT-5.5 evidence-based checks
argument-hint: (no arguments - reads from workflow artifacts)
---

# Confirm Plan Research

**Workflow ID**: $WORKFLOW_ID

---

## GPT-5.5 Operating Contract

You are the reasoning/verification agent. Do not implement code. Decide whether the plan is safe to hand off to Codex.

Separate every conclusion into:
- **Verified**: supported by file reads, command output, or artifacts
- **Drift**: plan reference differs from current repository state
- **Unknown**: not verifiable from available evidence
- **Blocker**: would likely cause wrong or unsafe implementation

Prefer a conservative decision. If implementation would require guessing, mark BLOCKED.

---

## Mission

Verify that `$ARTIFACTS_DIR/plan-context.md` and the source plan still match the current repository.

Write: `$ARTIFACTS_DIR/plan-confirmation.md`

---

## Required Checks

1. Load `$ARTIFACTS_DIR/plan-context.md`. If missing, stop with BLOCKED.
2. Locate the source plan path referenced in the context and read it.
3. Verify all mandatory reading files exist.
4. Verify all pattern references still exist and are reasonably similar.
5. Verify UPDATE targets exist.
6. Verify CREATE targets do not already exist, unless the plan explicitly allows updating them.
7. Verify validation commands are discoverable from package scripts or documented project commands.
8. Identify stale assumptions, changed APIs, missing dependencies, or scope drift.

---

## Decision Rules

Return one of:

- **CONFIRMED**: Evidence supports implementation as written
- **WARNINGS**: Minor drift exists, but Codex can safely adapt with documented constraints
- **BLOCKED**: Missing files, invalid targets, ambiguous requirements, or high-risk drift

A warning must include exact guidance for Codex. A blocker must include the exact plan update required.

---

## Artifact Format

Write `$ARTIFACTS_DIR/plan-confirmation.md`:

```markdown
# Plan Confirmation

**Generated**: {ISO timestamp}
**Workflow ID**: $WORKFLOW_ID
**Status**: CONFIRMED | WARNINGS | BLOCKED

## Executive Decision

{1-3 sentence decision with evidence.}

## Verified Facts

| Item | Evidence | Result |
|------|----------|--------|
| {file/pattern/command} | {file read or command output} | PASS |

## Drift / Warnings

| Item | Evidence | Risk | Codex Guidance |
|------|----------|------|----------------|

## Blockers

| Blocker | Evidence | Required Plan Update |
|---------|----------|----------------------|

## Target Files

### CREATE
| File | Status | Notes |
|------|--------|-------|

### UPDATE
| File | Status | Notes |
|------|--------|-------|

## Validation Commands

| Command | Available? | Evidence |
|---------|------------|----------|

## Recommendation

- PROCEED
- PROCEED WITH CAUTION
- STOP AND REPLAN

## Handoff to Codex

- Follow the plan as written unless listed warnings require adaptation
- Do not modify files outside the plan without documenting the reason
- If a listed blocker is encountered during implementation, stop and write a self-healing note instead of guessing
```

---

## Output

Return a concise status summary only:

```markdown
## Plan Confirmation

**Status**: CONFIRMED | WARNINGS | BLOCKED
**Artifact**: `$ARTIFACTS_DIR/plan-confirmation.md`

### Key Evidence
- {evidence}

### Next Step
{Proceed to implementation / revise plan}
```

---

## Success Criteria

- Evidence-based decision written
- Drift and unknowns are explicitly separated
- Codex receives actionable handoff guidance
- No implementation performed
