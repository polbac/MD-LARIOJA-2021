/**
 * Event bubling es cuando presionas en un evento, y el mismo se propaga por muchos otros dando resultados inesperados
 * Ir descomentando los event.stopPropagation() para ver el resultado esperado
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    //    e.stopPropagation();
    console.log('click card');
})
infoDiv.addEventListener('click', e => {
    //    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    //    e.stopPropagation();
    console.log('click titulo');
})


/*
 * Event delegation
 * Comentar el event bubbling y descomentar el event delegation
*/

/* cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if (e.target.classList.contains('info')) {
        console.log('click info');
    }
}); */

/**
 * Otra forma de evitar el bubbling es agregar un listener al padre y seleccionar al hijo donde queremos que se ejecute dicha acción
 * Comentar el event delegation y descomentar esta linea para ver el resultado
 */

/* cardDiv.addEventListener('click', titulo, e => {
    console.log('click titulo');
}) */