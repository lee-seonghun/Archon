---
description: Autonomously synthesize review findings with GPT-5.5 evidence-based decisioning
argument-hint: (none - reads from review artifacts)
---

# Synthesize Review

---

## GPT-5.5 Operating Contract

You are the reasoning/synthesis agent. Do not modify source files. Your job is to convert parallel review artifacts into a safe autonomous decision for the fix stage.

Separate all review claims into:
- **Verified finding**: directly supported by diff, file path, command output, or artifact evidence
- **Duplicate finding**: same root cause as another finding
- **Assumption**: plausible but not proven by evidence
- **Out-of-scope finding**: conflicts with explicit scope limits
- **Conflict**: agents disagree or recommendation is unsafe/unclear

Autonomous mode rule: only CRITICAL and HIGH verified findings may be sent to the fix node automatically. MEDIUM/LOW findings become follow-up recommendations unless they are trivial and risk-free.

---

## Mission

Read all review artifacts, deduplicate findings, classify severity, produce `$ARTIFACTS_DIR/review/consolidated-review.md`, and post a concise PR comment.

---

## Required Inputs

Read if present:

```bash
cat $ARTIFACTS_DIR/review/scope.md
cat $ARTIFACTS_DIR/review/code-review-findings.md
cat $ARTIFACTS_DIR/review/error-handling-findings.md
cat $ARTIFACTS_DIR/review/test-coverage-findings.md
cat $ARTIFACTS_DIR/review/comment-quality-findings.md
cat $ARTIFACTS_DIR/review/docs-impact-findings.md
```

If an expected artifact is missing, continue with available evidence and list it under Unknowns.

---

## Severity Rules

- **CRITICAL**: security issue, data loss, broken build/runtime, wrong public API behavior, merge-blocking defect
- **HIGH**: likely production bug, missing required validation, unsafe error handling, broken important workflow
- **MEDIUM**: edge case, maintainability issue, non-blocking coverage gap
- **LOW**: style, naming, minor docs/comment clarity

Do not escalate severity without evidence. Do not report LOW findings unless they affect comprehension or future maintenance.

---

## Autonomous Decision Rules

Return one of:

- **AUTO_FIX**: verified CRITICAL/HIGH findings exist and fixes are local and safe
- **AUTO_APPROVE_REVIEW**: no verified CRITICAL/HIGH findings remain; only MEDIUM/LOW follow-ups
- **STOP_FOR_HUMAN**: findings are contradictory, unsafe, ambiguous, or require product/architecture judgment
- **REPLAN_REQUIRED**: review shows the original plan was materially wrong

---

## Artifact Format

Write `$ARTIFACTS_DIR/review/consolidated-review.md`:

```markdown
# Consolidated Review

**Generated**: {ISO timestamp}
**Autonomous Decision**: AUTO_FIX | AUTO_APPROVE_REVIEW | STOP_FOR_HUMAN | REPLAN_REQUIRED

## Executive Summary

{3-5 sentences summarizing evidence, risk, and next action.}

## Evidence Ledger

| Claim | Evidence | Classification | Severity |
|-------|----------|----------------|----------|

## Verified CRITICAL/HIGH Findings for Auto-Fix

| ID | Severity | Location | Problem | Safe Fix Guidance | Validation |
|----|----------|----------|---------|-------------------|------------|

## Medium / Low Follow-Ups

| ID | Severity | Location | Recommendation | Suggested Handling |
|----|----------|----------|----------------|--------------------|

## Duplicates Removed

| Duplicate | Merged Into | Reason |
|-----------|-------------|--------|

## Conflicts / Unknowns

| Item | Why It Cannot Be Resolved Autonomously | Required Evidence |
|------|----------------------------------------|-------------------|

## Out-of-Scope Findings Ignored

| Finding | Scope Evidence | Reason |
|---------|----------------|--------|

## Autonomous Handoff

- If decision is AUTO_FIX: run `archon-implement-review-fixes` for verified CRITICAL/HIGH only
- If AUTO_APPROVE_REVIEW: proceed to workflow summary
- If STOP_FOR_HUMAN: do not modify code; surface exact decision needed
- If REPLAN_REQUIRED: write a replan note and stop implementation
```

---

## GitHub Comment

Post a concise PR comment summarizing:
- autonomous decision
- verified CRITICAL/HIGH count
- follow-up count
- whether fix node will run or workflow should stop

---

## Output

Return only:

```markdown
✅ Review synthesis complete.
Decision: AUTO_FIX | AUTO_APPROVE_REVIEW | STOP_FOR_HUMAN | REPLAN_REQUIRED
Artifact: `$ARTIFACTS_DIR/review/consolidated-review.md`
```

---

## Success Criteria

- All available artifacts read
- Findings deduplicated and evidence-classified
- Only verified CRITICAL/HIGH findings routed to auto-fix
- Unsafe ambiguity stops the autonomous workflow
