const joi = require('joi')

const UserLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

const UserRegisterSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

module.exports = {
    UserLoginSchema,
    UserRegisterSchema,
}