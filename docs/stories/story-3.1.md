# Story 3.1 Implement Baltic Amber Theme

As a user (Lithuanian linguist or enthusiast),  
I want the interface to feature a dark background with amber text and pixelated symbols,  
so that the app feels culturally inspired and engaging.  

### Acceptance Criteria
1.1: CSS applies dark BG and amber (#FFBF00) text colors.  
1.2: Pixelated symbols (e.g., amber icons) are added to buttons/elements.  
1.3: Theme is consistent across all components.  
1.4: Design evokes a terminal feel without hindering readability.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on Stories 2.1-2.2; UI components exist.

**Data Models:** No changes.

**API Specifications:** No APIs.

**Component Specifications:** Apply theme to all components [Source: docs/architecture/components.md].

**File Locations:** Global CSS in src/app.css or component styles [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** Visual consistency checks [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** Custom CSS, no framework [Source: docs/architecture/tech-stack.md].

### Tasks / Subtasks
1. Define CSS variables for dark BG and amber text [AC: 1.1].
2. Add pixelated amber icons to buttons/elements [AC: 1.2].
3. Apply theme consistently across components [AC: 1.3].
4. Ensure terminal-like feel and readability [AC: 1.4].
5. Unit test: Verify CSS application and accessibility [Source: docs/architecture/coding-standards.md].