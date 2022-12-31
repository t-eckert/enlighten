<script lang="ts">
	import contents, { type Header } from "./contents"

	export let markdown: string

	let headers = contents(markdown)
</script>

<div>
	<h2>Table of Contents</h2>
	{#each headers as header}
		<div>{header.title}</div>
	{/each}
</div>
