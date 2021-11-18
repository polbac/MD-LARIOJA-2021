/**
 * Acciones a ejecutarse cuando se cargue el contenido del DOM
 */
const imprimir = () => {
    console.log(2);
    // Aquí agregaríamos todo lo que queramos que se ejecute al cargar el contenido del dom
}
console.log(1)
document.addEventListener('DOMContentLoaded', imprimir)
console.log(3);