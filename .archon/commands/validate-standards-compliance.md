---
description: Validate CMS compliance readiness for public-sector standards, certification, accessibility, and operational governance
argument-hint: <artifact path or implementation target>
---

# Validate Standards Compliance

**Input**: $ARGUMENTS

---

## Your Mission

Review the CMS implementation, architecture, or documentation from a government-delivery and certification-readiness perspective.

The platform must be evaluated against:

- GS Certification Grade 1
- eGovFrame compatibility
- Accessibility and barrier-free requirements
- Public-sector operational governance
- Audit and traceability requirements
- Security and privacy requirements
- Kiosk/signage/device expansion requirements

**Output artifact**: `$ARTIFACTS_DIR/compliance/compliance-review.md`

---

## Phase 1: LOAD - Gather Evidence

### 1.1 Review Existing Artifacts

Inspect:

- Requirement analysis artifacts
- Architecture artifacts
- Implementation artifacts
- Existing documentation under docs/
- Security and accessibility documentation

### 1.2 Identify Compliance Targets

Review readiness for:

- Functional traceability
- Accessibility
- Logging and auditability
- Operational governance
- Security controls
- Deployment portability
- Public-sector maintenance requirements

**PHASE_1_CHECKPOINT:**
- [ ] Existing artifacts reviewed
- [ ] Compliance targets identified
- [ ] Certification scope clarified

---

## Phase 2: ANALYZE - Gap and Risk Analysis

For each target area:

- Evaluate current readiness
- Identify missing controls
- Identify architectural risks
- Identify operational risks
- Recommend mitigation strategies

Include review areas:

- RBAC and administrator governance
- Audit logging and traceability
- Accessibility and barrier-free support
- Multi-tenant isolation
- Device integration isolation
- Plugin framework safety
- Security event handling
- Public-sector operational maintainability

**PHASE_2_CHECKPOINT:**
- [ ] Risks identified
- [ ] Compliance gaps identified
- [ ] Mitigation strategies documented

---

## Phase 3: GENERATE - Compliance Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/compliance
```

Write artifact:

`$ARTIFACTS_DIR/compliance/compliance-review.md`

The artifact must include:

# CMS Compliance Review

## 1. Executive Summary

## 2. Certification Readiness

## 3. Accessibility Readiness

## 4. Security and Audit Readiness

## 5. Public-Sector Governance Readiness

## 6. Device and Kiosk Expansion Readiness

## 7. Operational Risks

## 8. Recommended Remediation Plan

## 9. Required Evidence and Documentation

## 10. Delivery Readiness Assessment

CRITICAL:
This artifact will be used for downstream delivery documentation and certification planning.
The review must be evidence-based and actionable.

**PHASE_3_CHECKPOINT:**
- [ ] Compliance artifact created
- [ ] Risks documented
- [ ] Remediation recommendations included
- [ ] Delivery readiness evaluated

---

## Success Criteria

- COMPLIANCE_REVIEW_COMPLETE
- CERTIFICATION_GAPS_IDENTIFIED
- ACCESSIBILITY_GAPS_IDENTIFIED
- OPERATIONAL_RISKS_IDENTIFIED
- DELIVERY_READINESS_EVALUATED
- ARTIFACT_SAVED
