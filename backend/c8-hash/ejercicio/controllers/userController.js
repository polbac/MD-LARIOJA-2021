const fs = require('fs')
const usersFile = require('./users.json')

function register(req, res) {
    // TODO: guardear el password hasheado
    // [POST] http://localhost:3000/user/register
    const { name, email, password } = req.body

    const newUser = {
        name, 
        email,
        password,
    }

    usersFile.push(newUser)

    fs.writeFileSync(__dirname + '/users.json', JSON.stringify(usersFile))
    res.send(newUser)
    
}

function login(req, res) {
    const { email, password } = req.body
    // [POST] http://localhost:3000/user/login
    
    /* TODO: guardar en esta variable si encuentra el usuario en el archivo json
    a partir del email y el password */
    const userFound = false

    res.send(userFound)
    
    
}


module.exports = {
    login,
    register
}