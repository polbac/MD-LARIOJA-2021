const { sumar, dividir, multiplicar, restar } = require('./util/operaciones_matematicas')

/* 
const sumar = operaciones.sumar
const restar = operaciones.restar
const multiplicar = operaciones.multiplicar
const dividir = operaciones.dividir */

const resultadoSuma = sumar(10, 10)
const resultadoResta = restar(10, 10)
const resultadoMultiplicacion = multiplicar(10, 10)
const resultadoDivision = dividir(10, 10)

console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoMultiplicacion)
console.log(resultadoDivision)