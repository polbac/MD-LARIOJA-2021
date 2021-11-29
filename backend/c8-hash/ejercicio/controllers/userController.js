const userSchema = require('../schemas/user')

function login(req, res) {
    res.send('ok')
}

function register(req, res) {
    const { name, email, password } = req.body

    const validUser = userSchema.validate({ name, email, password })

    if (validUser.error) {
        res.send(validUser.error.details)
    } else {
        res.send('ok')
    }

    
}

module.exports = {
    login,
    register
}