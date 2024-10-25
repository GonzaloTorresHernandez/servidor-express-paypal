const pool = require("../config/conexion");

exports.getDetaleVentaPorIdVenta = async(id_venta) =>{
    const {rows} = await pool.query("SELECT * FROM detalle_ventas WHERE id_venta = $1", [id_venta]);
    return rows[0];
};

exports.crearDetalleVenta = async(id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total) =>{
    const {rows} = await pool.query("INSERT INTO detalle_ventas (id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
                                    [id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total]);
    return rows[0];
};
