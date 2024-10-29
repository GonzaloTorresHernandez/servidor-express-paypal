const detalleVentasModel = require("../models/detalleVentasModel");
const ventasModel = require("../models/ventasModel");

exports.getDetaleVentaPorIdVenta = async(req, res, next) => {
    try {
        const {id_venta} = req.params;
        const resultado = await detalleVentasModel.getDetaleVentaPorIdVenta(id_venta);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.crearDetalleVenta = async(req, res, next) => {
    try {
        // const userId = req.user.id;  // es una forma de obtener el id de supabase 
        const userId = req.params.id_usuario;
        const {id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total} = req.body;

        const venta = await ventasModel.getVentaPorIdUsuario(userId);
        if (!venta) {
            return res.status(404).json({ error: "Venta no encontrada"});
        }

        const resultado = await detalleVentasModel.crearDetalleVenta(venta.id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total);
        res.status(201).json(resultado);
    } catch (error) {
        next(error);
    }
};


