// Crear un cliente para supabase
const dotenv = require("dotenv");
dotenv.config();

const {createClient} = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);    //exportanmos el cliente

module.exports = supabase;

