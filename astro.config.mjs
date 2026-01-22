import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://ericmichaelsandwich.netlify.app',
	base: '/',
	integrations: [
		mdx(),
		sitemap(),
		icon({
			include: {
				mdi: ['*'], // Allows all Material Design Icons
				'fluent-emoji-high-contrast': ['*'], // Allows all Fluent Emoji High Contrast icons
			},
		}),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkModifiedTime],
		rehypePlugins: [rehypeFigureTitle, rehypeAccessibleEmojis],
	},
})
