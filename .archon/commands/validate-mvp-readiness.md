---
description: Validate whether the CMS MVP is ready to move into productization
argument-hint: <MVP artifact path, PRD path, or validation target>
---

# Validate MVP Readiness

**Input**: $ARGUMENTS

---

## Your Mission

Validate whether the current EULJI CMS MVP is ready to move into productization.

Evaluate the MVP from these perspectives:

- Product scope clarity
- Public-sector delivery viability
- GS certification preparation risk
- eGovFrame compatibility risk
- Accessibility and barrier-free readiness
- Security and audit readiness
- Multi-site and multi-tenant readiness
- Kiosk/signage expansion readiness
- Operational maintainability
- Evidence and documentation completeness

**Output artifact**: `$ARTIFACTS_DIR/mvp/mvp-readiness-review.md`

---

## Phase 1: LOAD - Gather MVP Inputs

Read available inputs:

- `$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`
- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`
- docs/eulji_cms_platform_prd.md
- docs/01_business/
- docs/02_requirements/
- docs/03_architecture/
- docs/04_certification/
- docs/05_operations/

If some files or directories do not exist, continue with best effort and list missing inputs explicitly.

**PHASE_1_CHECKPOINT:**
- [ ] MVP source documents inspected
- [ ] Existing artifacts inspected
- [ ] Missing inputs recorded

---

## Phase 2: EVALUATE - Productization Readiness

Evaluate MVP readiness across these dimensions:

1. Scope readiness
   - Is the MVP small enough to build?
   - Is the MVP meaningful enough to validate the product?
   - Are non-MVP features clearly deferred?

2. Public-sector readiness
   - Does the MVP include auditability?
   - Does it support administrator governance?
   - Can it generate evidence for delivery review?

3. Certification readiness
   - Are GS and eGovFrame risks identified?
   - Are testable requirements defined?
   - Are documentation gaps known?

4. Accessibility readiness
   - Are accessibility requirements present?
   - Is kiosk/barrier-free extension considered?

5. Security and operations readiness
   - Are RBAC, logging, backup, monitoring, and incident response requirements identified?

6. Productization backlog readiness
   - Are implementation epics defined?
   - Are acceptance criteria usable?
   - Are blockers known?

Assign one status per dimension:

- Ready
- Partially Ready
- Gap
- Blocked
- Not Evaluated

**PHASE_2_CHECKPOINT:**
- [ ] MVP readiness evaluated
- [ ] Productization blockers identified
- [ ] Certification and delivery risks identified

---

## Phase 3: GENERATE - Save MVP Readiness Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/mvp
```

Write artifact:

`$ARTIFACTS_DIR/mvp/mvp-readiness-review.md`

Include:

# MVP Readiness Review

## 1. Executive Summary

## 2. Inputs Reviewed

## 3. MVP Scope Assessment

## 4. Public-Sector Delivery Assessment

## 5. Certification and Standardization Assessment

## 6. Accessibility and Barrier-Free Assessment

## 7. Security and Audit Assessment

## 8. Operations and Maintenance Assessment

## 9. Kiosk/Signage Expansion Assessment

## 10. Productization Backlog

## 11. Blockers and Gaps

## 12. Recommendation

The recommendation must be one of:

- Proceed to Productization
- Proceed with Conditions
- Hold for MVP Revision
- Blocked

**PHASE_3_CHECKPOINT:**
- [ ] MVP readiness artifact created
- [ ] Clear recommendation included
- [ ] Productization backlog included
- [ ] Blockers and gaps listed

---

## Success Criteria

- MVP_READINESS_REVIEW_COMPLETE
- PRODUCTIZATION_RECOMMENDATION_ASSIGNED
- BLOCKERS_IDENTIFIED
- BACKLOG_DEFINED
- ARTIFACT_SAVED
