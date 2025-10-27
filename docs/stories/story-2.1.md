# Story 2.1 Create Sortable Table Component

As a user (linguist or student),  
I want to view words in a table that I can sort by word or frequency,  
so that I can organize data for analysis.  

### Acceptance Criteria
1.1: Table component displays words and frequencies from loaded data.  
1.2: Column headers allow ascending/descending sort on click.  
1.3: Sorting is performant for datasets up to 10,000 words.  
1.4: Table updates dynamically without page reload.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on Story 1.2; data loading complete.

**Data Models:** Word[] array [Source: docs/architecture/data-models.md].

**API Specifications:** No APIs.

**Component Specifications:** DataTable.svelte with {#each} loops and sort logic [Source: docs/architecture/components.md#DataTable].

**File Locations:** src/components/DataTable.svelte [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** Unit tests for sorting and rendering [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** Use Svelte reactivity for dynamic updates [Source: docs/architecture/frontend-architecture.md].

### Tasks / Subtasks
1. Create DataTable.svelte component to display Word[] in table [AC: 1.1].
2. Implement sort logic for word and frequency columns [AC: 1.2].
3. Optimize sorting for 10,000 words using efficient algorithms [AC: 1.3].
4. Bind to reactive data for dynamic updates [AC: 1.4].
5. Unit test: Test sorting, rendering, and performance [Source: docs/architecture/testing-strategy.md].