---
description: Analyze CMS requirements from government-delivery, certification, accessibility, and standardization perspectives
argument-hint: <requirement document path or CMS feature request>
---

# Analyze CMS Requirements

**Input**: $ARGUMENTS

---

## Your Mission

Analyze the CMS requirements not only as software functionality, but as a public-sector deliverable platform.

The target platform is expected to support:

- eGovFrame compatibility
- GS Certification Grade 1
- Multi-tenant public-sector operation
- Accessibility and barrier-free requirements
- Kiosk and signage extension
- Device integration
- Audit and governance requirements

**Output artifact**: `$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`

---

## Phase 1: LOAD - Gather Context

### 1.1 Read Requirement Sources

Inspect:

- docs/
- docs/requirements/
- docs/certification/
- docs/architecture/
- README.md

Also inspect repository structure and current implementation patterns.

### 1.2 Identify Public-Sector Context

Classify the platform scope:

- CMS platform
- Public-sector portal
- Kiosk platform
- Outdoor signage platform
- Public space operating platform

**PHASE_1_CHECKPOINT:**
- [ ] Requirement sources loaded
- [ ] Product scope identified
- [ ] Government delivery context identified

---

## Phase 2: ANALYZE - Requirement Classification

Classify each requirement into one or more categories:

- Functional requirement
- Non-functional requirement
- Security requirement
- Accessibility requirement
- Certification requirement
- Device integration requirement
- Government delivery requirement
- Operational requirement

For each requirement identify:

- Requirement ID
- Source
- Description
- Acceptance criteria
- Related certification or standard
- Impacted subsystem
- Test strategy
- Required evidence artifact

Also identify gaps related to:

- GS Certification Grade 1
- eGovFrame compatibility
- Accessibility compliance
- Audit logging
- Public-sector operational governance
- Kiosk and signage expansion

**PHASE_2_CHECKPOINT:**
- [ ] Requirements classified
- [ ] Certification impact identified
- [ ] Traceability structure defined
- [ ] Missing requirements identified

---

## Phase 3: GENERATE - Create Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/requirements
```

Write artifact:

`$ARTIFACTS_DIR/requirements/cms-requirement-analysis.md`

The artifact must include:

# CMS Requirement Analysis

## 1. Executive Summary

## 2. Public-Sector Delivery Context

## 3. Requirement Classification Matrix

## 4. Accessibility and Barrier-Free Impact

## 5. Certification and Standardization Impact

## 6. Device/Kiosk/Signage Extension Impact

## 7. Government Delivery Risks

## 8. Missing Requirements

## 9. Recommended Backlog

## 10. Traceability Matrix Draft

CRITICAL:
This artifact is the handoff to downstream architecture, implementation, certification, and delivery workflows.
Include enough detail that another AI agent can continue implementation without additional context.

**PHASE_3_CHECKPOINT:**
- [ ] Artifact created
- [ ] Requirement traceability included
- [ ] Certification impact documented
- [ ] Public-sector operational impact documented

---

## Success Criteria

- REQUIREMENTS_CLASSIFIED
- CERTIFICATION_IMPACT_IDENTIFIED
- ACCESSIBILITY_IMPACT_IDENTIFIED
- DELIVERY_CONTEXT_DEFINED
- TRACEABILITY_READY
- ARTIFACT_SAVED
