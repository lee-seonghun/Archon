# Eulji CMS Analyze Command

Use this command when starting new government-delivery CMS work.

## Primary Model
pi - openai/gpt-5.5

## Why This Model
Use gpt-5.5 for:
- high-context requirements analysis
- government-delivery judgement
- accessibility and operational readiness review
- security and auditability reasoning
- requirement traceability analysis
- identifying delivery blockers and policy gaps

This command is analysis and validation oriented.
It should not be used as the primary implementation engine.

## Objective
Analyze requirements and produce a practical implementation roadmap for eulji_cms_platform.

## Instructions
1. Inspect docs/, architecture files, requirements files, and recent implementation changes.
2. Re-analyze the project from the perspective of:
   - public-sector CMS delivery
   - accessibility and barrier-free kiosk expansion
   - signage and outdoor kiosk operation
   - operational auditability and security
   - deployment and maintenance readiness
3. Produce:
   - requirement gaps
   - implementation priorities
   - risk classifications
   - delivery blockers
   - missing validation evidence
   - recommended next implementation slice
   - recommended model route:
     - gpt-5.4-mini
     - gpt-5.3-codex
     - gpt-5.5
4. Explicitly mark:
   - high-risk features
   - features requiring codex verification
   - features requiring delivery validation
5. Save or update documentation under docs/ when appropriate.
6. Do not implement code unless explicitly requested.
