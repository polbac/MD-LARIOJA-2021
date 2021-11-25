const joi = require('joi')

const CountrySchema = joi.object({
    name: joi.string().min(3).required(),
    code: joi.string().length(3).required()
})

module.exports = CountrySchema