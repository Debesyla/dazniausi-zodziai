<script lang="ts">
  import { onMount } from 'svelte';
  import { loadDataset } from '$lib/data';

  export let filename = 'sample-dataset.json';

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

  let dataset: Dataset | null = null;
  let loading = true;
  let error: string | null = null;

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
    
    <h3>Words ({dataset.words.length})</h3>
    <ul class="word-list">
      {#each dataset.words as word}
        <li>
          <span class="word">{word.word}</span>
          {#if word.type}
            <span class="type">({word.type})</span>
          {/if}
          <span class="frequency">- {word.frequency.toLocaleString()}</span>
        </li>
      {/each}
    </ul>
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

  .word-list {
    list-style: none;
    padding: 0;
  }

  .word-list li {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .word {
    font-weight: bold;
  }

  .type {
    color: #666;
    font-size: 0.9em;
    margin-left: 0.5rem;
  }

  .frequency {
    color: #888;
    margin-left: 0.5rem;
  }
</style>
