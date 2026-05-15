---
description: Create and update a CMS productization backlog from MVP, architecture, implementation, and compliance artifacts
argument-hint: <artifact path or feature scope>
---

# Update Productization Backlog

**Input**: $ARGUMENTS

---

## Your Mission

Create and maintain a productization backlog for EULJI CMS.

The backlog must support:

- Government-deliverable CMS development
- Public-sector operational governance
- Certification readiness
- Accessibility and barrier-free expansion
- Multi-site and multi-tenant operation
- Device and kiosk integration
- Long-term maintainability

**Output artifact**: `$ARTIFACTS_DIR/productization/productization-backlog.md`

---

## Phase 1: LOAD - Gather Productization Inputs

Read available artifacts:

- `$ARTIFACTS_DIR/mvp/mvp-readiness-review.md`
- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`
- `$ARTIFACTS_DIR/implementation/cms-implementation.md`
- `$ARTIFACTS_DIR/compliance/compliance-review.md`
- docs/02_requirements/
- docs/03_architecture/
- docs/04_certification/
- docs/05_operations/

**PHASE_1_CHECKPOINT:**
- [ ] Productization inputs inspected
- [ ] Existing backlog inputs identified

---

## Phase 2: ORGANIZE - Build Productization Backlog

Create backlog items grouped into:

- Foundation
- Security and Governance
- Accessibility and Barrier-Free
- CMS Core
- Multi-Site and Multi-Tenant
- Content Workflow
- Device and Kiosk Integration
- Monitoring and Operations
- Certification and Delivery
- Testing and Automation

For each backlog item define:

- Epic ID
- Feature ID
- Requirement references
- Scope
- Priority
- Dependencies
- Acceptance criteria
- Risks
- Evidence requirements
- Release target

Assign priorities:

- Critical
- High
- Medium
- Low

Assign implementation phases:

- Phase 1 MVP Stabilization
- Phase 2 Productization
- Phase 3 Public-Sector Hardening
- Phase 4 Kiosk and Smart-Space Expansion

**PHASE_2_CHECKPOINT:**
- [ ] Productization backlog organized
- [ ] Priorities assigned
- [ ] Dependencies identified
- [ ] Phases assigned

---

## Phase 3: GENERATE - Save Productization Backlog

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/productization
```

Write artifact:

`$ARTIFACTS_DIR/productization/productization-backlog.md`

Include:

# Productization Backlog

## 1. Executive Summary

## 2. Productization Strategy

## 3. Foundation Backlog

## 4. Security and Governance Backlog

## 5. Accessibility Backlog

## 6. CMS Core Backlog

## 7. Device and Kiosk Backlog

## 8. Certification and Delivery Backlog

## 9. Testing and Automation Backlog

## 10. Release Planning

## 11. Risks and Constraints

## 12. Recommended Development Sequence

CRITICAL:
The backlog must be implementation-oriented and traceable to requirements and certification needs.

**PHASE_3_CHECKPOINT:**
- [ ] Productization backlog artifact created
- [ ] Priorities and phases assigned
- [ ] Requirement traceability included

---

## Success Criteria

- PRODUCTIZATION_BACKLOG_CREATED
- PRIORITIES_ASSIGNED
- DEPENDENCIES_IDENTIFIED
- PHASES_ASSIGNED
- TRACEABILITY_INCLUDED
- ARTIFACT_SAVED
