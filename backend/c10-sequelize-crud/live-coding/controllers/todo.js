const db = require('../models')

const todoController = {
    list: async (req, res) => {
        // Vamos a devolver el listado de todos
        try {
            const todos = await db.Todo.findAll()
            res.json(todos)
        } catch(error) {
            res.status(500).send('Ocurrió un error')
        }
        
    },
    detail: async (req, res) => {
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
        
    },
    create: async (req, res) => {
        // campos del body
        /* req.body.name
        req.body.completed */
        const { name, completed } = req.body
        const todo = await db.Todo.create({
            name,
            completed,
        })
        
        res.json(todo)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, completed } = req.body

        // 1. Buscar el todo y preguntar si existe
        // 2. Un vez que existe al modelo tenemos que updatearlo

        let todo = await db.Todo.findByPk(id)
        
        // si no lo encuentra devolvemos 404
        // si lo encuentra lo actualizamos

        if (todo) {
            // actualizamos
            todo = await todo.update({
                name,
                completed
            })
            res.send(todo)
        } else {
            res.status(404).send(`No encontramos el todo ${id}`)
        }

        
    },
    delete: async (req, res) => {
        // 1. Buscamos el elemento por el id
        const { id } = req.params
        const todo = await db.Todo.findByPk(id)

        if (todo) {
            // 2. Si existe lo borramos
            await todo.destroy()

            res.send(`Todo ${id} borrado correctamente`)
        } else {
            // 3. Si no existe devolvemos 404
            res.status(404).send(`No encontramos el todo ${id}`)
        }

    }
}

module.exports = todoController