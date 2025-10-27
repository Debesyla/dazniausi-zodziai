# Story 3.2 Ensure Responsive Design and Downloads

As a user (on mobile or desktop),  
I want the table and interactions to work seamlessly on my device, plus a download option,  
so that I can access and export data anytime.  

### Acceptance Criteria
2.1: Table and search are responsive (mobile-friendly layout).  
2.2: Download button exports current view as CSV.  
2.3: Export includes metadata and filtered data.  
2.4: No layout breaks on screens <768px wide.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on Stories 2.1-3.1; table and theme complete.

**Data Models:** Word[] for export [Source: docs/architecture/data-models.md].

**API Specifications:** No APIs.

**Component Specifications:** DownloadButton.svelte with CSV generation [Source: docs/architecture/components.md#DownloadButton].

**File Locations:** src/components/DownloadButton.svelte [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** E2E tests for download [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** Use papaparse for CSV [Source: docs/architecture/tech-stack.md].

### Tasks / Subtasks
1. Add responsive CSS for table and search on mobile [AC: 2.1, 2.4].
2. Create DownloadButton.svelte to export CSV [AC: 2.2].
3. Include metadata and filtered data in export [AC: 2.3].
4. Test on various screen sizes.
5. E2E test: Verify download functionality [Source: docs/architecture/testing-strategy.md].