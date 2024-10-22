const productosModel = require("../models/productosModel");

exports.getProductos = async(req, res, next) => {
    try {
        const resultado = await productosModel.getProductos();
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.getProductoPorId = async(req, res, next) => {
    try {
        const {id} = req.params;
        const resultado = await productosModel.getProductoPorId(id);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.crearProducto = async(req, res, next) => {
    try {
        const {nombre, precio, imagen} = req.body;
        const resultado = await productosModel.crearProducto(nombre, precio, imagen);
        res.status(201).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.editarProducto = async(req, res, next) => {
    try {
        const {id} = req.params
        const {nombre, precio, imagen} = req.body;
        const resultado = await productosModel.editarProducto(nombre, precio, imagen, id);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

exports.eliminarProducto = async(req, res, next) => {
    try {
        const {id} = req.params;
        const resultado = await productosModel.eliminarProducto(id);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};