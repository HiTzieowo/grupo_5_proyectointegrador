// Requerimos path para poder enviar los archivos HTML
const path = require("path");

// Creamos el objeto literal con los métodos a exportar
const productsController = {

    // Manejo del pedido get con ruta
    productoDetalle: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/producto.html"))
    },
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = productsController;