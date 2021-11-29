const express = require('express')
const userController = require('./controllers/userController')
const app = express()

const PORT = 3000

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 

// definimos rutas
app.post('/user/login', userController.login)
app.post('/user/register', userController.register)

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})
