const pool = require("../config/conexion");

exports.getProductos = async() =>{
    const {rows} = await pool.query("SELECT * FROM productos");
    return rows;
};

exports.getProductoPorId = async(id) =>{
    const {rows} = await pool.query("SELECT * FROM productos WHERE id_producto = $1", [id]);
    return rows[0];
};

exports.crearProducto = async(nombre, precio, imagen) =>{
    const {rows} = await pool.query("INSERT INTO productos (nombre_producto, precio_producto, imagen_producto) VALUES($1, $2, $3) RETURNING *", [nombre, precio, imagen]);
    return rows[0];
};

exports.editarProducto = async(nombre, precio, imagen, id) =>{
    const {rows} = await pool.query("UPDATE productos SET nombre_producto = $1, precio_producto = $2, imagen_producto = $3 WHERE id_producto = $4 RETURNING *", [nombre, precio, imagen, id]);
    return rows[0];
};

exports.eliminarProducto = async(id) =>{
    const {rows} = await pool.query("DELETE FROM productos WHERE id_producto = $1 RETURNING *", [id]);
    return rows[0];
};