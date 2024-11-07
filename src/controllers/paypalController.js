const paypal = require("../config/paypal");
const ventasModel =require("../models/ventasModel");

exports.crearPago = (req, res, next) => {

    const {items, total } = req.body;
    const mapeoItems = items.map(item => ({
        name: item.descripcion,
        sku: 'SKU-' + item.id_producto,
        price: (item.precio_venta).toString(),
        currency: "USD",
        quantity: item.cantidad
    }));

    // json de datos con la creacion de pago
    const create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5173/pago/success",
            cancel_url: "http://cancel.url"
        },
        transactions: [{
            item_list: {
                items: mapeoItems
            },
            amount: {
                currency: "USD",
                total: total
            },
            description: "Este es la estructura de pago con paypal"
        }]
    };

    // crear el pago
    paypal.payment.create(create_payment_json, async function(error, pago){
        if (error) {
            next(error);
        }else{
            const redirectUrl = pago.links.find(link => link.rel == "approval_url").href;
            // responder con el resp de paypal si todo sale bien
            // res.status(200).json({pago});

            // retornarmos la url para realizar el pago
            res.status(200).json({redirectUrl});
        }
    });

};

exports.ejecutarPago = async (req, res, next) => {
    const {idVenta} = req.params;
    const {paymentId, PayerID} = req.query;
    const execute_payment_json = {
        payer_id: PayerID,
        transactions: [{
            amount: {
                currency: "USD",
                total: req.query.total
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, async function name(error, payment) {
        if (error) {
            next(error);
        }else{
            try {
                await ventasModel.confirmarVenta("confirmado", idVenta);
                console.log("Completado Correctamente");
                // responder con el resp de paypal si todo sale bien
                res.status(200).json({payment});
            } catch (error) {
                next(error);
            }
        }
    });

};