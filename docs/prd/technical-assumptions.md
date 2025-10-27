# Technical Assumptions

## Repository Structure: Monorepo
A single repository containing all source code, data files, and documentation for simplicity in a solo-developer setup.

## Service Architecture
Client-side only architecture with no backend or database; data loaded statically from embedded JSON files, ensuring a fully static site deployable to free hosting like GitHub Pages or Netlify.

## Testing Requirements
Unit testing for components and functions, plus integration testing for data loading and UI interactions to validate end-to-end functionality without a full pyramid (given static nature and no server-side logic).

## Additional Technical Assumptions and Requests
- Frontend framework: Svelte for building the static single-page application.  
- Hosting: GitHub Pages or Netlify for free, static deployment.  
- Data format: Pre-converted tab-separated files to JSON with metadata.  
- Performance: Optimize for fast loads by keeping datasets small and using Svelte's efficiency.  
- Browser support: Modern browsers only, as specified.  
- No APIs or external integrations required.  
