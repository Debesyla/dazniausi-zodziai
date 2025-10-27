# Performance Considerations

### Performance Goals

- **Page Load:** Under 2 seconds for initial page load and dataset loading/switches.
- **Interaction Response:** Instant (under 100ms) for search filtering; under 200ms for sorting and other interactions.
- **Animation FPS:** 60 FPS for all animations to ensure smooth, jank-free motion.

### Design Strategies

Optimize for static hosting: Minimize bundle size by using lightweight Svelte components; lazy-load non-critical assets; use CSS for animations to reduce JS overhead; implement virtual scrolling for tables over 1,000 rows; compress images/icons and preload critical fonts.
