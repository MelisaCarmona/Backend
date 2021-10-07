const express = require('express');
const server = express();

const productRoute = express.Router();
const container = require('../Container');
const container_class = new container('./data/product.json');

/** Port of departure */
const PORT = 8080;

/** Get products */
productRoute.get("/", (request, response, next) => {
    let data = container_class.read();
    response.send(data);
});

/** Get product */
productRoute.get("/:id", (request, response, next) => {
    let data = container_class.getProduct(request.params.id);
    response.send(data);
});

productRoute.post("/", (request, response, next) => {
    let data = container_class.save(request.body);

    response.json(request.body);
});
module.exports = productRoute;