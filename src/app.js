// Requerir los paquetes que vamos a utilizar
const express = require("express");
const app = express();


    // Importamos los distintos enrutadores
    const mainRouter = require("./routers/mainRouter.js")

    const productsController = require("./routers/productsRouter.js")

    const usuariosController = require("./routers/usuariosRouter.js")
   

    // Usando recursos estáticos.
app.use(express.static("public"));

// Usando los enrutadores importados
app.use("/", mainRouter);

app.use("/", productsController);

app.use("/", usuariosController);



// Ponemos a escuchar el servidor
app.listen(3060, () => {
    console.log("Servidor corriendo en http://localhost:3060")
});







