// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
// Router con R mayuscula
const router = express.Router();

// Importamos el controlador de las rutas por defecto
const mainController = require("../controllers/mainController.js")

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos

// Procesa el pedido get con ruta /
router.get("/", mainController.index);
/*  res.sendFile(path.resolve(__dirname, "../views/index.html")) */
router.get("/bibloteca", mainController.bibloteca);



router.get("/carrito", mainController.carrito);

// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;