---
description: Create comprehensive feature implementation plan optimized for GPT-5.5 reasoning while preserving original workflow contract
argument-hint: <feature description | path/to/prd.md>
---

# Create Implementation Plan

**Input**: $ARGUMENTS
**Workflow ID**: $WORKFLOW_ID

---

## GPT-5.5 Operating Contract

You are the reasoning/planning agent. Do not modify source files. Preserve this command's original phase flow, data contracts, checkpoints, and artifact outputs.

Separate conclusions into:
- **Verified facts**: directly supported by file reads, command output, or prior workflow artifacts
- **Assumptions**: plausible but not directly verified
- **Required validation**: checks the implementation agent must run before claiming success

Optimize for:
1. Correctness and architectural fit
2. Smallest safe change
3. Testability
4. Regression avoidance
5. Clear handoff to Codex implementation nodes

Do not invent file paths, APIs, commands, dependencies, or repository structure. If evidence is missing, state the missing evidence and how to obtain it.

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
- Codex handoff is specific enough to execute without guessing

---

## Phase 0: DETECT - Input Type Resolution

### 0.1 Determine Input Type

Classify input deterministically using this table. Do not infer a PRD from vague language alone.

| Input Pattern | Type | Action |
|---------------|------|--------|
| Ends with `.prd.md` | PRD file | Parse PRD, select next phase |
| Ends with `.md` and contains `Implementation Phases` | PRD file | Parse PRD, select next phase |
| File path that exists | Document | Read and extract feature description |
| Free-form non-empty text | Description | Use directly as feature input |
| Empty/blank | Error | STOP - require input |

### 0.2 If PRD File Detected

1. **Read the PRD file**
2. **Parse the Implementation Phases table** - find rows with `Status: pending`
3. **Check dependencies** - only select phases whose dependencies are `complete`
4. **Select the next actionable phase:**
   - First pending phase with all dependencies complete
   - If multiple candidates with same dependencies, note parallelism opportunity

5. **Extract phase context:**

```text
PHASE: {phase number and name}
GOAL: {from phase details}
SCOPE: {from phase details}
SUCCESS SIGNAL: {from phase details}
PRD CONTEXT: {problem statement, user, hypothesis from PRD}
```

6. **Report selection to user:**

```text
PRD: {prd file path}
Selected Phase: #{number} - {name}

{If parallel phases available:}
Note: Phase {X} can also run in parallel (in separate worktree).

Proceeding with Phase #{number}...
```

### 0.3 If Free-form Description

Proceed directly to Phase 1 with the input as feature description.

### 0.4 If Existing Non-PRD Document

Read the document, extract the feature description, and proceed to Phase 1. Record the document path as evidence.

**PHASE_0_CHECKPOINT:**

- [ ] Input type determined using the table above
- [ ] If PRD: next phase selected and dependencies verified
- [ ] If document: feature description extracted
- [ ] Feature description ready for Phase 1

---

## Phase 1: PARSE - Feature Understanding

### 1.1 Discover Project Context

Before assuming source paths, discover the repository structure and read project guidance:

```bash
pwd
ls
find . -maxdepth 2 -type f \( -name 'CLAUDE.md' -o -name 'README.md' -o -name 'package.json' -o -name 'pyproject.toml' -o -name 'Cargo.toml' \) | sort
```

Read `CLAUDE.md` when present. Extract project rules, validation commands, naming conventions, and non-goals.

### 1.2 Extract Feature Meaning

Extract:
- Problem being solved
- User value
- Feature type
- Complexity
- Affected systems
- Explicit exclusions
- Ambiguities

### 1.3 Clarification Gate

If requirements are ambiguous enough to risk the wrong implementation, stop and ask for clarification instead of creating a speculative plan.

**PHASE_1_CHECKPOINT:**

- [ ] Project guidance discovered
- [ ] Feature description extracted
- [ ] User story and problem statement clear
- [ ] Ambiguity gate passed or clarification requested

---

## Phase 2: EXPLORE - Codebase Intelligence

Use the Explore agent thoroughly before external research.

### 2.1 Find Existing Patterns

Use Task tool with `subagent_type="Explore"` to inspect:
- Similar features
- Naming conventions
- Error handling
- Logging
- Type definitions
- Tests
- Integration points
- Existing dependencies
- UI or API patterns
- Storage/state management patterns

### 2.2 Record Evidence

Record actual file paths, line references, and snippets. Do not use generic examples where repository examples exist.

### 2.3 Detect Existing Primitives

Before proposing new abstractions, find whether equivalent primitives already exist.

**PHASE_2_CHECKPOINT:**

- [ ] Analogous implementations found or absence documented
- [ ] Existing patterns captured with file evidence
- [ ] Tests and validation patterns found
- [ ] Existing primitives checked

---

## Phase 3: RESEARCH - External Documentation

Only after codebase exploration, research external documentation for involved libraries.

### 3.1 Match Installed Versions

Prefer official docs matching installed package versions.

### 3.2 Record Gotchas

Record gotchas, migration concerns, breaking changes, and validation implications.

**PHASE_3_CHECKPOINT:**

- [ ] External docs consulted only where needed
- [ ] Version-specific details captured
- [ ] Gotchas translated into implementation constraints

---

## Phase 4: DESIGN - UX / Behavior Transformation

Describe before/after behavior when relevant.

Include:
- User-visible behavior
- CLI/API/UI changes
- Edge cases
- Error messages
- Accessibility or documentation impact when applicable

Prefer concise tables over decorative output.

**PHASE_4_CHECKPOINT:**

- [ ] Desired behavior defined
- [ ] Edge cases listed
- [ ] User-facing changes understood

---

## Phase 5: ARCHITECT - Strategic Design

### 5.1 Choose Smallest Safe Approach

Audit existing primitives before proposing new abstractions. Prefer extending existing interfaces and patterns.

### 5.2 Document Architecture Decision

Document:
- Chosen approach
- Alternatives rejected
- Execution order
- Failure modes
- Security considerations
- Backward compatibility
- Explicit non-goals

**PHASE_5_CHECKPOINT:**

- [ ] Architecture fits existing patterns
- [ ] Scope limits explicit
- [ ] Alternatives considered
- [ ] Risks and mitigations documented

---

## Phase 6: GENERATE - Write Plan File

Write `$ARTIFACTS_DIR/plan.md` with this exact structure:

```markdown
# Feature: {Feature Name}

## Summary
{What is being built and the smallest safe approach.}

## Verified Facts
- {Fact with file:line, command output, or artifact source}

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
- Do not introduce broad refactors or unrelated abstractions
- Document deviations in `$ARTIFACTS_DIR/implementation.md`
- If implementation becomes unsafe, write `$ARTIFACTS_DIR/self-healing.md`
```

### 6.1 PRD Status Update

If input was a PRD, update its phase status and link the plan file when appropriate.

**PHASE_6_CHECKPOINT:**

- [ ] `$ARTIFACTS_DIR/plan.md` written
- [ ] Verified facts and assumptions separated
- [ ] Task list executable by Codex
- [ ] Validation commands included
- [ ] PRD status updated if applicable

---

## Phase 7: VERIFY - Plan Quality Check

Check that an implementation agent unfamiliar with the codebase could implement using only the plan.

Verify:
- Mandatory reading gives enough context
- Every task has a concrete file/action
- Every new/changed behavior has validation
- Risks are actionable
- Scope is limited
- Handoff instructions are clear

If not, add missing context before final output.

**PHASE_7_CHECKPOINT:**

- [ ] Plan is implementation-ready
- [ ] No hidden assumptions required for Codex
- [ ] Success criteria testable

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

- **CONTEXT_COMPLETE**: Actual codebase patterns and integration points documented
- **IMPLEMENTATION_READY**: Tasks executable top-to-bottom
- **PATTERN_FAITHFUL**: Existing style and architecture mirrored
- **VALIDATION_DEFINED**: Every task has clear validation
- **SCOPE_CONTROLLED**: No unnecessary rewrites or abstractions
- **ARTIFACT_WRITTEN**: Plan saved to `$ARTIFACTS_DIR/plan.md`
