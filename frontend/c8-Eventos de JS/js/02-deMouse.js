/*
 * Eventos del mouse
*/

const navDom = document.querySelector('.navegacion');


// vamos a registrar el eventListener para el nav..

navDom.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    navDom.style.backgroundColor = 'white';
});

navDom.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    navDom.style.backgroundColor = 'transparent';
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