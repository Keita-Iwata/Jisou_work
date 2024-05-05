import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const SUPABASE_URL = process.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANNON_KEY = process.env.VITE_SUPABASE_ANNON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANNON_KEY);


// import { createClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with your database
// const supabase = createClient('https://vrtkrusfazimoenxdzne.supabase.co', 'public-anon-key')