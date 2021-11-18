/*
 * Eventos del mouse
*/

const nav = document.querySelector('.navegacion');


// vamos a registrar el eventListener para el nav..

nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})


/**
 * Otros eventos
 *
 * click
 * mousemove
 * mouseover
 * mouseout
 * mouseenter
 * mouseleave
 * dblclick
 * contextmenu
 *
 * */