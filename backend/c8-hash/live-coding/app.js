const express = require('express')
const userController = require('./controllers/userController')
const app = express()

const PORT = 3000

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 

// TODO: crear funcionalidad de login y registro
app.post('/user/login', )
app.post('/user/register', )

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})
