const http = require('http');
const port = 5500;
const { type } = require('os');

const server = http.createServer((req, res) => {
    // Obtener info de una api, por medio de qué lo hago
    // url, method/verb (GET, POST, PUT, DELETE)
    // Generar una response se necesita:
    // status, response content, mime type
    const status = 200;
    const mimeType = {'Content-type': 'text/html'};
    const contentResponse = '<html><body>Hola desde node</body></html>';
    res.writeHead(status, mimeType);
    res.write(contentResponse); 
    res.end(); 
});

server.listen(port);

console.log('Servidor JOYA en el puerto:', port);
