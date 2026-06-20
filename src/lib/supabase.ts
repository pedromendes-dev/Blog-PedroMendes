import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export function createClient(cookies: AstroCookies) {
  return createServerClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookies.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          cookies.set(name, value, options as Parameters<AstroCookies['set']>[2]);
        },
        remove(name: string, options: Record<string, unknown>) {
          cookies.delete(name, options as Parameters<AstroCookies['delete']>[1]);
        },
      },
    }
  );
}
