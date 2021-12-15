const express = require('express')
const app = express()
const db = require('./models')
const PORT = 3000

// configuramos express para poder trabajar con el body del request
app.use(express.urlencoded());
app.use(express.json()); 


app.get('/todo', async (req, res) => {
    // Vamos a devolver el listado de todos
    try {
        const todos = await db.Todo.findAll()
        res.json(todos)
    } catch(error) {
        res.status(500).send('Ocurrió un error')
    }
    
})

app.get('/todo/:id', async (req, res) => {
    /* Vamos a devolver un todo a partir del id que este como 
    parametro en la url */
    try {
        const todoId = req.params.id
        const todo = await db.Todo.findByPk(todoId)

        if (todo) {
            // va a entrar si tiene algo la variable
            res.json(todo)
        } else {
            // va a entrar si no tiene nada (null, undefined)
            res.status(404).send("ups! no encontramos la tarea")
        }

        

    } catch(error) {
        res.status(500).send('Ocurrió un error')
    }
    
})

app.post('/todo', (req, res) => {
    // Vamos a crear un nuevo todo
    res.send('Crear un nuevo todo y devolverlo')
})

app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`))