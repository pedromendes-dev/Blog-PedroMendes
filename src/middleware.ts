import { defineMiddleware } from 'astro:middleware';
import { createClient } from './lib/supabase';

export const onRequest = defineMiddleware(async ({ url, cookies, redirect }, next) => {
  if (!url.pathname.startsWith('/admin')) return next();
  if (url.pathname === '/admin/login') return next();

  const supabase = createClient(cookies);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== import.meta.env.ADMIN_EMAIL) {
    return redirect('/admin/login');
  }

  return next();
});
