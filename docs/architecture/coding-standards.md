# Coding Standards

Define MINIMAL but CRITICAL standards for AI agents. Focus only on project-specific rules that prevent common mistakes.

## Critical Frontend Rules

- **TypeScript Usage:** Use TypeScript for all components and utilities to ensure type safety
- **Component Naming:** PascalCase for components (e.g., DataTable.svelte)
- **Data Loading:** Always handle JSON parsing errors with try/catch
- **Accessibility:** Include alt text for any images/icons in the amber theme
- **Performance:** Avoid large re-renders; use Svelte's reactivity efficiently

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `DataTable.svelte` |
| Functions | camelCase | `loadDataset()` |
| Variables | camelCase | `filteredWords` |
| Files | kebab-case | `data-loading.js` |
