const express = require('express')
const productController = require('./controllers/productController')
const countryController = require('./controllers/countryController')
const app = express()

const PORT = 3000

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 

// definimos rutas
app.get('/products', productController.getProducts)
app.get('/products/:id', productController.getProductDetail)
app.post('/products', productController.createProduct)
app.put('/products/:id', productController.updateProduct)

app.post('/country', countryController.createCountry)

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})
