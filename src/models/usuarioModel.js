const pool = require("../config/conexion");
exports.mostrarRolPorIdUsuario = async(idSupabase) => {
    const {rows} = await pool.query("SELECT rol_usuario FROM usuarios WHERE id_auth_supabase = $1", [idSupabase]);
    return rows[0]?.rol_usuario;   // retorno solo el rol
}

exports.mostrarUsuarioPorIdSupabase = async(idSupabase) => {
    const {rows} = await pool.query("SELECT * FROM usuarios WHERE id_auth_supabase = $1", [idSupabase]);
    return rows[0];
}

exports.crearUsuario = async (rol_usuario, id_auth_supabase, nombre_usuario) => {
    const {rows} = await pool.query("INSERT INTO usuarios (rol_usuario, id_auth_supabase, nombre_usuario) VALUES ($1, $2, $3) RETURNING *", [rol_usuario, id_auth_supabase, nombre_usuario]);
    return rows[0];
}