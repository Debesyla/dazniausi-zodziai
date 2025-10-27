# Story 4.2 Deploy and Validate Launch

As a product owner,  
I want the site deployed to free hosting with final checks,  
so that users can access it and metrics can be tracked.  

### Acceptance Criteria
2.1: App deployed to GitHub Pages or Netlify.  
2.2: Live URL functional with all features.  
2.3: Basic analytics (e.g., visitor count) set up.  
2.4: Post-launch checklist confirms no errors.

### Status
Ready

### Dev Notes
**Previous Story Insights:** Depends on 4.1; tested and optimized.

**Data Models:** No changes.

**API Specifications:** No APIs.

**Component Specifications:** No new components.

**File Locations:** .github/workflows/ for CI/CD [Source: docs/architecture/unified-project-structure.md].

**Testing Requirements:** Post-launch validation [Source: docs/architecture/testing-strategy.md].

**Technical Constraints:** GitHub Pages for hosting [Source: docs/architecture/tech-stack.md].

### Tasks / Subtasks
1. Set up GitHub Actions for deploy to GitHub Pages [AC: 2.1].
2. Verify live URL works with all features [AC: 2.2].
3. Add basic analytics (e.g., Google Analytics) [AC: 2.3].
4. Run post-launch checklist for errors [AC: 2.4].
5. E2E test: Validate live site [Source: docs/architecture/testing-strategy.md].