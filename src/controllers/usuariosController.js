const usuariosModel = require("../models/usuarioModel");

exports.getUsuarioPorIdSupabase = async (req, res, next) =>{
   const { idSupabase } = req.params;
   try {
    const response = await usuariosModel.mostrarUsuarioPorIdSupabase(idSupabase);
    res.status(200).json(response);
   } catch (error) {
    next(error);
   }
}

exports.crearUsuario = async(req, res, next) => {
    try {
        const {rol_usuario, id_auth_supabase, nombre_usuario} = req.body;
        const resultado = await usuariosModel.crearUsuario(rol_usuario, id_auth_supabase, nombre_usuario);
        res.status(201).json(resultado);
    } catch (error) {
        next(error);
    }
};