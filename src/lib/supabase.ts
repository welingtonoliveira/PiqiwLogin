import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://farsjboixycybhlrtbvm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcnNqYm9peHljeWJobHJ0YnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NjA3OTQsImV4cCI6MjA0NjAzNjc5NH0.rVHLNSrF6CEtz7uf11-P1a88kBaovjhUMhTMor24dAQ';

export const supabase = createClient(supabaseUrl, supabaseKey);