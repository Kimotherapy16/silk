import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const SUPABASE_URL = "https://dihzhshukgwduxatoyrj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaHpoc2h1a2d3ZHV4YXRveXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NTExMzEsImV4cCI6MjA1NzMyNzEzMX0.EuyuH4VVV92bb44-x59rs9id5eSNA-CU6guMkCP74Vc";


export default createClient(SUPABASE_URL, SUPABASE_KEY);

