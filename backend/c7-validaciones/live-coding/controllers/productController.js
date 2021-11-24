const fs = require('fs') // file system
const productsJSON = require('../products.json')
const ProductSchema = require('../schemas/product')

module.exports.getProducts = (req, res) => {
    res.send(productsJSON)
}

module.exports.getProductDetail = (req, res) =>{
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
}

module.exports.createProduct = (req, res) =>{
    // 1. acceder a los campos del producto
    const title = req.body.title
    const description = req.body.description

    const product = {
        title: title,
        description: description,
    }

    const validationProduct = ProductSchema.validate(product)
    /* 
    validationProduct.error -> undefined -> no tenemos errores
    validationProduct.error -> [] -> tenemos errores 
    
    A. Si tenemos errores, queremos que devuelva los errores (en el response)
    B. Si no tenemos errores queremos que cree el producto
    */
    
    if (validationProduct.error) {
        // tendriamos errores
        res.status(400).send({
            errors: validationProduct.error.details,
        })
        return
    }

    
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
}

module.exports.updateProduct = (req, res) =>{
    // 1. acceder a los campos del producto
    const id = req.params.id
    
    const title = req.body.title
    const description = req.body.description

    const product = {
        title: title,
        description: description,
    }

    const validationProduct = ProductSchema.validate(product)
    
    if (validationProduct.error) {
        // tendriamos errores
        res.status(400).send({
            errors: validationProduct.error.details,
        })
        return
    }
    
    
    // 2. buscamos el indice del producto
    const indexProduct = productsJSON.findIndex(p => +p.id === +id)

    productsJSON[indexProduct].title = title
    productsJSON[indexProduct].description = description

    // 4. pasarlo a un string (JSON.stringify)
    const productsString = JSON.stringify(productsJSON)
    
    // 5. escribirlo en el archivo
    fs.writeFileSync('./products.json', productsString)
    
    // 6. devolver el producto creado
    res.send(productsJSON[indexProduct])
}
