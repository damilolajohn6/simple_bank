const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();


const supabaseUrl = "your-supabase-project-url";
const supabaseApiKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseApiKey);

module.exports = supabase;
