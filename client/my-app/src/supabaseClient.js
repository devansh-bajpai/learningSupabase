import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://qimngmucteirrpmzatoh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbW5nbXVjdGVpcnJwbXphdG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0OTA0MTAsImV4cCI6MjA1OTA2NjQxMH0.B-n3CxzHTB9rt1nYs7gvuSLSyu-dWOyOidoAcZj5F6A'
export const supabase = createClient(supabaseUrl, supabaseKey);
