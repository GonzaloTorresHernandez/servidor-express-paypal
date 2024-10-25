const pool = require("../config/conexion");
exports.mostrarRolPorIdUsuario = async(idSupabase) => {
    const {rows} = await pool.query("SELECT rol_usuario FROM usuarios WHERE id_auth_supabase = $1", [idSupabase]);
    return rows[0]?.rol_usuario;   // retorno solo el rol
}