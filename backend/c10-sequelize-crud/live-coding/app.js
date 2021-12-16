const express = require('express')
const app = express()
const PORT = 3000

const todoController = require('./controllers/todo')

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 


app.get('/todo', todoController.list)
app.get('/todo/:id', todoController.detail)
app.post('/todo', todoController.create)
app.put('/todo/:id', todoController.update)
app.delete('/todo/:id', todoController.delete)

// Crear las rutas de Registro y Login

app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`))