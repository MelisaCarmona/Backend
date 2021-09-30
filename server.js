////////// VARIABLES ARE INITIALIZED///////////////

/** Express */
const express = require("express");
const app = express();

/** Port of departure */
const PORT = 8080;

/** Class Container */
const container = require('./Container');
const container_class = new container('./productos.txt');

app.get("/", (request, response, next) => {
    response.send("<h1>Bienvenido!!!</h1>");
});


app.get("/productos", (request, response, next) => {
    let container_file = container_class.read();
    response.send(container_file);
});
app.get("/productoRandom", (request, response, next) => {
    let container_file = container_class.read();
    let productRandom = container_file[Math.floor(Math.random() * container_file.length)];
    response.send(productRandom);
});
const server = app.listen(PORT, () => { console.log(`Servidor http escuchando en el puerto ${PORT}`); });
server.on("error", (error) => console.log(`Error en servidor ${error}`));