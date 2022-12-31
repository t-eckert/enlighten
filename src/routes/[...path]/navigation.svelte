<script lang="ts">
	export let path: string[]
	export let directories: string[]
	export let files: string[]

	const striptype = (file: string): string => file.split(".").slice(0, -1).join(".")
</script>

<div class="flex flex-col rounded-md shadow w-96 mx-auto px-4 py-2 text-sm font-medium text-slate-700">
	{#each directories as directory}
		<a href={directory}>{directory}/</a>
	{/each}
	{#each files as file}
		<a href={file}>{striptype(file)}</a>
	{/each}
</div>
