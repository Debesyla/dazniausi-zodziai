# Project Brief: Dažniausi lietuviški žodžiai

## Executive Summary

A static website built with Svelte to visually present Lithuanian word frequency datasets from multiple researchers, enabling easy browsing, filtering, downloading, and comparison of word usage changes over time. This solves the problem of inaccessible raw data by providing an interactive, culturally-inspired interface. Target users include linguists, researchers, and students interested in Lithuanian language analysis. The key value proposition is the first dedicated tool for exploring Lithuanian word frequencies with a unique Baltic design that makes data exploration engaging and memorable.

## Problem Statement

Lithuanian word frequency data from various researchers exists in raw tab-separated text files, making it difficult for users to explore, compare, or visualize trends without technical skills. Current solutions like general data viewers or language tools don't cater specifically to Lithuanian linguistic research, leaving a gap for cultural and academic exploration. This limits accessibility for educators, students, and researchers who could benefit from interactive analysis. The problem is urgent as digital preservation of language data becomes increasingly important, and existing tools fall short in providing intuitive, culturally relevant interfaces.

## Proposed Solution

A simple, static Svelte-based single-page application that loads JSON-formatted datasets with metadata, displays them in sortable tables with filters, and incorporates a distinctive Baltic amber terminal design. Key differentiators include the cultural aesthetic, focus on Lithuanian data, and ease of use without requiring a database or complex backend. This approach succeeds where others haven't by prioritizing UX and uniqueness, creating a tool that's both functional and engaging for its niche audience.

## Target Users

### Primary User Segment: Lithuanian Linguists and Researchers
Demographic: Academics and professionals aged 25-60, primarily in Lithuania or with Lithuanian heritage, working in universities or research institutions. Current behaviors: Analyzing raw data files manually or using generic tools. Needs: Quick access to frequency data, comparison capabilities, and export options. Goals: Advance linguistic research, publish findings, and educate others on Lithuanian language patterns.

### Secondary User Segment: Students and General Public
Demographic: University students and language enthusiasts aged 18-35. Current behaviors: Learning Lithuanian online or through apps. Needs: Accessible data for projects or curiosity. Goals: Gain insights into language usage and cultural trends.

## Goals & Success Metrics

### Business Objectives
- Launch the website within 2 weeks of development start
- Achieve 100 unique visitors in the first month post-launch
- Enable at least 50 data downloads in the first quarter

### User Success Metrics
- Users can filter and sort data within 30 seconds of landing
- 80% of users complete at least one comparison or download
- Positive feedback on design and usability in surveys

### Key Performance Indicators (KPIs)
- Page load time under 2 seconds
- Bounce rate below 40%
- User session duration over 5 minutes

## MVP Scope

### Core Features (Must Have)
- **JSON data loading with metadata:** Embed author, year, and word lists for easy filtering—rationale: Simplifies data management without a DB
- **Sortable table view with search:** Display words with frequency, A-Z and count sorting, plus search bar—rationale: Core browsing functionality
- **Baltic amber terminal design:** Dark BG, amber text, pixelated symbols—rationale: Unique, functional aesthetic

### Out of Scope for MVP
- Word clouds or advanced visualizations
- Dynamic comparisons between datasets
- User accounts or comments

### MVP Success Criteria
The MVP is successful if users can load datasets, apply filters/search, sort tables, and download data without errors, with the design feeling modern yet culturally relevant.

## Post-MVP Vision

### Phase 2 Features
Add clickable word clouds for quick filtering and basic comparison views showing rising/falling words.

### Long-term Vision
Expand to include more datasets, interactive graphs, and multilingual support for other Baltic languages.

### Expansion Opportunities
Partner with universities for data contributions, add API for integrations, or develop mobile app version.

## Technical Considerations

### Platform Requirements
- **Target Platforms:** Web browsers (desktop and mobile)
- **Browser/OS Support:** Modern browsers (Chrome, Firefox, Safari) on Windows, macOS, Linux
- **Performance Requirements:** Load under 2 seconds for up to 10 datasets

### Technology Preferences
- **Frontend:** Svelte for static site generation
- **Backend:** None (static)
- **Database:** None (data in JSON files)
- **Hosting/Infrastructure:** GitHub Pages or Netlify for free static hosting

### Architecture Considerations
- **Repository Structure:** Simple src/ for Svelte components, data/ for JSON files
- **Service Architecture:** Client-side only
- **Integration Requirements:** None
- **Security/Compliance:** Basic HTTPS, no sensitive data

## Constraints & Assumptions

### Constraints
- **Budget:** Free (open-source tools and hosting)
- **Timeline:** 1-2 weeks for MVP
- **Resources:** Solo developer
- **Technical:** Must remain static, no server-side processing

### Key Assumptions
- Datasets will be manually updated and converted to JSON
- Users have basic web literacy
- Baltic design will appeal to target audience

## Risks & Open Questions

### Key Risks
- **Data accuracy:** Inaccurate frequencies could undermine trust—impact: Loss of credibility
- **Design appeal:** Amber terminal might not resonate—impact: Low engagement
- **Performance with large datasets:** Slow loading—impact: Poor UX

### Open Questions
- What exact JSON structure for metadata?
- How to source Baltic symbol assets?

### Areas Needing Further Research
- User testing for design preferences
- Optimal data file sizes

## Appendices

### A. Research Summary
Manual research confirmed no existing dedicated tools for Lithuanian word frequencies—positioning this as a unique offering.

### B. Stakeholder Input
From brainstorming: Focus on UX, cultural relevance, simplicity.

### C. References
- Brainstorming session results (docs/brainstorming-session-results.md)
- Svelte documentation

## Next Steps

### Immediate Actions
1. Set up Svelte project and convert sample .txt to JSON
2. Build table component with sorting and search
3. Design and apply Baltic amber theme
4. Test loading and filtering with sample data
5. Deploy to static host and gather feedback

### PM Handoff
This Project Brief provides the full context for Dažniausi lietuviški žodžiai. Please start in 'PRD Generation Mode', review the brief thoroughly to work with the user to create the PRD section by section as the template indicates, asking for any necessary clarification or suggesting improvements.