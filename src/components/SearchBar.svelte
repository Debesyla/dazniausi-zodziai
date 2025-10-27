<script>
  let { value = $bindable('') } = $props();
</script>

<div class="search-bar">
  <input bind:value type="text" placeholder="Search words..." />
  {#if value}
  <button type="button" onclick={() => value = ''} aria-label="Clear search">✕</button>
  {/if}
</div>

<style>
  .search-bar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  input {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5rem;
  }
  button {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #111;
  }
</style>