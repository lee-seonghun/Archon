---
description: Implement CMS platform features with government-delivery, accessibility, security, and certification considerations
argument-hint: <architecture artifact or feature target>
---

# Implement CMS Feature

**Input**: $ARGUMENTS

---

## Your Mission

Implement or prepare implementation for CMS platform functionality while preserving:

- Public-sector operational governance
- Accessibility compliance
- Multi-tenant isolation
- Audit logging
- Security controls
- Device integration extensibility
- Certification readiness

**Output artifact**: `$ARTIFACTS_DIR/implementation/cms-implementation.md`

---

## Phase 1: LOAD - Gather Architecture and Requirements

Read:

- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`
- Existing source code and repository structure

Identify impacted:

- Modules
- APIs
- Database models
- UI components
- Security boundaries
- Logging requirements

**PHASE_1_CHECKPOINT:**
- [ ] Architecture reviewed
- [ ] Impacted modules identified
- [ ] Security and governance constraints identified

---

## Phase 2: IMPLEMENT - Build or Plan Changes

Implement or design changes for:

- CMS Core
- RBAC
- Accessibility support
- Audit logging
- Multi-site support
- Plugin integration
- Device integration

Ensure:

- Structured logging
- Traceable administrator actions
- Error handling
- Accessibility-friendly UI patterns
- Secure API boundaries
- Operational maintainability

Document:

- Files modified
- APIs added
- Data structures changed
- Tests required
- Risks and limitations

**PHASE_2_CHECKPOINT:**
- [ ] Implementation completed or planned
- [ ] Logging and governance considered
- [ ] Accessibility impacts considered

---

## Phase 3: GENERATE - Save Implementation Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/implementation
```

Write artifact:

`$ARTIFACTS_DIR/implementation/cms-implementation.md`

Include:

# CMS Implementation Report

## 1. Executive Summary

## 2. Implemented or Planned Features

## 3. Modified Components

## 4. Security and Governance Impact

## 5. Accessibility Impact

## 6. Device and Plugin Integration Impact

## 7. Logging and Traceability

## 8. Required Tests

## 9. Operational Risks

## 10. Recommended Next Steps

CRITICAL:
This artifact must contain enough implementation detail for downstream validation, testing, certification review, and delivery documentation.

**PHASE_3_CHECKPOINT:**
- [ ] Implementation artifact created
- [ ] Tests identified
- [ ] Governance and logging impacts documented

---

## Success Criteria

- IMPLEMENTATION_DEFINED
- SECURITY_CONSIDERED
- ACCESSIBILITY_CONSIDERED
- TRACEABILITY_PRESERVED
- TESTS_IDENTIFIED
- ARTIFACT_SAVED
