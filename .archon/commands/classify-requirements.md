---
description: Classify CMS requirements into implementation, certification, accessibility, operation, and delivery categories
argument-hint: <requirement analysis artifact or user request>
---

# Classify Requirements

**Input**: $ARGUMENTS

---

## Your Mission

Classify CMS requirements into a government-deliverable requirement structure and prepare them for architecture, implementation, testing, certification, and delivery documentation.

**Output artifact**: `$ARTIFACTS_DIR/requirements/classified-requirements.md`

---

## Phase 1: LOAD - Read Prior Analysis

Read the upstream requirement analysis artifact if available:

- `$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`
- docs/requirements/
- docs/certification/
- docs/architecture/

If an upstream artifact is missing, inspect repository documentation and continue with best effort.

**PHASE_1_CHECKPOINT:**
- [ ] Requirement sources inspected
- [ ] Upstream analysis reviewed or fallback sources used

---

## Phase 2: CLASSIFY - Build Requirement Taxonomy

Classify requirements into:

- CMS-FR: functional requirements
- CMS-NFR: non-functional requirements
- CMS-SEC: security requirements
- CMS-ACC: accessibility and barrier-free requirements
- CMS-CERT: certification requirements
- CMS-OPS: operation and maintenance requirements
- CMS-DEV: device, kiosk, and signage integration requirements
- CMS-DLV: government delivery documentation requirements

For each requirement include:

- ID
- Title
- Description
- Priority
- Source
- Acceptance criteria
- Related component
- Test strategy
- Evidence artifact
- Certification or delivery impact

**PHASE_2_CHECKPOINT:**
- [ ] Requirement IDs assigned
- [ ] Acceptance criteria drafted
- [ ] Evidence artifacts mapped

---

## Phase 3: GENERATE - Save Classification Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/requirements
```

Write artifact:

`$ARTIFACTS_DIR/requirements/classified-requirements.md`

Include:

# Classified CMS Requirements

## 1. Summary

## 2. Requirement Taxonomy

## 3. Functional Requirements

## 4. Non-Functional Requirements

## 5. Security Requirements

## 6. Accessibility Requirements

## 7. Certification Requirements

## 8. Operation Requirements

## 9. Device/Kiosk/Signage Requirements

## 10. Delivery Documentation Requirements

## 11. Implementation Priority

## 12. Traceability Draft

**PHASE_3_CHECKPOINT:**
- [ ] Artifact created
- [ ] Requirements are uniquely identified
- [ ] Traceability draft included

---

## Success Criteria

- REQUIREMENTS_CLASSIFIED
- IDS_ASSIGNED
- ACCEPTANCE_CRITERIA_DEFINED
- TRACEABILITY_READY
- ARTIFACT_SAVED
