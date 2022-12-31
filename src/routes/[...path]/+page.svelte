<script lang="ts">
	import Navigation from "./navigation.svelte"
	import Markdown from "./markdown.svelte"
	import Contents from "./contents.svelte"

	import type { Data } from "./+page.server.js"
	export let data: Data

	let { path, markdown, directories, files } = data
</script>

<div class="flex flex-row gap-4 mt-8">
	<div class="px-4 w-full max-w-md">
		<Navigation {path} {directories} {files} />
	</div>
	<div class="max-w-4xl mx-auto">
		<Markdown {markdown} />
	</div>
	<div class="px-4 w-full max-w-md">
		<Contents {markdown} />
	</div>
</div>
