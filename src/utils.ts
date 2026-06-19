/**
 * Monta URLs internas respeitando o `base` configurado no astro.config.
 * Use SEMPRE para links internos, senão eles quebram quando o site
 * roda sob um subcaminho (ex.: /blog).
 *
 *   href('/sobre')        -> /blog/sobre
 *   href('blog/meu-post') -> /blog/blog/meu-post  (cuidado: passe sem barra)
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/** Formata datas no padrão brasileiro: "12 de março de 2026" */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
