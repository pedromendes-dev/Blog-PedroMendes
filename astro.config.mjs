// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  CONFIGURAÇÃO DO GITHUB PAGES — LEIA ANTES DE FAZER DEPLOY            │
// │                                                                        │
// │  Existem 2 cenários. Escolha o seu e ajuste `site` e `base`:          │
// │                                                                        │
// │  CENÁRIO A — Repositório de PROJETO (ex.: repo chamado "blog")        │
// │    URL final: https://pedromendes-dev.github.io/blog                  │
// │    site: 'https://pedromendes-dev.github.io'                          │
// │    base: '/blog'                                                       │
// │                                                                        │
// │  CENÁRIO B — Site de USUÁRIO (repo chamado pedromendes-dev.github.io) │
// │    URL final: https://pedromendes-dev.github.io                       │
// │    site: 'https://pedromendes-dev.github.io'                          │
// │    base: '/'                                                           │
// │                                                                        │
// │  Está configurado para o CENÁRIO A (mais seguro, não conflita com     │
// │  um site de usuário que você já possa ter). Para o B, troque base.    │
// └──────────────────────────────────────────────────────────────────────┘

export default defineConfig({
  site: 'https://pedromendes-dev.github.io',
  base: '/blog',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Tema do destaque de sintaxe nos blocos de código
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
