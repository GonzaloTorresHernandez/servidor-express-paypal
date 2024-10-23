const pool = require("../config/conexion");
exports.mostrarRolPorIdUsuario = async(idSupabase) => {
    const {rows} = await pool.query("SELECT rol FROM users WHERE id_auth_supabase = $1", [idSupabase]);
    return rows[0]?.role;   // retorno solo el rol
}