const joi = require('joi')

const RegisterSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().email().required(),
})

module.exports = RegisterSchema