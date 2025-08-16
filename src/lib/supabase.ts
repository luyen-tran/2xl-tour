import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (for API routes only)
// Uses service role key for full database access
export const supabaseServer = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Client-side Supabase client (for browser)
// Uses anon key with Row Level Security (RLS)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);
