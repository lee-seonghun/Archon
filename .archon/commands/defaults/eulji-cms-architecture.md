---
description: Review and maintain eulji_cms_platform architecture and integration consistency
argument-hint: <architecture-focus-area>
---

# Eulji CMS Architecture

**Input**: $ARGUMENTS
**Artifacts directory**: $ARTIFACTS_DIR
**Workflow run**: $WORKFLOW_ID
**Base branch**: $BASE_BRANCH

---

## Your Task

Act as the architecture and integration authority for eulji_cms_platform.
Review repository-wide structure, module boundaries, integration correctness, deployment architecture, operational assumptions, and cross-module consistency.

This command is intended for:
- architecture review
- repository-wide reasoning
- integration analysis
- cross-module refactoring
- RBAC and audit verification
- deployment and operations review
- identifying hidden coupling and architectural drift

## Model Routing Context

This command is intended to run with:

- provider: pi
- model: openai-codex/gpt-5.3-codex

This command validates and reviews implementation work produced by lower-cost implementation models.

## Steps

1. Review:
   - repository structure
   - docs/
   - architecture artifacts
   - implementation artifacts from $ARTIFACTS_DIR
   - validation artifacts from $ARTIFACTS_DIR

2. Validate:
   - module boundaries
   - API and integration contracts
   - CMS content lifecycle boundaries
   - auth and RBAC
   - audit logging
   - monitoring and operations assumptions
   - deployment topology
   - kiosk/signage integration
   - accessibility-related architectural impact

3. Detect:
   - architecture drift
   - duplicated logic
   - hidden coupling
   - weak abstractions
   - unsafe shortcuts
   - insufficient test validation

4. If safe and appropriate:
   - refactor architecture-level issues
   - repair integration defects
   - improve maintainability without expanding delivery scope

5. Produce findings with this structure:
   - Status: VERIFIED, VERIFIED_WITH_RISKS, or BLOCKED
   - Areas reviewed
   - Integration findings
   - Architecture drift findings
   - High-risk concerns
   - Required follow-up validation
   - Remaining technical debt

## High-Risk Review Requirements

Any finding involving:
- auth or RBAC
- security-sensitive behavior
- audit logging
- accessibility
- data retention
- deployment
- monitoring
- cross-module integration

must explicitly recommend:
- pi + openai-codex/gpt-5.3-codex verification
- pi + openai/gpt-5.5 delivery validation

## Artifact Output

Write a markdown artifact to:

```text
$ARTIFACTS_DIR/eulji-cms-architecture-review.md
```

If integration repairs or architecture changes are applied, also write:

```text
$ARTIFACTS_DIR/eulji-cms-architecture-changes.md
```

## If Information Is Missing

If repository structure, requirements, or implementation evidence are incomplete, state what is missing and what follow-up command should run next.

## Success Criteria

- Repository-wide architecture is reviewed
- Integration and boundary issues are identified
- High-risk concerns are explicitly marked
- Required follow-up validation is identified
- Architecture drift findings are documented
- Required artifact files are written to $ARTIFACTS_DIR
