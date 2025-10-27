<script lang="ts">
  import { onMount } from 'svelte';
  import { loadDataset } from '$lib/data';
  import { filterWords } from '$lib/utils';
  import SearchBar from './SearchBar.svelte';
  import DataTable from './DataTable.svelte';

  let { filename = 'sample-dataset.json' } = $props();

  interface Word {
    word: string;
    type?: string;
    frequency: number;
  }

  interface Dataset {
    author: string;
    year: number;
    words: Word[];
  }

  let dataset = $state<Dataset | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let searchQuery = $state('');

  let filteredWords = $derived(dataset?.words ? filterWords(dataset.words, searchQuery) : []);

  onMount(async () => {
    try {
      dataset = await loadDataset(filename);
      error = null;
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
      dataset = null;
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="loading">Loading dataset...</div>
{:else if error}
  <div class="error">
    <h3>Error Loading Data</h3>
    <p>{error}</p>
  </div>
{:else if dataset}
  <div class="dataset">
    <h2>Dataset Information</h2>
    <p><strong>Author:</strong> {dataset.author}</p>
    <p><strong>Year:</strong> {dataset.year}</p>
    
    <h3>Words ({filteredWords.length})</h3>
    <SearchBar bind:value={searchQuery} />
    <DataTable words={filteredWords} />
  </div>
{/if}

<style>
  .loading {
    padding: 1rem;
    text-align: center;
    color: #666;
  }

  .error {
    padding: 1rem;
    background-color: #fee;
    border: 1px solid #c00;
    border-radius: 4px;
  }

  .error h3 {
    margin: 0 0 0.5rem 0;
    color: #c00;
  }

  .dataset {
    padding: 1rem;
  }

  .dataset h2 {
    margin: 0 0 1rem 0;
  }

  .dataset h3 {
    margin: 1.5rem 0 0.5rem 0;
  }
</style>
