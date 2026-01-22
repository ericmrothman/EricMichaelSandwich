import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const work = await getCollection('work')
	return rss({
		// `<title>` field in output xml
		title: 'Saral Theme',
		// `<description>` field in output xml
		description:
			'A simple theme for personal blog sites, created for Astro framework',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: work.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/work/[id]` routes
			link: `/work/${post.id.replace('.md', '')}/`,
		})),
	})
}
