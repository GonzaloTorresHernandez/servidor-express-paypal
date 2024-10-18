const supabase = require("../config/supabase");

const registrar = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.stack);
  }
  return data;
};

const logear = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.stack);
  }
  return data;
};

module.exports = {
  registrar,
  logear,
};
