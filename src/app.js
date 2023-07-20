/* Requerir los paquetes que vamos a utilizar */
const express = require("express");
const app = express();
const path = require("path")

/* Declarar los recursos estaticos (donde se encuentra public) */
app.use(express.static("public"));


/* Poner en escucha el servidor */
app.listen(3060, () => console.log("Servidor corriendo"));



/* ------------ Manejo de rutas -------------- */
app.get("/iniciarSesion", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/iniciarSesion.html"))
})