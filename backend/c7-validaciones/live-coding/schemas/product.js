const joi = require('joi')

const ProductSchema = joi.object({
    title: joi.string().min(4).max(25).required(),
    description: joi.string().min(25).max(150).required(),
})

module.exports = ProductSchema