"use server";

import { createServerClient, CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "~/schema";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "~/vars";

export type ServerSupabase = ReturnType<typeof createServerClient<Database>>;
export async function $supabase(options?: { editable?: boolean }) {
  const cookieStore = cookies();
  return createServerClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      ...(options?.editable
        ? {
            set(name: string, value: string, options: CookieOptions) {
              cookieStore.set({ name, value, ...options });
            },
            remove(name: string, options: CookieOptions) {
              cookieStore.set({ name, value: "", ...options });
            },
          }
        : {}),
    },
  });
}
