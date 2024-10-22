const supabase = require("../config/supabase");
const usuarioModel = require("../models/usuarioModel");

const registrar = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ 
        email: email, 
        password: password });
    if (error) {
        return res.status(400).json({ error: error.stack });
    }
    res.status(200).json({ user: data.user });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password});
    if (error) {
        return res.status(400).json({ error: error.stack });
    }
    res.status(200).json({ session: data.session });
};


module.exports = {
    registrar,
    login
}