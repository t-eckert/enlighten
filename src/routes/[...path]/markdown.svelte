<script lang="ts">
	import { marked } from "marked"
	import "./markdown.css"

	export let markdown: string

	let html = marked.parse(markdown)
</script>

<article>{@html html}</article>
