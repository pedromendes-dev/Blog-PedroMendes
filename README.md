# Blog — Pedro Mendes

Blog técnico estático feito em [Astro](https://astro.build), hospedado no GitHub Pages.
Posts em Markdown/MDX, busca, dark mode, RSS, SEO e deploy automático.

## Funcionalidades

- Posts em Markdown/MDX com frontmatter validado por schema (type-safe)
- Tags com página por assunto
- Busca client-side (Pagefind, indexada no build)
- Tema claro/escuro com persistência
- RSS feed + sitemap automáticos
- SEO completo (Open Graph, Twitter cards, canonical)
- Índice de leitura (TOC) com scroll-spy nos posts
- Tempo de leitura e syntax highlighting
- Comentários opcionais via Giscus (GitHub Discussions)
- Página "Sobre", 404 customizada, 100% responsivo

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321/blog
```

Outros comandos:

```bash
npm run build    # gera o site em dist/ + índice de busca
npm run preview  # pré-visualiza o build
```

## Personalizar

Tudo que é "suas coisas" está centralizado:

| O quê | Onde |
|---|---|
| Nome, bio, tagline, links, Giscus | `src/consts.ts` |
| Sua foto (rosto) | `public/avatar.svg` → troque por `avatar.jpg` e ajuste o `src` em `index.astro` e `sobre.astro` |
| Sua assinatura | `src/components/Signature.astro` (instruções dentro) |
| Texto da página Sobre | `src/pages/sobre.astro` |
| Cores e fontes | `src/styles/global.css` (variáveis no topo) |

### Escrever um post

Crie um arquivo `.md` ou `.mdx` em `src/content/blog/`:

```markdown
---
title: 'Título do post'
description: 'Resumo curto para SEO e listagem.'
pubDate: 2026-06-19
tags: ['dotnet', 'arquitetura']
---

Seu conteúdo aqui.
```

## Subir para o GitHub Pages

> **Antes de tudo**: abra `astro.config.mjs` e confira `site` e `base`.
> Está configurado para um repositório de projeto chamado `blog`
> (URL final: `https://pedromendes-dev.github.io/blog`).
> Se quiser usar `pedromendes-dev.github.io` direto, leia o comentário no arquivo.

1. Crie o repositório `blog` no GitHub (vazio, sem README).

2. Na pasta do projeto, suba o código:

   ```bash
   git init
   git add .
   git commit -m "blog inicial"
   git branch -M main
   git remote add origin https://github.com/pedromendes-dev/blog.git
   git push -u origin main
   ```

3. No GitHub: **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.

4. (Opcional, para comentários) **Settings → General → Features** → marque **Discussions**.

Pronto. A cada `git push` na branch `main`, o GitHub Actions roda o build e publica.
O primeiro deploy leva ~1–2 min; acompanhe na aba **Actions**.

## Ativar comentários (Giscus)

1. Habilite Discussions no repo (passo 4 acima).
2. Instale o app: https://github.com/apps/giscus
3. Configure em https://giscus.app e copie os 4 valores.
4. Cole em `src/consts.ts` (objeto `GISCUS`) e troque `enabled` para `true`.

## Stack

Astro · MDX · Pagefind · CSS puro (variáveis) · GitHub Actions
