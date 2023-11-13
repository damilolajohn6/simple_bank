// const { createClient } = require("@supabase/supabase-js");
// require("dotenv").config();

// const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// module.exports = supabase;


// supabaseConfig.js
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://paqatbrjdbtmcnnhuczm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhcWF0YnJqZGJ0bWNubmh1Y3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MTk5MjcsImV4cCI6MjAxMzI5NTkyN30.kc3fpTYMoqVsQvZAE96g_8_T5YHCKyqQAKpQyznMJls";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
