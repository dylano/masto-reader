<script lang="ts">
  import Counter from './lib/Counter.svelte'

  import { client } from './lib/trpc';

  let name: string;

  async function testApi() {
    let data = await client.userById.query("1")
    name = data.name
  }

  testApi()

</script>

<main>
  {#if name}
    <h1>Hello {name}!</h1>
  {/if}

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite, Svelte and tRPC logos to learn more
  </p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>