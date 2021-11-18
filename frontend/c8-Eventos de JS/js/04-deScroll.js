/**
 * Es muy común que muchos sitios agreguen funcionalidad de que al dar scroll y llegar a ver un elemento este tenga alguna animación
 * Detectemos un elemento al dar scroll...
 * 
 * 1) Descomentar el console log para verificar la ejecución del listener de scroll
 * 2) Descomentar la funcionalidad de getBoundingClientRect() para verificar una forma de uso
 */
window.addEventListener('scroll', () => {
    console.log('scrolling...');


    const premiumDom = document.querySelector('.premium');

    /**
     * Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual
     * Docs: https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect
     */
        const ubicacion = premiumDom.getBoundingClientRect();
        console.log(ubicacion);
    
        if (ubicacion.top < 100) {
            console.log('Ya esta visible');
        } else {
            console.log('Aún no esta visible..')
        }
})