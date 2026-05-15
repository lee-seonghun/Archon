---
description: Generate government-delivery documentation package for CMS platform implementation and certification readiness
argument-hint: <compliance or implementation artifact>
---

# Generate Government Delivery Docs

**Input**: $ARGUMENTS

---

## Your Mission

Generate a government-delivery documentation package for the CMS platform.

The documentation must support:

- Public-sector procurement review
- GS certification preparation
- Operational handoff
- Accessibility review
- Security review
- Maintenance and support planning

**Output artifact**: `$ARTIFACTS_DIR/delivery/government-delivery-package.md`

---

## Phase 1: LOAD - Gather Evidence and Artifacts

Read:

- Requirement analysis artifacts
- Architecture artifacts
- Implementation artifacts
- Compliance review artifacts
- Test artifacts
- docs/ directory structure

**PHASE_1_CHECKPOINT:**
- [ ] Existing artifacts collected
- [ ] Delivery scope identified

---

## Phase 2: COMPOSE - Build Delivery Documentation

Generate documentation sections for:

- Product overview
- Public-sector operational goals
- Architecture summary
- Accessibility readiness
- Security and governance
- Logging and traceability
- Deployment and operations
- Testing and validation
- Certification readiness
- Maintenance strategy
- Risks and limitations

Also generate:

- Recommended document structure
- Required evidence list
- Missing documentation list

**PHASE_2_CHECKPOINT:**
- [ ] Delivery sections drafted
- [ ] Certification readiness summarized
- [ ] Operational considerations included

---

## Phase 3: GENERATE - Save Delivery Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/delivery
```

Write artifact:

`$ARTIFACTS_DIR/delivery/government-delivery-package.md`

Include:

# Government Delivery Documentation Package

## 1. Product Overview

## 2. Public-Sector Operational Context

## 3. Architecture Overview

## 4. Accessibility and Barrier-Free Readiness

## 5. Security and Governance

## 6. Logging and Traceability

## 7. Deployment and Operations

## 8. Testing and Validation Summary

## 9. Certification Readiness

## 10. Maintenance and Support Plan

## 11. Required Evidence and Deliverables

## 12. Remaining Risks and Gaps

CRITICAL:
The documentation must be actionable for public-sector procurement review and operational handoff.

**PHASE_3_CHECKPOINT:**
- [ ] Delivery artifact created
- [ ] Public-sector operational context included
- [ ] Certification and accessibility included

---

## Success Criteria

- DELIVERY_PACKAGE_CREATED
- CERTIFICATION_READINESS_INCLUDED
- ACCESSIBILITY_INCLUDED
- OPERATIONAL_CONTEXT_INCLUDED
- MAINTENANCE_PLAN_INCLUDED
- ARTIFACT_SAVED
