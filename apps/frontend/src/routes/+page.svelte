<script lang="ts">
  import { type UserRoles } from '@teachly/shared';

  let user = $state<UserRoles>('admin');
</script>

<h1>Welcome to SvelteKit {user}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
