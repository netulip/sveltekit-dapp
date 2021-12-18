import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { imagetools } from 'vite-imagetools'
import windicss from 'vite-plugin-windicss'
import noop from 'postcss-noop'

export default {
	extensions: ['.svelte'],
	preprocess: [
		preprocess({
			postcss: { plugins: [noop()] },
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
