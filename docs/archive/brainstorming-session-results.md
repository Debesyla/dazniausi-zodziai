# Brainstorming Session Results

**Session Date:** October 26, 2025  
**Facilitator:** Mary, Business Analyst  
**Participant:** dan  

## Executive Summary

**Topic:** Brainstorming ideas for launching a small Svelte-based static website to visually present Lithuanian word frequency datasets, with features for browsing, filtering, downloading, and comparing changes over time.  

**Session Goals:** Focused ideation on how the site could work and look, prioritizing functionality and unique design.  

**Techniques Used:** Mind Mapping, SCAMPER Method  

**Total Ideas Generated:** 17  

**Key Themes Identified:**  
- Functional UX-first layout with filters and data display  
- Unique Baltic amber terminal design for cultural relevance  
- Simple static site using .json data with metadata  

## Technique Sessions

### Mind Mapping - 15 minutes

**Description:** Started with central concept "Lithuanian Word Frequencies Site" and branched out into key components like data handling, UI elements, and features.  

**Ideas Generated:**  
- Data Sources: VDU/VU universities researchers, website scraping from external domain analyser app, book scraping from torrents  
- Navigation: Single page app format with intro, filters, tables and data views, short description and data sources  
- Features: Filter by source, author, date; compare two data sources  
- Design: Table view of info, graphs, maybe word cloud  

**Insights Discovered:**  
- Cultural Baltic elements can make the site uniquely Lithuanian and engaging  
- SPA keeps navigation simple and modern  

**Notable Connections:**  
- Design should support UX, not distract; Baltic theme ties into data's heritage  

### SCAMPER Method - 10 minutes

**Description:** Applied SCAMPER (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse) to refine existing web app ideas for features.  

**Ideas Generated:**  
- Substitute: .txt files with .json for better data structure  
- Combine: Data sources with metadata (word lists + author, year, etc.)  
- Adapt: Excel-like table sorting (A-Z, by count)  
- Modify: Include search bar in filters  
- Put to another use: Word clouds/lists as clickable elements to filter table  
- Eliminate: Year filter (only ~10 datasets, focus on author/source)  
- Reverse: Comparison view to show what's changed (rising/falling words)  

**Insights Discovered:**  
- .json simplifies parsing in Svelte; metadata enriches filtering  
- Clickable elements enhance interactivity without complexity  

**Notable Connections:**  
- Refinements build directly on Mind Map branches, streamlining features  

## Idea Categorization

### Immediate Opportunities
*Ideas ready to implement now*

**Switch to .json with metadata**  
- Description: Use .json files containing word lists, author, year, etc.  
- Why immediate: Simplifies data loading in Svelte static site  
- Resources needed: Convert existing .txt to .json  

**Basic table view with sorting and search**  
- Description: Table displaying words with Excel-like sorting (A-Z, by count) and search bar  
- Why immediate: Core functionality for browsing data  
- Resources needed: Svelte table component  

**Baltic amber terminal design**  
- Description: Dark background, amber text, pixelated Lithuanian symbols  
- Why immediate: Unique, functional design that ties into culture  
- Resources needed: CSS for theme, Baltic symbol assets  

### Future Innovations
*Ideas requiring development/research*

**Clickable word clouds for filtering**  
- Description: Word clouds/lists where clicking a word filters the table  
- Development needed: Integrate D3.js or similar for word cloud in Svelte  
- Timeline estimate: 1 week  

**Change-focused comparisons**  
- Description: Compare sources to highlight rising/falling words  
- Development needed: Logic to calculate differences between datasets  
- Timeline estimate: 1-2 weeks  

### Moonshots
*Ambitious, transformative concepts*

None identified—scraping integration eliminated as manual addition suffices.

### Insights & Learnings
*Key realizations from the session*

- UX must come first: Site layout prioritizes big title, filters, data display for immediate usability  
- Baltic design adds uniqueness: Amber terminal mood with pixelated symbols makes it memorable and culturally relevant without being ancient  
- Simplicity is key: No database, static site, ~10 datasets keep development lightweight and rare updates easy  

## Action Planning

**Top 3 Priority Ideas:**  
1. Implement .json data structure with metadata and basic table view (foundation for all features)  
2. Add filters (source, author, search) with sorting (enables browsing and comparisons)  
3. Apply Baltic amber terminal design (ensures unique, functional look)  

**Next Steps for Each Priority:**  
1. Convert sample .txt to .json; set up Svelte project and load data  
2. Build filter components and integrate with table  
3. Design CSS theme with amber colors and pixelated symbols  

**Resources/Research Needed:**  
- Svelte documentation for static sites  
- Baltic symbol images/icons (free or create pixelated versions)  
- Sample .json structure testing  

**Timeline Considerations:**  
- MVP with table, filters, design: 1-2 weeks  
- Add word clouds and comparisons: Additional 2 weeks  
- Launch and manual data updates as needed  

## Reflection & Follow-up

This session clarified the site's vision: a functional, culturally unique tool for Lithuanian word data. Mind Mapping provided structure, SCAMPER refined details—resulting in a clear plan. Follow-up: Prototype in Svelte, test with sample data, iterate on design. Great collaboration—let's build this!