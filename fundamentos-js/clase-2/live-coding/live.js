
var a = 10
const b = 35

const suma = a + b
const resta = a - b
const multiplicacion = a * b
const division = a / b // slash
const modulo = 3 % 2 // el resto de la división

a++ // le suma 1 al valor actual
a-- // le resta 1 al valor actual

a +=  2 // le suma 2 al valor actual
a -=  2 // le resta 2 al valor actual

const edad = 18

// const esMayorDeEdad = edad > 18 
// const esMayorDeEdad = edad >= 18 
//const esMenorDeEdad = edad < 18 
// const esMenorDeEdad = edad <= 18 
// const es18 = edad == 18 // comparacion simple
// const es18 = edad === 18 // compara el valor y el tipo de dato

// OR y AND

// Condicion 1  && Condicion 2 = chequea las dos
// Condicion 1  || Condicion 2 = chequea alguna de las dos

const v1 = 10
const v2 = 20

const conectorAND = (v1 > 1) && (v2 < 10)
                // true         false

const conectorOR = (v1 > 1) || (v2 < 10) 

// Condicionales

const n1 = 7
const n2 = 20

/* if (n1 >= 10 && n2 > 100) {
    console.log('es mayor a 10')
} */

if (n1 >= 10) {
    console.log('es mayor a 10')
} else if(n1 < 5) {
    console.log('es menor a 5')
} else {
    console.log('no cumple ninguna de las dos condiciones')
}

// switch

const diaSemana = 7

switch(diaSemana) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break        
    case 3:
        console.log('Miércoles')
        break        
    case 4:
        console.log('Jueves')
        break              
    case 5:
        console.log('Viernes')
        break 
    default:
        console.log('Finde')               
}