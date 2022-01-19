import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { imagetools } from 'vite-imagetools'
import windicss from 'vite-plugin-windicss'

export default {
	extensions: ['.svelte'],
	preprocess: [
		preprocess({
			preserve: ['ld+json']
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': path.resolve('src')
				}
			},
			plugins: [windicss({ transformCSS: 'pre' }), imagetools({ force: true })]
		}
	}
}
