---
description: Design government-deliverable CMS architecture with accessibility, multi-tenant, certification, and device integration support
argument-hint: <classified requirements artifact or architecture target>
---

# Design CMS Architecture

**Input**: $ARGUMENTS

---

## Your Mission

Design a public-sector CMS platform architecture supporting:

- Multi-tenant public-sector operation
- Accessibility and barrier-free support
- Plugin framework isolation
- Device and kiosk integration
- Audit and governance
- Certification readiness
- Long-term maintainability

**Output artifact**: `$ARTIFACTS_DIR/architecture/cms-architecture.md`

---

## Phase 1: LOAD - Gather Inputs

Read:

- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- docs/requirements/
- docs/certification/
- docs/architecture/

Inspect repository implementation patterns.

**PHASE_1_CHECKPOINT:**
- [ ] Requirements loaded
- [ ] Existing architecture reviewed

---

## Phase 2: DESIGN - Define Architecture

Design the following layers:

- Presentation Layer
- Service Layer
- Integration Layer
- Governance Layer
- Infrastructure Layer

Define architecture for:

- CMS Core
- Multi-site management
- RBAC and governance
- Accessibility engine
- Plugin framework
- Device interface layer
- Audit logging
- Monitoring and operations
- Deployment and scalability

For each subsystem define:

- Responsibilities
- APIs
- Data ownership
- Security boundary
- Extension strategy
- Failure handling strategy

**PHASE_2_CHECKPOINT:**
- [ ] Architecture layers defined
- [ ] Security boundaries defined
- [ ] Device and plugin isolation considered

---

## Phase 3: GENERATE - Save Architecture Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/architecture
```

Write artifact:

`$ARTIFACTS_DIR/architecture/cms-architecture.md`

Include:

# CMS Architecture Design

## 1. Executive Summary

## 2. Architectural Goals

## 3. Layered Architecture

## 4. Multi-Tenant Strategy

## 5. Accessibility Architecture

## 6. Plugin Framework Strategy

## 7. Device Integration Strategy

## 8. Security and Governance

## 9. Deployment and Scalability

## 10. Certification Considerations

## 11. Risks and Constraints

## 12. Recommended Implementation Sequence

**PHASE_3_CHECKPOINT:**
- [ ] Architecture artifact created
- [ ] Security and governance documented
- [ ] Public-sector operational considerations included

---

## Success Criteria

- ARCHITECTURE_DEFINED
- GOVERNANCE_DEFINED
- ACCESSIBILITY_CONSIDERED
- DEVICE_STRATEGY_DEFINED
- CERTIFICATION_CONSIDERED
- ARTIFACT_SAVED
