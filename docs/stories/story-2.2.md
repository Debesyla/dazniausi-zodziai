# Story 2.2 Add Search and Filter Functionality

As a user (linguist or student),  
I want to filter the table by typing in a search bar,  
so that I can quickly find specific words or patterns.  

### Acceptance Criteria
2.1: Search bar is present above the table.  
2.2: Typing filters rows in real-time (case-insensitive).  
2.3: Filter works on word text only.  
2.4: Clear search option resets the view.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on Story 2.1; table component exists.

**Data Models:** Filtered Word[] [Source: docs/architecture/data-models.md].

**API Specifications:** No APIs.

**Component Specifications:** SearchBar.svelte with bind:value [Source: docs/architecture/components.md#SearchBar].

**File Locations:** src/components/SearchBar.svelte, src/lib/utils.js for filter function [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** Integration tests for search and table interaction [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** Real-time filtering using Svelte reactivity [Source: docs/architecture/frontend-architecture.md].

### Tasks / Subtasks
1. Create SearchBar.svelte with input field [AC: 2.1].
2. Implement real-time case-insensitive filtering on word text [AC: 2.2, 2.3].
3. Add clear/reset functionality [AC: 2.4].
4. Integrate with DataTable for filtered display.
5. Integration test: Test search filters table correctly [Source: docs/architecture/testing-strategy.md].