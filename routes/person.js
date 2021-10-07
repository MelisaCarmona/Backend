const express = require("express");
const app = express();

const personRoute = express.Router();

const container = require('./Container');
const container_class = new container('./person.json.txt');

/** Port of departure */
const PORT = 8080;



/** Welcome greeting */
personRoute.get("/", (request, response, next) => {
    response.send("<h1>Chiquita!!!</h1>");
});
module.exports = personRoute;