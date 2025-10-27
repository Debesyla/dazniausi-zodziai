<script>
  let { value = $bindable('') } = $props();
</script>

<div class="search-bar">
  <input bind:value type="text" placeholder="Search words..." />
  {#if value}
  <button type="button" onclick={() => value = ''}>Clear</button>
  {/if}
</div>

<style>
  .search-bar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
</style>