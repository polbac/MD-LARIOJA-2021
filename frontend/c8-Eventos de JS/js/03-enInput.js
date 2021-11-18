/**
 * Sobre un input escribir una función que se ejecute cuando se presione una tecla
 * y que muestre por consola el valor del input y la tecla presionada.
 * 
 * Podemos ir descomentando las lineas e ir escribiendo en el input para ver la respuesta
 * Recordemos volver a comentarlas para no tener una consola plagada de información ilegible, aprendiendo a utilizar el console.log a conciencia
 */

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', leerInput);

/**
 * event > Toda la información del evento
 * event.type > Tipo de evento
 * event.target > Elemento que generó el evento
 * event.target.value > Valor del input
 */
function leerInput(event) {
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);
    console.log(event.target.value)
}