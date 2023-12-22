// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    schema: ({image})=> z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};