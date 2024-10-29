const router = require("express").Router();
const ventasController = require("../controllers/ventasController");
const detalleVentasController = require("../controllers/detalleVentasController");
const autenticate = require("../middleware/authenticate");


router.post("/", autenticate, ventasController.crearVenta);
router.post("/item/:id_usuario", autenticate, detalleVentasController.crearDetalleVenta);

module.exports = router;