---
description: Create comprehensive feature implementation plan with codebase analysis and research
argument-hint: <feature description | path/to/prd.md>
---

# Create Implementation Plan

**Input**: $ARGUMENTS
**Workflow ID**: $WORKFLOW_ID

---

## Your Mission

Transform "$ARGUMENTS" into a battle-tested implementation plan through systematic codebase exploration, pattern extraction, and strategic research.

**Core Principle**: PLAN ONLY - no code written. Create a context-rich document that enables one-pass implementation success.

**Execution Order**: CODEBASE FIRST, RESEARCH SECOND. Solutions must fit existing patterns before introducing new ones.

**Agent Strategy**: Use Task tool with subagent_type="Explore" for codebase intelligence gathering. This ensures thorough pattern discovery before any external research.

**Output**: `$ARTIFACTS_DIR/plan.md`

---

## Phase 0: DETECT - Input Type Resolution

### 0.1 Determine Input Type

| Input Pattern | Type | Action |
|---------------|------|--------|
| Ends with `.prd.md` | PRD file | Parse PRD, select next phase |
| Ends with `.md` and contains "Implementation Phases" | PRD file | Parse PRD, select next phase |
| File path that exists | Document | Read and extract feature description |
| Free-form text | Description | Use directly as feature input |
| Empty/blank | Error | STOP - require input |

### 0.2 If PRD File Detected

1. **Read the PRD file**
2. **Parse the Implementation Phases table** - find rows with `Status: pending`
3. **Check dependencies** - only select phases whose dependencies are `complete`
4. **Select the next actionable phase:**
   - First pending phase with all dependencies complete
   - If multiple candidates with same dependencies, note parallelism opportunity

5. **Extract phase context:**
   ```
   PHASE: {phase number and name}
   GOAL: {from phase details}
   SCOPE: {from phase details}
   SUCCESS SIGNAL: {from phase details}
   PRD CONTEXT: {problem statement, user, hypothesis from PRD}
   ```

6. **Report selection to user:**
   ```
   PRD: {prd file path}
   Selected Phase: #{number} - {name}

   {If parallel phases available:}
   Note: Phase {X} can also run in parallel (in separate worktree).

   Proceeding with Phase #{number}...
   ```

### 0.3 If Free-form Description

Proceed directly to Phase 1 with the input as feature description.

**PHASE_0_CHECKPOINT:**

- [ ] Input type determined
- [ ] If PRD: next phase selected and dependencies verified
- [ ] Feature description ready for Phase 1

---

## Phase 1: PARSE - Feature Understanding

### 1.1 Discover Project Structure

**CRITICAL**: Do NOT assume `src/` exists. Discover actual structure:

```bash
ls -la
ls -la */ 2>/dev/null | head -50
cat package.json 2>/dev/null | head -20
```

### 1.2 Read CLAUDE.md

```bash
cat CLAUDE.md
```

### 1.3 Extract from Input

- Core problem being solved
- User value and business impact
- Feature type: NEW_CAPABILITY | ENHANCEMENT | REFACTOR | BUG_FIX
- Complexity: LOW | MEDIUM | HIGH
- Affected systems list

### 1.4 Formulate User Story

```
As a <user type>
I want to <action/goal>
So that <benefit/value>
```

**PHASE_1_CHECKPOINT:**

- [ ] Project structure discovered
- [ ] CLAUDE.md rules noted
- [ ] Problem statement is specific and testable
- [ ] User story follows correct format
- [ ] Complexity assessment has rationale
- [ ] Affected systems identified

---

## Phase 2: EXPLORE - Codebase Intelligence

Use Task tool with subagent_type="Explore".

### 2.1 Find Existing Patterns

- Similar features
- Naming conventions
- Error handling
- Logging
- Type definitions
- Tests
- Integration points
- Existing dependencies

### 2.2 Record Evidence

Record actual file paths and snippets.

**PHASE_2_CHECKPOINT:**

- [ ] Analogous implementations found
- [ ] Existing patterns captured
- [ ] Tests and validation patterns found

---

## Phase 3: RESEARCH - External Documentation

Only after codebase exploration.

---

## Phase 4: DESIGN - UX / Behavior Transformation

Describe before/after behavior.

---

## Phase 5: ARCHITECT - Strategic Design

Document chosen approach, alternatives, risks.

---

## Phase 6: GENERATE - Write Plan File

Write `$ARTIFACTS_DIR/plan.md`.

---

## Phase 7: VERIFY - Plan Quality Check

Ensure plan is implementable.

---

## Phase 8: OUTPUT - Report to User

Return summary.
