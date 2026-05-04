---
description: Create comprehensive feature implementation plan optimized for GPT-5.5 reasoning
argument-hint: <feature description | path/to/prd.md>
---

# Create Implementation Plan

**Input**: $ARGUMENTS
**Workflow ID**: $WORKFLOW_ID

---

## GPT-5.5 Operating Contract

You are the reasoning/planning agent. Do not modify source files. Produce a plan that a separate implementation agent can execute without asking follow-up questions.

Separate all conclusions into:
- **Verified facts**: directly supported by file reads, command output, or prior workflow artifacts
- **Assumptions**: plausible but not directly verified
- **Required validation**: checks the implementation agent must run before claiming success

Optimize for:
1. Correctness and architectural fit
2. Smallest safe change
3. Testability
4. Regression avoidance
5. Clear handoff to Codex implementation nodes

Do not invent file paths, APIs, commands, or dependencies. If evidence is missing, state the missing evidence and how to obtain it.

---

## Your Mission

Transform "$ARGUMENTS" into a battle-tested implementation plan through systematic codebase exploration, pattern extraction, and strategic research.

**Core Principle**: PLAN ONLY - no code written. Create a context-rich document that enables one-pass implementation success.

**Execution Order**: CODEBASE FIRST, RESEARCH SECOND. Solutions must fit existing patterns before introducing new ones.

**Agent Strategy**: Use Task tool with subagent_type="Explore" for codebase intelligence gathering. This ensures thorough pattern discovery before any external research.

**Output**: `$ARTIFACTS_DIR/plan.md`

---

## Required Plan Quality Gates

Before writing the final plan, verify:
- Every file path is observed in the repository or clearly marked as CREATE
- Every recommendation cites an existing pattern or an explicit user requirement
- Every task has a validation command or a clear reason validation is not possible
- Scope limits are explicit; avoid broad refactors unless required
- Risks distinguish verified blockers from assumptions

---

## Phase 0: DETECT - Input Type Resolution

Determine whether the input is a PRD file, another document, free-form text, or blank input. If blank, stop and ask for input. If a PRD is detected, select the next actionable pending phase with completed dependencies and report that selection.

---

## Phase 1: PARSE - Feature Understanding

Discover the actual project structure before assuming source paths. Read `CLAUDE.md` when present. Extract the problem, user value, feature type, complexity, and affected systems.

Output a concise user story and a rationale-backed complexity rating.

**Gate**: If requirements are ambiguous enough to risk the wrong implementation, stop and ask for clarification.

---

## Phase 2: EXPLORE - Codebase Intelligence

Use the Explore agent thoroughly. Find analogous implementations, naming conventions, error handling, logging, type definitions, tests, integration points, and existing dependencies.

Record actual code snippets and file:line references. Do not use generic examples where repository examples exist.

---

## Phase 3: RESEARCH - External Documentation

Only after codebase exploration, research external documentation for involved libraries. Prefer official docs matching installed package versions. Record gotchas and how they affect implementation.

---

## Phase 4: DESIGN - UX / Behavior Transformation

Describe before/after behavior only when it is relevant to the request. Prefer concise diagrams and tables over decorative output.

---

## Phase 5: ARCHITECT - Strategic Design

Audit existing primitives before proposing new abstractions. Prefer extending existing interfaces and patterns. Document the chosen approach, alternatives rejected, execution order, failure modes, security considerations, and explicit non-goals.

---

## Phase 6: GENERATE - Write Plan File

Write `$ARTIFACTS_DIR/plan.md` with this structure:

```markdown
# Feature: {Feature Name}

## Summary
{What is being built and the smallest safe approach.}

## Verified Facts
- {Fact with file:line or command/artifact source}

## Assumptions
- {Assumption and how to validate it}

## User Story
As a {user type}
I want to {action}
So that {benefit}

## Problem Statement
{Specific, testable problem}

## Solution Statement
{Architecture overview}

## Scope Limits
- {What is intentionally not included}

## Mandatory Reading
| Priority | File | Lines | Why |
|----------|------|-------|-----|

## Patterns to Mirror
| Category | Source | Pattern | Notes |
|----------|--------|---------|-------|

## Files to Change
| File | Action | Justification |
|------|--------|---------------|

## Step-by-Step Tasks
### Task 1: {CREATE/UPDATE} `{file path}`
- ACTION:
- IMPLEMENT:
- MIRROR:
- IMPORTS:
- GOTCHA:
- VALIDATE:

## Testing Strategy
- Unit tests:
- Integration tests:
- Edge cases:

## Validation Commands
| Level | Command | Expected Result |
|-------|---------|-----------------|

## Acceptance Criteria
- [ ] {criterion}

## Risks and Mitigations
| Risk | Evidence | Impact | Mitigation |
|------|----------|--------|------------|

## Implementation Handoff
Instructions for the Codex implementation node:
- Modify only listed files unless validation proves more are required
- Run validation after each logical change
- Document deviations in `$ARTIFACTS_DIR/implementation.md`
```

If input was a PRD, update its phase status and link the plan file when appropriate.

---

## Phase 7: VERIFY - Plan Quality Check

Check that an agent unfamiliar with the codebase could implement using only the plan. If not, add missing context before final output.

---

## Phase 8: OUTPUT - Report to User

Return a concise summary:

```markdown
## Plan Created

**File**: `$ARTIFACTS_DIR/plan.md`
**Workflow ID**: `$WORKFLOW_ID`

### Summary
{2-3 sentences}

### Confidence
{1-10}/10 with rationale

### Key Risks
- {risk}: {mitigation}

### Next Step
Plan ready for implementation.
```

---

## Success Criteria

- CONTEXT_COMPLETE: Actual codebase patterns and integration points documented
- IMPLEMENTATION_READY: Tasks executable top-to-bottom
- PATTERN_FAITHFUL: Existing style and architecture mirrored
- VALIDATION_DEFINED: Every task has clear validation
- SCOPE_CONTROLLED: No unnecessary rewrites or abstractions
- ARTIFACT_WRITTEN: Plan saved to `$ARTIFACTS_DIR/plan.md`
