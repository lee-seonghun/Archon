---
description: Synthesize all review agent findings into consolidated report and autonomous decision
argument-hint: (none - reads from review artifacts)
---

# Synthesize Review

---

## GPT-5.5 Operating Contract

You are the reasoning/synthesis agent. Do not modify source files. Preserve the original review synthesis workflow while adding evidence-based autonomous decisioning.

Classify every claim as:
- **Verified finding**: supported by diff, file path, command output, or artifact evidence
- **Duplicate finding**: same root cause as another finding
- **Assumption**: plausible but not proven by available evidence
- **Out-of-scope finding**: conflicts with explicit scope limits
- **Conflict**: agents disagree or the recommendation is unsafe/unclear

Autonomous rule: only verified CRITICAL and HIGH findings may be routed to auto-fix. MEDIUM and LOW findings should become decision/follow-up items unless they are trivial and risk-free.

---

## Your Mission

Read all parallel review agent artifacts, synthesize findings into a consolidated report, create a master artifact, and post a comprehensive review comment to the GitHub PR.

**Output artifact**: `$ARTIFACTS_DIR/review/consolidated-review.md`
**GitHub action**: Post PR comment with full review

---

## Phase 1: LOAD - Gather All Findings

### 1.1 Get PR Number from Registry

```bash
PR_NUMBER=$(cat $ARTIFACTS_DIR/.pr-number)
```

### 1.2 Read Scope

```bash
cat $ARTIFACTS_DIR/review/scope.md
```

Scope limits are authoritative. Do not classify explicitly out-of-scope items as defects.

### 1.3 Read All Agent Artifacts

```bash
cat $ARTIFACTS_DIR/review/code-review-findings.md
cat $ARTIFACTS_DIR/review/error-handling-findings.md
cat $ARTIFACTS_DIR/review/test-coverage-findings.md
cat $ARTIFACTS_DIR/review/comment-quality-findings.md
cat $ARTIFACTS_DIR/review/docs-impact-findings.md
```

If an expected artifact is missing, continue with available evidence and list it under Unknowns.

**PHASE_1_CHECKPOINT:**
- [ ] PR number identified
- [ ] Scope artifact read
- [ ] All available agent artifacts read
- [ ] Missing artifacts recorded as Unknowns

---

## Phase 2: SYNTHESIZE - Combine Findings

### 2.1 Aggregate by Severity

Combine all findings across agents:
- **CRITICAL**: Must fix before merge
- **HIGH**: Should fix before merge
- **MEDIUM**: Consider fixing (options provided)
- **LOW**: Nice to have (defer or create issue)

Severity rules:
- CRITICAL: security issue, data loss, broken build/runtime, wrong public API behavior, merge-blocking defect
- HIGH: likely production bug, missing required validation, unsafe error handling, broken important workflow
- MEDIUM: edge case, maintainability issue, non-blocking coverage gap
- LOW: style, naming, minor docs/comment clarity

Do not escalate severity without evidence.

### 2.2 Evidence Classification

For each finding, record:
- Evidence source: file path, line, diff, artifact, or command output
- Classification: Verified / Duplicate / Assumption / Out-of-scope / Conflict
- Whether it is safe for autonomous fix

### 2.3 Deduplicate

Check for overlapping findings:
- Same issue reported by multiple agents
- Related issues that should be grouped
- Conflicting recommendations that must be resolved or stopped for human review

### 2.4 Prioritize

Rank findings by:
1. Severity (CRITICAL > HIGH > MEDIUM > LOW)
2. Verified evidence strength
3. User impact
4. Ease and locality of fix
5. Risk if not fixed

### 2.5 Autonomous Decision

Return one of:
- **AUTO_FIX**: verified CRITICAL/HIGH findings exist and fixes are local and safe
- **AUTO_APPROVE_REVIEW**: no verified CRITICAL/HIGH findings remain; only MEDIUM/LOW follow-ups
- **STOP_FOR_HUMAN**: findings are contradictory, unsafe, ambiguous, or require product/architecture judgment
- **REPLAN_REQUIRED**: review shows the original plan was materially wrong

### 2.6 Compile Statistics

```text
Total findings: {n}
- CRITICAL: {n}
- HIGH: {n}
- MEDIUM: {n}
- LOW: {n}

By classification:
- Verified: {n}
- Duplicate: {n}
- Assumption: {n}
- Out-of-scope: {n}
- Conflict: {n}

By agent:
- code-review: {n} findings
- error-handling: {n} findings
- test-coverage: {n} findings
- comment-quality: {n} findings
- docs-impact: {n} findings
```

**PHASE_2_CHECKPOINT:**
- [ ] Findings aggregated by severity
- [ ] Evidence classification completed
- [ ] Duplicates removed
- [ ] Conflicts/unknowns identified
- [ ] Autonomous decision selected
- [ ] Statistics compiled

---

## Phase 3: GENERATE - Create Consolidated Artifact

Write to `$ARTIFACTS_DIR/review/consolidated-review.md`:

```markdown
# Consolidated Review: PR #{number}

**Date**: {ISO timestamp}
**Agents**: code-review, error-handling, test-coverage, comment-quality, docs-impact
**Total Findings**: {count}
**Autonomous Decision**: AUTO_FIX | AUTO_APPROVE_REVIEW | STOP_FOR_HUMAN | REPLAN_REQUIRED

---

## Executive Summary

{3-5 sentence overview of PR quality, main concerns, evidence strength, and next action}

**Overall Verdict**: {APPROVE | REQUEST_CHANGES | NEEDS_DISCUSSION}

**Auto-fix Candidates**: {n} verified CRITICAL + HIGH issues can be auto-fixed
**Manual Review Needed**: {n} conflicts/unknowns require decision

---

## Evidence Ledger

| Finding | Evidence | Classification | Severity | Auto-Fix Safe? |
|---------|----------|----------------|----------|----------------|

---

## Statistics

| Agent | CRITICAL | HIGH | MEDIUM | LOW | Total |
|-------|----------|------|--------|-----|-------|
| Code Review | {n} | {n} | {n} | {n} | {n} |
| Error Handling | {n} | {n} | {n} | {n} | {n} |
| Test Coverage | {n} | {n} | {n} | {n} | {n} |
| Comment Quality | {n} | {n} | {n} | {n} | {n} |
| Docs Impact | {n} | {n} | {n} | {n} | {n} |
| **Total** | **{n}** | **{n}** | **{n}** | **{n}** | **{n}** |

---

## CRITICAL Issues (Must Fix)

### Issue 1: {Title}

**Source Agent**: {agent-name}
**Location**: `{file}:{line}`
**Classification**: Verified / Assumption / Conflict
**Auto-Fix Safe**: Yes / No
**Category**: {category}

**Problem**:
{description}

**Recommended Fix**:
```typescript
{fix code or precise fix guidance}
```

**Why Critical**:
{impact explanation}

**Validation Required**:
{commands/checks}

---

## HIGH Issues (Should Fix)

{Same structure as CRITICAL}

---

## MEDIUM Issues (Options for User)

### Issue 1: {Title}

**Source Agent**: {agent-name}
**Location**: `{file}:{line}`
**Classification**: Verified / Assumption / Conflict

**Problem**:
{description}

**Options**:

| Option | Approach | Effort | Risk if Skipped |
|--------|----------|--------|-----------------|
| Fix Now | {approach} | {LOW/MED/HIGH} | {risk} |
| Create Issue | Defer to separate PR | LOW | {risk} |
| Skip | Accept as-is | NONE | {risk} |

**Recommendation**: {which option and why}

---

## LOW Issues (For Consideration)

| Issue | Location | Agent | Suggestion |
|-------|----------|-------|------------|

---

## Duplicates Removed

| Duplicate Finding | Merged Into | Reason |
|-------------------|-------------|--------|

---

## Conflicts and Unknowns

| Item | Why It Cannot Be Resolved Autonomously | Required Evidence / Decision |
|------|----------------------------------------|------------------------------|

---

## Out-of-Scope Findings Ignored

| Finding | Scope Evidence | Reason |
|---------|----------------|--------|

---

## Positive Observations

{Aggregated good things from all agents}

---

## Suggested Follow-up Issues

| Issue Title | Priority | Related Finding |
|-------------|----------|-----------------|

---

## Autonomous Handoff

- If AUTO_FIX: `archon-implement-review-fixes` should address only verified CRITICAL/HIGH issues marked Auto-Fix Safe
- If AUTO_APPROVE_REVIEW: proceed to workflow summary
- If STOP_FOR_HUMAN: do not modify code; surface the required decision
- If REPLAN_REQUIRED: stop implementation and request plan revision

---

## Agent Artifacts

| Agent | Artifact | Findings |
|-------|----------|----------|
| Code Review | `code-review-findings.md` | {n} |
| Error Handling | `error-handling-findings.md` | {n} |
| Test Coverage | `test-coverage-findings.md` | {n} |
| Comment Quality | `comment-quality-findings.md` | {n} |
| Docs Impact | `docs-impact-findings.md` | {n} |

---

## Metadata

- **Synthesized**: {ISO timestamp}
- **Artifact**: `$ARTIFACTS_DIR/review/consolidated-review.md`
```

**PHASE_3_CHECKPOINT:**
- [ ] Consolidated artifact created
- [ ] All findings included or explicitly excluded
- [ ] Severity ordering correct
- [ ] Evidence ledger complete
- [ ] Autonomous handoff present

---

## Phase 4: POST - GitHub PR Comment

Post a GitHub-friendly review comment containing:
- Executive summary
- Autonomous decision
- Severity counts
- Verified CRITICAL/HIGH auto-fix candidates
- MEDIUM decision items
- LOW suggestions collapsed or summarized
- Conflicts/unknowns if any
- Next step for the workflow

Use `gh pr comment {number} --body ...`.

**PHASE_4_CHECKPOINT:**
- [ ] GitHub comment posted
- [ ] Formatting renders correctly
- [ ] Autonomous decision visible

---

## Phase 5: OUTPUT - Confirmation

Output only a brief confirmation:

```markdown
✅ Review synthesis complete.
Decision: AUTO_FIX | AUTO_APPROVE_REVIEW | STOP_FOR_HUMAN | REPLAN_REQUIRED
Artifact: `$ARTIFACTS_DIR/review/consolidated-review.md`
```

---

## Success Criteria

- **ALL_ARTIFACTS_READ**: All available review findings loaded
- **FINDINGS_SYNTHESIZED**: Combined, deduplicated, prioritized
- **EVIDENCE_CLASSIFIED**: Verified/assumption/conflict/out-of-scope status recorded
- **CONSOLIDATED_CREATED**: Master artifact written
- **AUTONOMOUS_HANDOFF_DEFINED**: Next workflow action is explicit
- **GITHUB_POSTED**: PR comment visible
