# M(V)C / JSON

## Anuncios

- Fundamentos
- Lo que viene
- Postman

<img src="https://seguridad.cicese.mx/uploads/notautic/utic23-5a3c250c42cae.png" />

## Controladores

```
// controllers/productController.js
const productsJson = require('./products.json)

module.export = {
    list(req, res) {
        res.send(productsJson)
    }
}
```

## Rutas escalables

```
// routes/productRoutes.js
const express = require('express')
const productRoutes = express.Router()
const productController = require('../controllers/productController)

planetsRoutes.get('/', productController.list)
```