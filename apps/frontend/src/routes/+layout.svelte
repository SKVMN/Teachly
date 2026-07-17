<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex h-full w-full flex-col">
  <div class="shrink-0 grow-0 basis-12 content-center bg-amber-200 p-3">sdfasdfaf</div>
  <div class="main-container flex-auto shrink grow basis-full bg-amber-900 p-3"></div>

  {@render children()}
</div>
