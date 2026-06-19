import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coleção de posts: cada arquivo .md/.mdx em src/content/blog é um post.
// O schema valida o frontmatter no build — se faltar campo, o build falha
// (type-safety de verdade, igual você gosta).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /** Imagem de capa opcional (caminho dentro de src/content/blog/) */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      /** Marque como rascunho para não publicar */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
