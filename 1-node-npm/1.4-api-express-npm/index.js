const express = require ('express');
const colors = require('colors');
const app = express();
const port = 3000;
const data = require('./data/songs.js');

app.get('/', (req, res) => {
    res.send('<html> <body> Hola desde node y express cambios </body> </html> ');
    });

app.get('/songs', (req, res) => {
    res.json(data.songs);
});

app.listen(port, () => {
    console.log(`Servidor JOYA en el puerto:${port}`.rainbow);
}   );