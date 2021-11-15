const express = require('express')
const fs = require('fs') // file system
const productsJSON = require('./products.json')
const app = express()

const PORT = 3000

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 

// definimos rutas
app.get('/products', (req, res) => {
    res.send(productsJSON)
})

app.get('/products/:id', (req, res)=>{
    const id = req.params.id;
    const foundProduct = productsJSON.find(function(product) {
        console.log('product matchea con el id de la url?', product.Id === id)
        /* tenemos que retornar un booleano si el elemento es el que estamos
        buscando o no (true, false) */
        return product.id === id
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

app.post('/products', (req, res) => {
    // 1. acceder a los campos del producto
    const title = req.body.title
    const description = req.body.description
    
    // 2. generar un id para nuestro nuevo producto
    const lastPosition = productsJSON.length - 1
    const lastId = Number(productsJSON[lastPosition].id)
    const nextId = lastId + 1
    
    // 3. agregar el nuevo producto al array del json
    const newProduct = {
        id: nextId,
        title: title,
        description: description,
    }

    productsJSON.push(newProduct)

    // 4. pasarlo a un string (JSON.stringify)
    const productsString = JSON.stringify(productsJSON)
    
    // 5. escribirlo en el archivo
    fs.writeFileSync('./products.json', productsString)
    
    // 6. devolver el producto creado
    res.send(newProduct)
})

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})
