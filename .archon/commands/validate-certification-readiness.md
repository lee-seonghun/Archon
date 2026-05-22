---
description: Validate certification and public-sector delivery readiness for EULJI CMS and kiosk/signage platform expansion
argument-hint: <architecture, implementation, compliance, or delivery artifact>
---

# Validate Certification Readiness

**Input**: $ARGUMENTS

---

## Your Mission

Evaluate the certification readiness of the EULJI CMS platform and its kiosk/signage/public-device expansion.

The review must consider:

- GS Certification Grade 1
- eGovFrame compatibility
- Accessibility and barrier-free readiness
- Public-sector operational governance
- Security and auditability
- Device and kiosk operational safety
- Public-device operational maintainability
- Government delivery evidence readiness

**Output artifact**: `$ARTIFACTS_DIR/certification/certification-readiness-review.md`

---

## Phase 1: LOAD - Gather Certification Inputs

Read available upstream artifacts:

- `$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`
- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`
- `$ARTIFACTS_DIR/implementation/cms-implementation.md`
- `$ARTIFACTS_DIR/tests/cms-test-plan.md`
- `$ARTIFACTS_DIR/compliance/compliance-review.md`
- `$ARTIFACTS_DIR/compliance/compliance-traceability-matrix.md`
- docs/certification/
- docs/delivery/
- docs/architecture/

If artifacts are missing, continue with best effort and explicitly document missing evidence.

**PHASE_1_CHECKPOINT:**
- [ ] Certification inputs reviewed
- [ ] Existing evidence inspected
- [ ] Missing evidence identified

---

## Phase 2: REVIEW - Certification and Delivery Readiness

Review readiness for:

### GS Certification Grade 1

Evaluate:

- Functionality completeness
- Maintainability
- Reliability
- Portability
- Usability
- Security
- Operational governance

### eGovFrame Compatibility

Evaluate:

- Architectural compatibility
- Layer separation
- Public-sector maintainability
- Standardized structure
- Operational consistency

### Accessibility and Barrier-Free Readiness

Evaluate:

- Keyboard navigation
- Screen-reader compatibility
- High-contrast support
- Large-font compatibility
- Public-device accessibility
- Kiosk accessibility considerations

### Security and Auditability

Evaluate:

- RBAC
- Audit logging
- Administrative traceability
- Security event handling
- Operational governance

### Device and Kiosk Expansion Readiness

Evaluate:

- Device isolation
- Device governance
- Offline operation considerations
- Public-space operational safety
- Remote management readiness

### Delivery and Evidence Readiness

Evaluate:

- Test evidence completeness
- Traceability completeness
- Documentation completeness
- Operational handoff readiness
- Maintenance planning

For each area identify:

- Current status
- Evidence available
- Missing evidence
- Risks
- Recommended remediation
- Delivery impact

**PHASE_2_CHECKPOINT:**
- [ ] Certification readiness evaluated
- [ ] Accessibility readiness evaluated
- [ ] Security readiness evaluated
- [ ] Delivery readiness evaluated
- [ ] Gaps documented

---

## Phase 3: GENERATE - Save Certification Review

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/certification
```

Write artifact:

`$ARTIFACTS_DIR/certification/certification-readiness-review.md`

Include:

# Certification Readiness Review

## 1. Executive Summary

## 2. Certification Scope

## 3. GS Certification Readiness

## 4. eGovFrame Compatibility Readiness

## 5. Accessibility and Barrier-Free Readiness

## 6. Security and Audit Readiness

## 7. Device and Kiosk Expansion Readiness

## 8. Public-Sector Delivery Readiness

## 9. Evidence Completeness Review

## 10. Gap Register

## 11. Risk Assessment

## 12. Recommended Remediation Roadmap

## 13. Certification Readiness Scorecard

Use clear status values:

- Ready
- Partially Ready
- Gap
- Blocked
- Not Evaluated

CRITICAL:
This artifact may be used as the basis for public-sector delivery review and certification preparation. Use concrete evidence references and actionable remediation guidance.

**PHASE_3_CHECKPOINT:**
- [ ] Certification review artifact created
- [ ] Readiness status assigned
- [ ] Evidence gaps identified
- [ ] Remediation roadmap included

---

## Success Criteria

- CERTIFICATION_REVIEW_COMPLETE
- EVIDENCE_GAPS_IDENTIFIED
- ACCESSIBILITY_READINESS_EVALUATED
- SECURITY_READINESS_EVALUATED
- DELIVERY_READINESS_EVALUATED
- ARTIFACT_SAVED
