const bcrypt = require('bcryptjs')
const fs = require('fs')
const userJSON = require('./users.json')
const salt = bcrypt.genSaltSync(10);

const RegisterSchema = require('../validators/registerValidator')

function register(req, res) {
    // Vamos a levantar del body los 3 datos que nos interesan
    /* req.body.email
    req.body.password
    req.body.name */
    const { email, password, name } = req.body

    const user = {
        email: email, 
        password: password, 
        name: name,
    }


    const validRegister = RegisterSchema.validate(user)

    if (validRegister.error) {
        // vamos a devolver los errores
        res.send(validRegister.error.details)
    } else {
        // 1. vamos a hashear el password
        const hashPassword = bcrypt.hashSync(user.password, salt)

        // 2. Pisar el password del usuario por el hasheado
        user.password = hashPassword
        
        // 3. Agregarlo al array
        userJSON.push(user)

        // 4. guarduar el usuario en el json
        fs.writeFileSync(__dirname + '/users.json', JSON.stringify(userJSON))

        res.send(user)
    }
}

function login(req, res) {
    const { email, password } = req.body

    const findUser = userJSON.find((user) => {
        const userEmail = user.email
        const userPassword = user.password
        
        const matchEmail = email === userEmail 
        const matchPassword = bcrypt.compareSync(password, userPassword)
        
        return matchEmail && matchPassword
    })

    if (findUser) {
        res.send('ok')
    } else {
        res.send('not_found')
    }
}

module.exports = {
    register,
    login,
}