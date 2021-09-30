const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Se crea servidor')
});

const server_listen = server.listen(8080, () => {
    console.log(`ESTAMOS CONECTADOS A ${server_listen.address().port}`);
});