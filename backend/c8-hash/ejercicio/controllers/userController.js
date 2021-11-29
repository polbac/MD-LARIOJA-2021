const fs = require('fs')
const { UserLoginSchema, UserRegisterSchema } = require('../schemas/user')
const usersFile = require('./users.json')

function register(req, res) {
    // TODO: guardear el password hasheado
    const { name, email, password } = req.body

    const validUser = userSchema.validate({ name, email, password })

    if (validUser.error) {
        res.send(validUser.error.details)
    } else {
        const newUser = {
            name, 
            email,
            password,
        }

        usersFile.push(newUser)

        fs.writeFileSync(__dirname + '/users.json', JSON.stringify(usersFile))
        res.send(newUser)
    }   
}

function login(req, res) {
    const { email, password } = req.body

    const validUser = userSchema.validate({ email, password })

    if (validUser.error) {
        res.send(validUser.error.details)
    } else {
        /* TODO: guardar en esta variable si encuentra el usuario en el archivo json
        a partir del email y el password */
        const userFound = false

        res.send(userFound)
    }
    
    
}


module.exports = {
    login,
    register
}