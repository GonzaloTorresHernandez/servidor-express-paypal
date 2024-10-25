const ventasModel = require("../models/ventasModel");

exports.getVentaPorIdUsuario = async(req, res, next) => {
    try {
        const {id_usuario} = req.params;
        const resultado = await ventasModel.getVentaPorIdUsuario(id_usuario);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.crearVenta = async(req, res, next) => {
    try {
        const {id_usuario, estado, total} = req.body;
        const resultado = await ventasModel.crearVenta(id_usuario, estado, total);
        res.status(201).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.confirmarVenta = async(req, res, next) => {
    try {
        const {id_venta} = req.params
        const {estado} = req.body;
        const resultado = await ventasModel.confirmarVenta(estado, id_venta);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

