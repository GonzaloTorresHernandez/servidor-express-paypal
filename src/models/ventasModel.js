const pool = require("../config/conexion");

exports.getVentaPorIdUsuario = async(id_usuario) =>{
    const {rows} = await pool.query("SELECT * FROM ventas WHERE id_usuario = $1", [id_usuario]);
    return rows[0];
};

exports.crearVenta = async(id_usuario, estado, total) =>{
    const {rows} = await pool.query("INSERT INTO ventas (id_usuario, estado, total) VALUES($1, $2, $3) RETURNING *", [id_usuario, estado, total]);
    return rows[0];
};

exports.confirmarVenta = async(estado, id_venta) =>{
    const {rows} = await pool.query("UPDATE ventas SET estado = $1 WHERE id_venta = $2 RETURNING *", [estado, id_venta]);
    return rows[0];
};
