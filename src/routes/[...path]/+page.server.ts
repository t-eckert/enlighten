/* eslint-disable */
// TODO Fix this by understanding SvelteKit types

import { markdown, directories, files } from "./mocks"

export interface Data {
	path: string[]
	markdown: string
	directories: string[]
	files: string[]
}

export async function load({ params }: any) {
	const path: string[] = params.path.split("/")


	return {
		path,
		markdown,
		directories,
		files
	}
}
