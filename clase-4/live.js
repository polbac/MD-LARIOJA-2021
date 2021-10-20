/* While */
/* let contador = 0;

while (contador < 10) {
    console.log("este es mi contador >", contador)
    contador++
} */

/* For */
/* for (let i = 0; i < 10; i++) {
    console.log("este es mi contador >", i)
} */

/* For In */
/* let persona = { nombre: "John", apellido: "Doe" };
let contador = 0;
for (propiedadDePersona in persona) {
    contador++
    console.log(`Propiedad n° ${contador}> ${propiedadDePersona}:${persona[propiedadDePersona]}`);
} */

/* For Of */
/* let personas = [
    { nombre: "John", apellido: "Doe" },
    { nombre: "Esteban", apellido: "Quito" },
    { nombre: "John", apellido: "Bonachon" },
]
let contador = 0
for (nombreDeVariableAUtilizar of personas) {
    contador++
    if (nombreDeVariableAUtilizar.nombre === "John") {
        nombreDeVariableAUtilizar.nombre = "Pol"
    }
    console.log("Vuelta nro", contador, nombreDeVariableAUtilizar)
} */

//------------------------------------------------


/* METODOS PARA ITERAR ARRAYS */

let array = [
    1,
    "soy una cadena",
    4,
    { nombre: "John", apellido: "Doe" }
]

/* forEach */
/* let variableA = array.forEach(function (elementoARecorrer) {
    if (typeof (elementoARecorrer) == "object") {
        console.log(`${elementoARecorrer.nombre} ${elementoARecorrer.apellido}`)
    }
})
console.log(variableA) */

/* termina forEach */

/* map */
/* let miArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
console.log("Mi lista: ", miArray)
let nuevoArray = miArray.map(function (element, index) {
    console.log(element, "index", index)
    return element.id = index;
});
console.log("Mi nueva lista: ", nuevoArray) */

/* termina map */


/* Find */

/* let variableB = array.find(function (elementoARecorrer) {
    return typeof (elementoARecorrer) == "number"
})

console.log(variableB) */

/* termina find */


/* Filter */
/* let variableC = array.filter(function (elemento) {
    return typeof (elemento) === "number"
})

console.log(variableC)

let miArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
let resultado = miArray.filter(function (element) {
    return element.id !== 2;
});
console.log("Resultado: ", resultado) */