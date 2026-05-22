---
description: Create a compliance traceability matrix linking requirements, design, implementation, tests, certification, and delivery evidence
argument-hint: <requirements, compliance, or delivery artifact>
---

# Create Compliance Traceability Matrix

**Input**: $ARGUMENTS

---

## Your Mission

Create a traceability matrix for EULJI CMS as a government-deliverable public-sector CMS platform.

The matrix must connect:

- Requirements
- Architecture and design components
- Implementation modules
- Test cases
- Certification targets
- Accessibility requirements
- Security and audit controls
- Government delivery evidence

**Output artifact**: `$ARTIFACTS_DIR/compliance/compliance-traceability-matrix.md`

---

## Phase 1: LOAD - Gather Traceability Inputs

Read available upstream artifacts:

- `$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`
- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`
- `$ARTIFACTS_DIR/implementation/cms-implementation.md`
- `$ARTIFACTS_DIR/tests/cms-test-plan.md`
- `$ARTIFACTS_DIR/compliance/compliance-review.md`
- docs/requirements/
- docs/certification/
- docs/architecture/
- docs/delivery/

If an artifact is missing, continue with best effort and explicitly record the missing input.

**PHASE_1_CHECKPOINT:**
- [ ] Requirement artifacts inspected
- [ ] Architecture and implementation artifacts inspected
- [ ] Test and compliance artifacts inspected
- [ ] Missing inputs recorded

---

## Phase 2: MAP - Build Traceability Links

For each requirement, map:

- Requirement ID
- Requirement title
- Requirement category
- Source document
- Acceptance criteria
- Architecture component
- Implementation module or file path
- Test case ID
- Evidence artifact
- Certification or standard target
- Delivery document section
- Current status
- Gap or risk

Use these categories:

- CMS-FR: functional requirement
- CMS-NFR: non-functional requirement
- CMS-SEC: security requirement
- CMS-ACC: accessibility and barrier-free requirement
- CMS-CERT: certification requirement
- CMS-OPS: operation and maintenance requirement
- CMS-DEV: device, kiosk, and signage integration requirement
- CMS-DLV: government delivery documentation requirement

Pay special attention to:

- GS Certification Grade 1 evidence
- eGovFrame compatibility evidence
- Accessibility and barrier-free evidence
- Audit logging evidence
- Security control evidence
- Multi-tenant isolation evidence
- Device and kiosk extension evidence
- Maintenance and operation evidence

**PHASE_2_CHECKPOINT:**
- [ ] Requirements linked to architecture
- [ ] Requirements linked to implementation
- [ ] Requirements linked to tests
- [ ] Requirements linked to evidence
- [ ] Gaps and risks identified

---

## Phase 3: GENERATE - Save Traceability Matrix

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/compliance
```

Write artifact:

`$ARTIFACTS_DIR/compliance/compliance-traceability-matrix.md`

Include:

# Compliance Traceability Matrix

## 1. Executive Summary

## 2. Source Artifacts Reviewed

## 3. Traceability Method

## 4. Requirement-to-Design Matrix

## 5. Requirement-to-Implementation Matrix

## 6. Requirement-to-Test Matrix

## 7. Requirement-to-Evidence Matrix

## 8. Certification Traceability

## 9. Accessibility Traceability

## 10. Security and Audit Traceability

## 11. Operations and Maintenance Traceability

## 12. Device/Kiosk/Signage Traceability

## 13. Gap Register

## 14. Recommended Remediation Actions

Use markdown tables. Every row must be actionable and include a status value:

- Planned
- In Progress
- Implemented
- Tested
- Evidence Ready
- Gap
- Blocked

CRITICAL:
This artifact is a government-delivery control document. Avoid vague statements. Use concrete requirement IDs, components, test IDs, and evidence names whenever possible.

**PHASE_3_CHECKPOINT:**
- [ ] Matrix artifact created
- [ ] Traceability rows include requirement IDs
- [ ] Certification and accessibility mappings included
- [ ] Gaps clearly identified

---

## Success Criteria

- TRACEABILITY_MATRIX_CREATED
- REQUIREMENTS_MAPPED_TO_DESIGN
- REQUIREMENTS_MAPPED_TO_TESTS
- EVIDENCE_MAPPED
- CERTIFICATION_GAPS_IDENTIFIED
- ARTIFACT_SAVED
