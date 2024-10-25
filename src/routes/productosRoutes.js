const router = require("express").Router();
const productosController = require("../controllers/productosController");
const authenticate = require("../middleware/authenticate");
const isAdmin = require("../middleware/isAdmin");

router.get("/", productosController.getProductos);
router.get("/:id", productosController.getProductoPorId);

// aplicar la autenticacion y si su rol es administrador
// el orden de ejecucion de la validacion es de izq a derecha 
// para que un middleware pase al otro metodo o middleware debemos utilizar next()
router.post("/", authenticate, isAdmin, productosController.crearProducto);
router.put("/:id", authenticate, isAdmin, productosController.editarProducto);
router.delete("/:id", authenticate, isAdmin, productosController.eliminarProducto);

module.exports = router;