# Frontend Architecture

Define frontend-specific architecture details.

## Component Architecture

### Component Organization

```
src/
  components/
    DatasetSelector.svelte
    DataTable.svelte
    SearchBar.svelte
    DownloadButton.svelte
  lib/
    data.js  # Loading/parsing
    utils.js # Sorting/filtering
```

### Component Template

```svelte
<script>
  export let data = [];
  let sortKey = 'frequency';
  let sortAsc = true;

  function sortData() {
    // sort logic
  }
</script>

<table>
  {#each data as item}
    <tr><td>{item.word}</td><td>{item.frequency}</td></tr>
  {/each}
</table>
```

## State Management Architecture

### State Structure

```typescript
interface AppState {
  currentDataset: Dataset | null;
  filteredWords: Word[];
  searchQuery: string;
}
```

### State Management Patterns

- Reactive stores for global state (e.g., current dataset)
- Local component state for UI interactions
- Event-driven updates for search/sort

## Routing Architecture

No routing needed for single-page app.

## Frontend Services Layer

### API Client Setup

N/A - Direct JSON loading.

### Service Example

```javascript
// data.js
export async function loadDataset(filename) {
  const response = await fetch(`/data/${filename}.json`);
  return response.json();
}
```
