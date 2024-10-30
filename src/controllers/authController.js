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

    //crear el usuario en la bd
    const parametros = {
        rol_usuario: "usuario",
        id_auth_supabase: data.user.id,
        nombre_usuario: "generico"
    };
    await   usuarioModel.crearUsuario(parametros);
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