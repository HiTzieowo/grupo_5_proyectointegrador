// Requerir los paquetes que vamos a utilizar
const express = require("express");
const app = express();

const path = require("path");

// Declarar los recursos estaticos (donde se encuentra public)
app.use(express.static("public"));

// Poner a escuchar el servidor
app.listen(3060, () => console.log("Servidor corriendo en http://localhost:3060/inicio"))

// ----------- Manejo de rutas -------------






app.get("/producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto.html"))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"))
})

app.get("/bibloteca", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/bibloteca.html"))
})

app.get("/listaDeDeseos", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/listaDeDeseos.html"))
})

app.get("/iniciarSesion", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/iniciarSesion.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/inicio", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/inicio.html"))
})







