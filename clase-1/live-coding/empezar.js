
/* 
Tipo de Dato: Number
*/
//console.log(100) // entero
//console.log(20.5) // con decimal

/* 
Tipo de Dato: String (cadena de caracteres)
*/

//console.log('Hola mundo!')
//console.log("Hola mundo! 2")

/* 
Tipo de Dato: Boolean (true / false)
*/
// console.log(true)
/* console.log(false) */

/* 
Tipo de Dato: Date
*/
// console.log(new Date())

// Declaración de variables

/* las constantes no puede variar
luego de su declaración */
const firstName = 'Juana'
// name = 'Juan' // nos da error

let lastName = 'M' // camelCase
//console.log(lastName)
// let last_name = 'M' // snake_case
// let LastName = 'M' // PascalCase
lastName = 'Rodriguez'
//console.log(lastName)

var age = 20
//console.log(age)

// age = "Hola"
//console.log(age)

// Concatenación
// +
// `${}`

// const nameCompleted = firstName + " " + lastName + " tiene " + age + " años"
const nameCompleted = `${firstName} ${lastName} tiene ${age} años`

console.log(nameCompleted)
