import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://crhzrcihihcjbnmiwook.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyaHpyY2loaWhjamJubWl3b29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE0ODA4MDQsImV4cCI6MTk2NzA1NjgwNH0.9mlOSoEhw1Y2JsjolFFFIHgW1nr7reSOLLiGaG8Bvn4"
);

export { supabase };
