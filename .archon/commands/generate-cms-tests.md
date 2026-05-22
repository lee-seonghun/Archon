---
description: Generate validation and testing strategy for government-deliverable CMS features and architecture
argument-hint: <implementation artifact or subsystem>
---

# Generate CMS Tests

**Input**: $ARGUMENTS

---

## Your Mission

Generate a comprehensive testing strategy and validation plan for the CMS platform.

The testing approach must support:

- GS certification readiness
- Public-sector delivery verification
- Accessibility validation
- Security validation
- Multi-tenant validation
- Device and plugin integration validation
- Operational reliability validation

**Output artifact**: `$ARTIFACTS_DIR/tests/cms-test-plan.md`

---

## Phase 1: LOAD - Review Implementation and Requirements

Read:

- `$ARTIFACTS_DIR/requirements/classified-requirements.md`
- `$ARTIFACTS_DIR/implementation/cms-implementation.md`
- `$ARTIFACTS_DIR/architecture/cms-architecture.md`

Inspect repository structure and existing tests.

**PHASE_1_CHECKPOINT:**
- [ ] Requirements reviewed
- [ ] Implementation reviewed
- [ ] Existing tests inspected

---

## Phase 2: DEFINE - Build Testing Strategy

Define tests for:

- Functional validation
- RBAC and governance validation
- Accessibility validation
- Security validation
- Multi-tenant isolation validation
- Device integration validation
- Plugin isolation validation
- Performance validation
- Operational recovery validation

For each test define:

- Test ID
- Requirement mapping
- Preconditions
- Steps
- Expected result
- Evidence artifact
- Automation possibility

**PHASE_2_CHECKPOINT:**
- [ ] Test coverage defined
- [ ] Requirement traceability included
- [ ] Accessibility and security coverage included

---

## Phase 3: GENERATE - Save Test Artifact

Create directory:

```bash
mkdir -p $ARTIFACTS_DIR/tests
```

Write artifact:

`$ARTIFACTS_DIR/tests/cms-test-plan.md`

Include:

# CMS Test Plan

## 1. Executive Summary

## 2. Test Strategy

## 3. Functional Tests

## 4. Accessibility Tests

## 5. Security Tests

## 6. Multi-Tenant Tests

## 7. Device and Plugin Tests

## 8. Performance and Reliability Tests

## 9. Operational Recovery Tests

## 10. Traceability Matrix

## 11. Required Evidence

## 12. Automation Strategy

**PHASE_3_CHECKPOINT:**
- [ ] Test artifact created
- [ ] Traceability matrix included
- [ ] Accessibility and security coverage included

---

## Success Criteria

- TEST_STRATEGY_DEFINED
- TRACEABILITY_INCLUDED
- ACCESSIBILITY_TESTS_INCLUDED
- SECURITY_TESTS_INCLUDED
- OPERATIONAL_TESTS_INCLUDED
- ARTIFACT_SAVED
