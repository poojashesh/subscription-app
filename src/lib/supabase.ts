import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

const options = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
}

const supabase = createClient(supabaseUrl, supabaseKey, options)

export default supabase
