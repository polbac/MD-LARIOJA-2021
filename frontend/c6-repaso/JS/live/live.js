/* Tipos de datos */

const numero = 0
const cadenaTexto = ""
const booleanos = true | false
const nulo = null
const indefinido = undefined
const objetos = { key: value, propiedad: valor }
const arrays = [numero, cadenaTexto, booleanos, nulo, indefinido, objetos]

/* Condicionales */

if (condicion) {

}

if (condicionA) {

} else if (condicionB) {

} else { }

if (cond) { }
else {

}

if (condicion) console.log(algo)
// Guard clause

if (name === "Sebastian") {
    /* codigo */
} else {
    return
}

if (name !== "Sebastian") return

/* --- */

switch (condicion) {
    case "amarillo":
        { }
        break;
    case "red":
        { }
        break;
    case "pepe":
        { }
        break;
    case 2:
        { }
        break;
}

/* --- */

/* Iteradores */

for (let i = 0; i < 10 /* condicion *//*  "palabra" !== array[i]  */; i++) {
    /* codigo a ejecutar */
}

/* for of  */

for (elementoDeNombreQueLeQuieroPoner of elementoARecorrer) {
    /* codigo a ejecutar */
}

/* Metodos de arrays */

let array = [0, "ss", 12341, 123]
/* -- push */
array.push(5)

console.log(array)

/* -- pop */
const elementoSacado = array.pop()
console.log("elementoSacado", elementoSacado)

console.log(array)


/* -- splice */

/* array.splice(posicion, cantidadDeElementosAReemplazar, elementoAInsertar) */

let array = [0, "ss", 12341, 123]

array.splice(1, 0, "elementoAInsertar")

console.log(array)

/* const nuevoArray = array.slice(posicionInicial, posicionFinal) */

let array = [0, "ss", 12341, 123]

const nuevoArray = array.slice(1, 3)

console.log(nuevoArray)

/* index of */

/* array.indexOf(elemento, arrancandoDesdeElIndice*) */

let array = [0, "ss", 12341, "ss", 123, "ss"]

array.indexOf("ss", 2)

console.log(array[1])

/** last index of */

/* array.lastIndexOf(elemento) */

let array = [0, "ss", 12341, "ss", 123, "ss"]

array.lastIndexOf("ss")

/**/
const algo = array.forEach(elemento => {
    /* bloque de codigo a ejecutar  */
    console.log("hola ", elemento)
})

console.log(algo) >> undefined

/* -- */

const algoMap = array.map(elemento => {
    /* bloque de codigo a ejecutar  */
    return elemento.puertas === 4
})

console.log(algoMap) /*  nuevo array */


/* -- */

array.filter(el => el.id !== 2)

/* -- */

array.some(function (a) { /* condicion  */ }) /* devuelve true si algun elemento cumple la condición */

/* -- */

/* concat() */
array.concat(array2, array3) /* devuelve un nuevo array con los elementos de los otros arrays */


/* --------------------- METODOS STRINGS ------------------- */
let cadena = "string - cadena de texto"

/*     cadena.concat(cadena2, cadena3)

    cadena.indexOf("n", 7) */

/*     cadena.split(" ") */

/* cadena.toLowerCase()
cadena.toUpperCase() */

let cadena = "       string - cadena de texto       "
console.log("original >>", cadena, "<<")
console.log("trim", cadena.trim(), "<<")
console.log(cadena.trimStart())
console.log(cadena.trimEnd())

/* comparaciones */

let noStrict = 5 == "5"
console.log(noStrict)

let strict = 5 === "5"
console.log(strict)



/** Declaracion de funciones */
let cadena = "       string - cadena de texto       "

const recortarElFinalDeMiString = (parametroCadenaAlgo) => {
    /* codigo a ejecutar */
    return parametroCadenaAlgo.trimEnd()
}

const algoMas = recortarElFinalDeMiString(cadena)
recortarElFinalDeMiString("asdlkjasdlkjads        asdas     ")

const nombreDeMiFuncion = function (parametro) { }

const arrowFunction = () => {
    /* codigo a ejecutar */
}

const arrowFunction2 = () => {
    console.log("hola")
}