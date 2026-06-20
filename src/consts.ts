// ╔══════════════════════════════════════════════════════════════════╗
// ║  CENTRAL DE CONFIGURAÇÃO — edite SÓ este arquivo para personalizar ║
// ║  Nome, bio, links sociais, comentários. Tudo aqui.                 ║
// ╚══════════════════════════════════════════════════════════════════╝

export const SITE = {
  /** Seu nome — aparece no header, footer, SEO e assinatura */
  author: 'Pedro Mendes',
  /** Título do site (aba do navegador, SEO) */
  title: 'Pedro Mendes — Dev & Engenharia de Software',
  /** Descrição curta para SEO e RSS */
  description:
    'Blog técnico sobre desenvolvimento full stack, arquitetura de software, .NET, Node.js e React. Por Pedro Mendes.',
  /** Idioma do site */
  lang: 'pt-BR',
  /** Frase de impacto na home (seu "pitch") */
  tagline: 'Construo software que dura. Escrevo sobre arquitetura, código limpo e as decisões por trás dele.',
  /** Profissão/cargo — aparece sob o nome */
  role: 'Full Stack Developer',
  /** Localização */
  location: 'Belo Horizonte, MG · Brasil',
} as const;

/** Links das suas redes — deixe a string vazia ('') para esconder o ícone */
export const SOCIALS = {
  github: 'https://github.com/pedromendes-dev',
  linkedin: 'https://linkedin.com/in/pedro-mendes',
  email: 'pedromendes211205@gmail.com',
  twitter: '', // ex.: 'https://x.com/seu_user'
} as const;

// ── Comentários via Giscus (usa GitHub Discussions do seu repo) ──────
// Como ativar:
//   1. Habilite "Discussions" no seu repositório (Settings > Features)
//   2. Instale o app: https://github.com/apps/giscus
//   3. Configure em https://giscus.app e copie os 4 valores abaixo
//   4. Mantenha ENABLED em true
export const GISCUS = {
  enabled: true,
  repo: 'pedromendes-dev/Blog-PedroMendes',
  repoId: 'R_kgDOS_uSzQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOS_uSzc4C_gaj',
} as const;

/** Itens do menu de navegação. href é relativo à raiz do site. */
export const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tags', href: '/tags' },
  { label: 'Sobre', href: '/sobre' },
] as const;
