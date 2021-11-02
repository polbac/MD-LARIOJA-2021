const express = require('express');
const app = express();

// http://localhost:3000
/* app.listen(3000, function() {
    console.log('el servidor esta corriendo en el puerto 3000');
}); */

// request & response
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/biografia', (req, res) => {
    res.send('Esto es una biografía');
});


app.get('/producto/:idProducto', (req, res) => {
    const idProducto = req.params.idProducto;
    //res.send('Estamos en la vista del producto ' + idProducto);
    res.send(`Estamos en la vista del producto ${idProducto}`);
});


app.listen(3000, () => {
    console.log('el servidor esta corriendo en el puerto 3000');
});