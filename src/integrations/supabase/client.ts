// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nhwfslvcxosoektouawk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5od2ZzbHZjeG9zb2VrdG91YXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NDY4MTksImV4cCI6MjA2MDMyMjgxOX0.kYNfLgQZa6pqhcVm5uTvHPknK2WWVjiqMsjqXzsYWfM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);