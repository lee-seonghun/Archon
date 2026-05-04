---
description: Final workflow summary with decision matrix and autonomous completion decision
argument-hint: (no arguments - reads from workflow artifacts)
---

# Workflow Summary

**Workflow ID**: $WORKFLOW_ID

---

## GPT-5.5 Operating Contract

You are the final reasoning/decision agent. Preserve the workflow summary data contract while adding a bounded autonomous completion decision.

Separate conclusions into:
- **Verified outcomes**: supported by workflow artifacts, validation output, or PR metadata
- **Deviations**: implementation differed from plan
- **Remaining risks**: unresolved findings, failed checks, or assumptions
- **Follow-ups**: safe work that can be deferred

Do not claim success unless validation evidence exists. If evidence is missing or contradictory, choose STOP_FOR_HUMAN.

---

## Your Mission

Create the final summary report for the workflow run:
1. Summarize what was implemented vs the plan
2. List deviations and their rationale
3. Surface unfixed review findings
4. Create actionable follow-up recommendations
5. Produce a final autonomous decision
6. Post to GitHub PR as a comment
7. Write artifact for future reference

**Output**: Decision matrix the user can act on quickly.

---

## Autonomous Decision Types

- **AUTO_COMPLETE**: validation passed, no critical risk, no unresolved HIGH/CRITICAL issues
- **AUTO_COMPLETE_WITH_FOLLOWUPS**: validation passed and safe, but MEDIUM/LOW follow-ups remain
- **STOP_FOR_HUMAN**: missing evidence, failed validation, unresolved HIGH/CRITICAL issues, ambiguity, or product judgment required

---

## Phase 1: LOAD - Gather ALL Artifacts

Read every artifact from the workflow run. Missing artifacts must be listed under Unknowns.

```bash
ls -la $ARTIFACTS_DIR/
for file in $ARTIFACTS_DIR/*.md; do
  echo "=== $file ==="
  cat "$file"
done
```

Expected artifacts:
- `plan-context.md`
- `plan-confirmation.md`
- `implementation.md`
- `validation.md`
- `pr-ready.md`
- `.pr-number`
- `.pr-url`

### 1.2 Scan Review Artifacts

```bash
ls -la $ARTIFACTS_DIR/review/
for file in $ARTIFACTS_DIR/review/*.md; do
  echo "=== $file ==="
  cat "$file"
done
```

Expected review artifacts:
- `scope.md`
- `code-review-findings.md`
- `error-handling-findings.md`
- `test-coverage-findings.md`
- `comment-quality-findings.md`
- `docs-impact-findings.md`
- `consolidated-review.md`
- `fix-report.md`
- `sync-report.md`

### 1.3 Extract Key Data

From artifacts extract:
- Plan title, scope, NOT Building items, acceptance criteria
- Implementation tasks completed, files changed, deviations, issues encountered
- Validation results for type-check, lint, tests, build
- Review severity counts and remaining findings
- Fix report: what was fixed and what was not fixed
- PR number, URL, base/head branch

### 1.4 Cross-Reference

Compare:
- Plan vs implementation
- Review findings vs fix report
- NOT Building vs review findings
- Validation claims vs actual validation artifact

**PHASE_1_CHECKPOINT:**
- [ ] All workflow artifacts read or missing artifacts listed
- [ ] All review artifacts read or missing artifacts listed
- [ ] Deviations extracted
- [ ] Unfixed issues identified
- [ ] Validation evidence extracted

---

## Phase 2: ANALYZE - Build Follow-Up Matrix

### 2.1 Categorize Follow-Up Items

From NOT Building:
| Item | Rationale | Suggested Follow-Up |
|------|-----------|---------------------|

From Implementation Deviations:
| Deviation | Reason | Impact | Follow-Up Needed? |
|-----------|--------|--------|-------------------|

From Unfixed Review Findings:
| Finding | Severity | Category | Suggested Action |
|---------|----------|----------|------------------|

### 2.2 Prioritize by Effort vs Value

Classify:
- **Quick Wins**: low effort, high value
- **Worth Doing**: medium effort, clear value
- **Can Defer**: higher effort or lower urgency
- **Human Decision Required**: product/architecture/security judgment

### 2.3 Final Autonomous Decision

Choose:
- AUTO_COMPLETE
- AUTO_COMPLETE_WITH_FOLLOWUPS
- STOP_FOR_HUMAN

Decision rules:
- Any failed required validation -> STOP_FOR_HUMAN
- Any unresolved CRITICAL/HIGH verified issue -> STOP_FOR_HUMAN
- Missing validation artifact -> STOP_FOR_HUMAN
- Only MEDIUM/LOW follow-ups with passed validation -> AUTO_COMPLETE_WITH_FOLLOWUPS
- No material follow-ups and validation passed -> AUTO_COMPLETE

**PHASE_2_CHECKPOINT:**
- [ ] NOT Building items categorized
- [ ] Deviations assessed
- [ ] Unfixed findings prioritized
- [ ] Final autonomous decision selected

---

## Phase 3: GENERATE - Create Decision Matrix

Create `$ARTIFACTS_DIR/workflow-summary.md`:

```markdown
# Workflow Summary

**Generated**: {ISO timestamp}
**Workflow ID**: $WORKFLOW_ID
**PR**: #{number}
**Final Decision**: AUTO_COMPLETE | AUTO_COMPLETE_WITH_FOLLOWUPS | STOP_FOR_HUMAN
**Merge Recommendation**: SAFE TO MERGE | REVIEW REQUIRED

---

## Execution Summary

| Phase | Status | Evidence |
|-------|--------|----------|
| Plan | ✅/⚠️/❌ | {artifact/evidence} |
| Confirm | ✅/⚠️/❌ | {artifact/evidence} |
| Implement | ✅/⚠️/❌ | {artifact/evidence} |
| Validate | ✅/⚠️/❌ | {artifact/evidence} |
| PR | ✅/⚠️/❌ | {artifact/evidence} |
| Review | ✅/⚠️/❌ | {artifact/evidence} |
| Fixes | ✅/⚠️/❌ | {artifact/evidence} |

---

## Verified Outcomes

- {outcome with evidence}

---

## Implementation vs Plan

| Planned | Actual | Match? | Evidence |
|---------|--------|--------|----------|

---

## Deviations

| Deviation | Reason | Risk | Follow-Up |
|-----------|--------|------|-----------|

---

## Validation Results

| Check | Status | Evidence |
|-------|--------|----------|
| Type check | ✅/❌/UNKNOWN | {artifact excerpt} |
| Lint | ✅/❌/UNKNOWN | {artifact excerpt} |
| Tests | ✅/❌/UNKNOWN | {artifact excerpt} |
| Build | ✅/❌/UNKNOWN | {artifact excerpt} |

---

## Review Findings

| Severity | Found | Fixed | Remaining |
|----------|-------|-------|-----------|
| CRITICAL | {n} | {n} | {n} |
| HIGH | {n} | {n} | {n} |
| MEDIUM | {n} | {n} | {n} |
| LOW | {n} | {n} | {n} |

---

## Follow-Up Decision Matrix

### Quick Wins
| # | Item | Action | Effort |
|---|------|--------|--------|

### Suggested GitHub Issues
| # | Title | Labels | From |
|---|-------|--------|------|

### Documentation Gaps
| File | Section | Update Needed |
|------|---------|---------------|

### Deferred Items
| Item | Why Deferred | When to Address |
|------|--------------|-----------------|

---

## Unknowns / Missing Evidence

| Item | Impact | Required Evidence |
|------|--------|-------------------|

---

## Final Decision Rationale

{Why the selected decision is safe or why human review is required.}
```

**PHASE_3_CHECKPOINT:**
- [ ] Decision matrix created
- [ ] Final decision documented
- [ ] Missing evidence listed
- [ ] Summary artifact written

---

## Phase 4: POST - GitHub PR Comment

Post a concise PR comment:

```markdown
## Workflow Summary

**Decision**: AUTO_COMPLETE | AUTO_COMPLETE_WITH_FOLLOWUPS | STOP_FOR_HUMAN
**Merge Recommendation**: SAFE TO MERGE | REVIEW REQUIRED

### Validation
| Check | Status |
|-------|--------|
| Type check | ✅/❌/UNKNOWN |
| Lint | ✅/❌/UNKNOWN |
| Tests | ✅/❌/UNKNOWN |
| Build | ✅/❌/UNKNOWN |

### Review Findings Remaining
| Severity | Remaining |
|----------|-----------|
| CRITICAL | {n} |
| HIGH | {n} |
| MEDIUM | {n} |
| LOW | {n} |

### Follow-Ups
- {brief follow-up list}

**Artifact**: `$ARTIFACTS_DIR/workflow-summary.md`
```

Use:

```bash
gh pr comment {number} --body "{formatted-summary}"
```

**PHASE_4_CHECKPOINT:**
- [ ] Summary formatted for GitHub
- [ ] Comment posted to PR

---

## Phase 5: ARCHIVE - Backward-Compatible Symlink

Create symlink for backward compatibility with PR-based artifact lookup:

```bash
PR_NUMBER=$(cat $ARTIFACTS_DIR/.pr-number 2>/dev/null)
if [ -n "$PR_NUMBER" ]; then
  mkdir -p $ARTIFACTS_DIR/../reviews
  ln -sfn ../runs/$WORKFLOW_ID/review $ARTIFACTS_DIR/../reviews/pr-$PR_NUMBER
fi
```

**PHASE_5_CHECKPOINT:**
- [ ] Symlink created if PR number available

---

## Phase 6: OUTPUT - Report to User

```markdown
## Workflow Complete

**Workflow ID**: `$WORKFLOW_ID`
**PR**: #{number}
**Decision**: AUTO_COMPLETE | AUTO_COMPLETE_WITH_FOLLOWUPS | STOP_FOR_HUMAN
**Merge Recommendation**: SAFE TO MERGE | REVIEW REQUIRED

### Artifacts
- Summary: `$ARTIFACTS_DIR/workflow-summary.md`
- All artifacts: `$ARTIFACTS_DIR/`
```

---

## Success Criteria

- **ARTIFACTS_LOADED**: All available workflow and review artifacts read
- **MATRIX_CREATED**: Follow-up items categorized and prioritized
- **FINAL_DECISION_RECORDED**: Autonomous decision documented with evidence
- **GITHUB_POSTED**: Summary comment posted on PR
- **ARTIFACT_WRITTEN**: `workflow-summary.md` created
- **ACTIONABLE**: User has clear next steps
