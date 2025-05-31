// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://exsfyzbgctfmliolwqrp.supabase.co'  // project URL hai
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c2Z5emJnY3RmbWxpb2x3cXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzYyMjQsImV4cCI6MjA2NDI1MjIyNH0.qEvDdWzYD_gi56OgwsDvs8KEHJ3t3uXwlFP7J_bhV5A'                     // anon key hai-> public api key hai 

export const supabase = createClient(supabaseUrl, supabaseKey)
