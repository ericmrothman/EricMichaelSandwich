import { defineCollection, z } from 'astro:content'

const work = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
		tags: z.array(z.string()).default(['misc']),
		videoLoop: z.string().optional(),
		bunnyVideoId: z.string().optional(),
	}),
})

export const collections = { work }
