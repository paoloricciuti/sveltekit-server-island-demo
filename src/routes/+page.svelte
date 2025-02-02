<script lang="ts">
	import Test from '../islands/Test.svelte';
</script>

<Test name="cool">
	{#snippet fallback()}
		Loading...
	{/snippet}
</Test>

<Test name="other">
	{#snippet fallback()}
		Different...
	{/snippet}
</Test>
