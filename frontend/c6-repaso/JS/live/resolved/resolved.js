const autosDisponibles = require("./cars");

/**
 * Ejercicio 1
 * Imprimir autos disponibles
 */
function imprimirAutos(array) {
    array.forEach((element) => {
        console.log(`**Tenemos disponible un ${element.modelo}`);
    });
}
console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~EJ 1~~~~~~~~~~~~~~~~**");
imprimirAutos(autosDisponibles);

/**
 * Ejercicio 2
 * Función que filtre autos por cantidad de puertas
 * Imprimir autos filtrados
 */
/* function filtrarAutos(array, puertas) {
    let nuevoArray = array.map((element) => {
        if (element.puertas == puertas) {
            return element;
        } else return null;
    });

    return nuevoArray.filter(element => element !== null);
} */
/* const autosPuertaGenaro = filtrarAutos(autosDisponibles, "4"); */

/*
imprimirAutos(autosPuertaGenaro);
 */

/**
 * Ejercicio 3 
 * Refactor funcion Ejercicio 2 para recibir la propiedad y condición por parámetro
 * Ejecutar condicion de punto 2 (puertas 4)
 * Ejecutar condición punto 3 (marca Ford)
 * Imprimir autos filtrados con leyenda
*/
function filtrarAutosPorPropiedad(array, propiedad, condicion) {
    let nuevoArray = array.map((element) => {
        if (element[propiedad] == condicion) {
            return element;
        } else return null;
    });

    return nuevoArray.filter(element => element !== null);
}
const autosPuertaGenaro = filtrarAutosPorPropiedad(autosDisponibles, "puertas", "4");
console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~EJ 2~~~~~~~~~~~~~~~~**");
imprimirAutos(autosPuertaGenaro);

const autosMarcaPuertaGenaro = filtrarAutosPorPropiedad(autosPuertaGenaro, "marca", "Ford");
console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~EJ 3~~~~~~~~~~~~~~~~**");
autosMarcaPuertaGenaro.forEach((auto) => {
    console.log(`**Tenemos disponibles un ${auto.marca} ${auto.modelo} que tiene ${auto.puertas} puertas`);
});

/**
 * Ejercicio 4
 * Función que compre un auto
 * Imprimir auto comprado con leyenda
 */
function comprarUnAuto(array, modelo) {
    return array.filter(auto => auto.modelo == modelo);
}
const autoComprado = comprarUnAuto(autosDisponibles, "Mustang")[0];
console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~EJ 4~~~~~~~~~~~~~~~~**");
console.log(`**Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`)

function venderUnAuto(array, modelo) {
    return array.filter(auto => auto.modelo != modelo);
}

/**
 * Ejercicio 5
 * Función que filtre auto comprado
 * Imprimir nuevo listado de autos disponibles
 */
const nuevoListado = venderUnAuto(autosDisponibles, "Mustang");
console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~EJ 5~~~~~~~~~~~~~~~~**");
imprimirAutos(nuevoListado);

console.log("**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**");
console.log("**~~~~~~~~~~~~~BONUS~~~~~~~~~~~~~~~**");

console.log(`**Definitivamente no tenemos más en stock un ${autoComprado.marca} ${autoComprado.modelo}`)