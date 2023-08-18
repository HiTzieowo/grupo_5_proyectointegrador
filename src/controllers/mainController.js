// Requerimos path para poder enviar los archivos HTML
const path = require("path");

// Creamos el objeto literal con los métodos a exportar
const mainController = {

    // Manejo del pedido get con ruta
    index: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/inicio.html"))
    },
    bibloteca: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/bibloteca.html"))
    },
    listaDeDeseos: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/listaDeDeseos.html"))
    },
    carrito: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/carrito.html"))
    },
    
   
   
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;