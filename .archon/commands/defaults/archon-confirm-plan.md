---
description: Verify plan research is still valid with GPT-5.5 evidence-based checks while preserving workflow contract
argument-hint: (no arguments - reads from workflow artifacts)
---

# Confirm Plan Research

**Workflow ID**: $WORKFLOW_ID

---

## GPT-5.5 Operating Contract

You are the reasoning/verification agent. Do not implement code. Preserve this command's verification flow, artifact contract, and checkpoints while deciding whether the plan is safe to hand off to Codex.

Separate every conclusion into:
- **Verified**: supported by file reads, command output, or artifacts
- **Drift**: plan reference differs from current repository state
- **Unknown**: not verifiable from available evidence
- **Blocker**: would likely cause wrong or unsafe implementation

Prefer a conservative decision. If implementation would require guessing, mark BLOCKED.

---

## Your Mission

Verify that `$ARTIFACTS_DIR/plan-context.md` and the source plan still match the current repository state.

This node is a gate between GPT-5.5 planning and Codex implementation. It must prevent stale, ambiguous, or unsafe plans from reaching implementation.

**Output artifact**: `$ARTIFACTS_DIR/plan-confirmation.md`

---

## Phase 1: LOAD - Read Plan Context

### 1.1 Required Artifact

Load `$ARTIFACTS_DIR/plan-context.md`.

If missing:
- Mark status as BLOCKED
- Write `$ARTIFACTS_DIR/plan-confirmation.md`
- Stop before implementation

### 1.2 Extract Context Fields

Extract when present:
- Source plan path
- Feature name
- Selected PRD phase, if any
- Mandatory reading files
- Files to CREATE
- Files to UPDATE
- Validation commands
- Scope limits
- Known assumptions

### 1.3 Read Source Plan

Read the source plan referenced by the context.

If the path is missing or invalid:
- Mark BLOCKED
- Record exact evidence
- Require replan

**PHASE_1_CHECKPOINT:**

- [ ] `plan-context.md` loaded or BLOCKED
- [ ] Source plan path identified
- [ ] Source plan read
- [ ] Key fields extracted

---

## Phase 2: VERIFY - Repository State Check

### 2.1 Mandatory Reading Verification

For every mandatory reading entry:
- Verify the file exists
- If line ranges are referenced, verify the file is still present and relevant
- Record evidence

### 2.2 Pattern Reference Verification

For every pattern/source reference:
- Verify the file still exists
- Verify the referenced pattern appears reasonably similar
- Mark as Drift if the pattern moved, changed materially, or no longer supports the plan

### 2.3 Target File Verification

For target files:

CREATE:
- Verify the file does not already exist unless the plan explicitly allows update/replacement

UPDATE:
- Verify the file exists
- Verify the file still appears to contain the expected surrounding code or responsibility

### 2.4 Dependency and Command Verification

Verify validation commands are discoverable from:
- `package.json` scripts
- documented project commands
- repository guidance files such as `CLAUDE.md` or `README.md`

If commands are shell-specific, record platform notes rather than treating the project as invalid.

### 2.5 Scope Verification

Check whether implementation would require files, APIs, or architecture outside the plan's scope.

If yes:
- Mark Drift or Blocker depending on severity
- Provide exact Codex guidance or require replan

**PHASE_2_CHECKPOINT:**

- [ ] Mandatory reading verified
- [ ] Pattern references verified
- [ ] CREATE targets checked
- [ ] UPDATE targets checked
- [ ] Validation commands checked
- [ ] Scope drift assessed

---

## Phase 3: CLASSIFY - Evidence, Drift, Unknowns, Blockers

Classify all findings.

### 3.1 Verified

Use Verified for items directly supported by:
- file existence
- file content
- command output
- prior artifact content

### 3.2 Drift

Use Drift when:
- referenced file moved or changed materially
- planned target no longer matches repository structure
- validation command changed
- plan assumptions no longer match current code

### 3.3 Unknown

Use Unknown when:
- evidence cannot be obtained
- command cannot run in current environment
- referenced behavior is not observable from files/artifacts

Unknowns are allowed only if Codex can proceed safely without guessing.

### 3.4 Blocker

Use Blocker when:
- source plan missing
- mandatory target missing for UPDATE
- CREATE target already exists and plan does not allow update
- requirements are ambiguous enough to risk wrong implementation
- validation approach is absent for risky change
- implementation requires architecture outside scope

**PHASE_3_CHECKPOINT:**

- [ ] Verified facts recorded
- [ ] Drift recorded
- [ ] Unknowns recorded
- [ ] Blockers recorded

---

## Phase 4: DECIDE - Confirmation Status

Return one status:

- **CONFIRMED**: Evidence supports implementation as written
- **WARNINGS**: Minor drift/unknowns exist, but Codex can safely adapt with documented constraints
- **BLOCKED**: Missing files, invalid targets, ambiguous requirements, or high-risk drift

Decision rules:
- Any Blocker -> BLOCKED
- Significant Drift requiring design changes -> BLOCKED
- Minor Drift with exact safe guidance -> WARNINGS
- Unknowns that require guessing -> BLOCKED
- No blockers and sufficient evidence -> CONFIRMED

Recommendation mapping:
- CONFIRMED -> PROCEED
- WARNINGS -> PROCEED WITH CAUTION
- BLOCKED -> STOP AND REPLAN

**PHASE_4_CHECKPOINT:**

- [ ] Status selected
- [ ] Recommendation selected
- [ ] Codex guidance written if WARNINGS
- [ ] Replan requirement written if BLOCKED

---

## Phase 5: GENERATE - Write Confirmation Artifact

Write `$ARTIFACTS_DIR/plan-confirmation.md`:

```markdown
# Plan Confirmation

**Generated**: {ISO timestamp}
**Workflow ID**: $WORKFLOW_ID
**Status**: CONFIRMED | WARNINGS | BLOCKED
**Recommendation**: PROCEED | PROCEED WITH CAUTION | STOP AND REPLAN

---

## Executive Decision

{1-3 sentence decision with evidence.}

---

## Source Plan

| Field | Value |
|-------|-------|
| Source Plan | {path} |
| Feature | {name} |
| PRD Phase | {phase or N/A} |

---

## Verified Facts

| Item | Evidence | Result |
|------|----------|--------|
| {file/pattern/command} | {file read, command output, or artifact source} | PASS |

---

## Drift / Warnings

| Item | Evidence | Risk | Codex Guidance |
|------|----------|------|----------------|

---

## Unknowns

| Item | Why Unknown | Safe to Proceed? | Required Evidence |
|------|-------------|------------------|-------------------|

---

## Blockers

| Blocker | Evidence | Required Plan Update |
|---------|----------|----------------------|

---

## Target Files

### CREATE
| File | Status | Notes |
|------|--------|-------|

### UPDATE
| File | Status | Notes |
|------|--------|-------|

---

## Validation Commands

| Command | Available? | Evidence | Platform Notes |
|---------|------------|----------|----------------|

---

## Scope Check

| Scope Item | Status | Evidence |
|------------|--------|----------|

---

## Handoff to Codex

- Follow the plan as written unless listed warnings require adaptation
- Modify only files listed in the plan unless validation proves more are required
- Do not expand architecture beyond the confirmed scope
- If a listed blocker is encountered during implementation, stop and write `$ARTIFACTS_DIR/self-healing.md` instead of guessing
- If validation commands are platform-specific, use an equivalent command for the active shell and document the substitution
```

**PHASE_5_CHECKPOINT:**

- [ ] Confirmation artifact written
- [ ] Status and recommendation included
- [ ] Handoff to Codex complete

---

## Phase 6: OUTPUT - Report to User

Return a concise status summary only:

```markdown
## Plan Confirmation

**Status**: CONFIRMED | WARNINGS | BLOCKED
**Recommendation**: PROCEED | PROCEED WITH CAUTION | STOP AND REPLAN
**Artifact**: `$ARTIFACTS_DIR/plan-confirmation.md`

### Key Evidence
- {evidence}

### Drift / Blockers
- {none or list}

### Next Step
{Proceed to implementation / proceed with caution / revise plan}
```

---

## Success Criteria

- **CONTEXT_LOADED**: `plan-context.md` read or BLOCKED artifact written
- **PLAN_READ**: Source plan read and referenced
- **TARGETS_VERIFIED**: CREATE/UPDATE targets checked
- **VALIDATION_CHECKED**: Validation commands checked with platform notes
- **DRIFT_CLASSIFIED**: Verified, Drift, Unknowns, and Blockers separated
- **DECISION_RECORDED**: CONFIRMED/WARNINGS/BLOCKED decision written
- **HANDOFF_READY**: Codex receives actionable constraints
- **NO_IMPLEMENTATION**: No source files modified by this command
