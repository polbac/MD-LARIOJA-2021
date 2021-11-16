const express = require('express')
const productsJSON = require('./products.json')
const app = express()
const PORT = 3000
/* 
1) Definir una ruta que sea /products
2) Definir una ruta '/products/:id' que nos devuelva el objecto que represente al :id
/products/jenlooper-cactus
/products/jenlooper-lightshow
*/
// definimos rutas
app.get('/products', (req, res) => {
    res.send(productsJSON)
})

app.post('/products', (req, res) => {
    const { Id, Title, Description} = req.body
    console.log(123)
    res.send(productsJSON)
})


app.get('/products/:id', (req, res)=>{
    const id = req.params.id;
    const foundProduct = productsJSON.find(function(product) {
        console.log('product matchea con el id de la url?', product.Id === id)
        /* tenemos que retornar un booleano si el elemento es el que estamos
        buscando o no (true, false) */
        return product.Id === id
    })
    
    if (foundProduct) {
        // entra si foundProduct es distinto de undefined o null    
        
        // respuesta correcta
        res.status(200).send(foundProduct)

    } else {
        // el foundProduct es undefined o null

        // error
        res.status(404).send(`No encontramos el producto ${id}`)
    }  
})

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})