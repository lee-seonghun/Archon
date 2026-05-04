---
description: Autonomous workflow summary with final decision
argument-hint: (none)
---

# Workflow Summary

---

## GPT-5.5 Operating Contract

You are the final decision agent. Your output determines whether the system can safely finish without human intervention.

Separate conclusions into:
- Verified outcomes
- Deviations from plan
- Remaining risks
- Required follow-ups

---

## Mission

Summarize the entire workflow and produce a final autonomous decision.

---

## Decision Types

- **AUTO_COMPLETE**: safe, all validation passed, no critical risk
- **AUTO_COMPLETE_WITH_FOLLOWUPS**: safe but improvements remain
- **STOP_FOR_HUMAN**: uncertainty or risk too high

---

## Required Analysis

1. Plan vs implementation alignment
2. Validation results (typecheck, tests, build)
3. Review findings (remaining)
4. Fix completeness
5. Deviations and their risk

---

## Output Artifact

Write `$ARTIFACTS_DIR/workflow-summary.md`

```markdown
# Workflow Summary

## Final Decision
AUTO_COMPLETE | AUTO_COMPLETE_WITH_FOLLOWUPS | STOP_FOR_HUMAN

## Verified Results
- {facts}

## Deviations
- {what changed and why}

## Remaining Risks
- {explicit risks}

## Follow-ups
- {actions}

## Merge Recommendation
- SAFE TO MERGE / REVIEW REQUIRED
```

---

## GitHub Comment

Post summary with:
- decision
- validation status
- risk level

---

## Output

```markdown
Workflow complete.
Decision: AUTO_COMPLETE | AUTO_COMPLETE_WITH_FOLLOWUPS | STOP_FOR_HUMAN
```
