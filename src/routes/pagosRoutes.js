const router = require("express").Router();
const paypalController = require("../controllers/paypalController");
const autenticate = require("../middleware/authenticate");

router.post("/crear", autenticate, paypalController.crearPago);
router.get("/completado/:idVenta", autenticate, paypalController.ejecutarPago);

module.exports = router;