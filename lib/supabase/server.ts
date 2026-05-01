import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');
}

/**
 * Supabase Admin Client (Server-side only)
 * 
 * SECURITY: This client uses the service role key and bypasses RLS.
 * Never expose this client or the service role key to the client side.
 * 
 * Database Schema (run this in Supabase SQL Editor):
 * 
 * create table inquiries (
 *   id uuid primary key default gen_random_uuid(),
 *   name text not null,
 *   email text not null,
 *   phone text,
 *   event_type text not null,
 *   event_date date not null,
 *   guest_count int,
 *   message text,
 *   created_at timestamptz default now()
 * );
 * 
 * alter table inquiries enable row level security;
 * 
 * create policy "service_role_insert_only"
 *   on inquiries
 *   for insert
 *   to service_role
 *   with check (true);
 */
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
