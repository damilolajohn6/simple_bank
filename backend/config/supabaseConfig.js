const { createClient } = require('@supabase/supabase-js');

// const supabase = createClient('YOUR_SUPABASE_PROJECT_URL', 'YOUR_SUPABASE_API_KEY');
// const { createClient } from "@supabase/supabase-js";
require('dotenv').config();

const supabaseUrl = "https://paqatbrjdbtmcnnhuczm.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
