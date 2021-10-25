// Declarada

/* function suma(a, b) {
    return a + b;
}

console.log("esta es mi suma >>>", suma(10, 5))
 */

/* const suma = function (a, b) {
    return a + b;
}

console.log(">>>>", suma(10, 5)) */

// Arrow function

/* let array = [
    {
        nombre: "pepe"
    },
    {
        nombre: "javier"
    },
]

const saludarPersonas = (arrayDePersonas) => {
    array.forEach(persona => {
        console.log(
            "Hola ", persona.nombre
        )
    })
}

saludarPersonas(array) */

/* const holaMundo = () => console.log("Hola mundo!")

holaMundo() */

//// SCOPE (ALCANCE)

/* let arrayDePersonas = [
    {
        nombre: "pepe"
    },
    {
        nombre: "javier"
    },
]

const sumarSaludos = () => {
    let contador = 0;
    arrayDePersonas.forEach(() => {
        let otraPersona = "ezequiel"
        contador++
    })
    console.log(contador)
}

sumarSaludos() */

////////---- funcion de prueba

const verificarPositivo = (numero) => {
    if (numero > 0) {
        return numero
    } else {
        return -numero
    }
}

const miResolucion = (numeroEntero) => {
    let contador = 0;
    let miNuevoNumero = verificarPositivo(numeroEntero)
    let miNumeroEnBinario = miNuevoNumero.toString(2)

    let miArrayDeNumeroBinario = miNumeroEnBinario.split("")
    console.log(miArrayDeNumeroBinario)
    console.log(miNumeroEnBinario)

    miArrayDeNumeroBinario.forEach(numero => {
        if (numero == 1) {
            contador++
        }
    })

    /*     for (let i = 0; i < miArrayDeNumeroBinario.length; i++) {
            if (miArrayDeNumeroBinario[i] == 1) {
                contador++
            }
        } */

    /*     for (elemento of miArrayDeNumeroBinario) {
            if (elemento == 1) {
                contador++
            }
        } */

    return contador
}

console.log(miResolucion(1234))