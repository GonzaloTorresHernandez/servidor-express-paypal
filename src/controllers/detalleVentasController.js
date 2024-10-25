const detalleVentasModel = require("../models/detalleVentasModel");

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
        const {id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total} = req.body;
        const resultado = await detalleVentasModel.crearDetalleVenta(id_venta, id_producto, descripcion_producto, precio_venta_producto, cantidad_producto, total);
        res.status(201).json(resultado);
    } catch (error) {
        next(error);
    }
};


