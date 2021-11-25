const CountrySchema = require('../schemas/country')

function createCountry(req, res) {
    const name = req.body.name
    const code = req.body.code

    const country = {
        name: name,
        code: code,
    }

    const countryValid = CountrySchema.validate(country)
    /* 
    countryValid.error -> tiene un array con errores si encuentra un error en alguno de los campos
    countryValid.error -> es undefined si no encuentra ningun error
    */

    if (countryValid.error) {
        res.status(400).send(countryValid.error.details)
        return
    }
    

    // el codigo para agregar el country al archivo json

    res.send('País guardado correctamente')
}

module.exports = {
    createCountry,
}