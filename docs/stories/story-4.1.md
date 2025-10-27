# Story 4.1 Add Testing and Performance Optimization

As a developer,  
I want unit and integration tests plus optimized loads,  
so that the app is reliable and meets performance goals.  

### Acceptance Criteria
1.1: Unit tests cover data loading and sorting functions.  
1.2: Integration test validates search and table interactions.  
1.3: Page load <2 seconds for sample data.  
1.4: Bundle size optimized for static hosting.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on all previous; full app functional.

**Data Models:** No changes.

**API Specifications:** No APIs.

**Component Specifications:** Test components as per strategy [Source: docs/architecture/components.md].

**File Locations:** tests/unit/, tests/integration/ [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** Vitest for unit, Playwright for E2E [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** Optimize bundle with Vite [Source: docs/architecture/tech-stack.md].

### Tasks / Subtasks
1. Write unit tests for data loading and sorting [AC: 1.1].
2. Create integration test for search/table [AC: 1.2].
3. Optimize for <2s load [AC: 1.3].
4. Minimize bundle size [AC: 1.4].
5. Run full test suite [Source: docs/architecture/testing-strategy.md].