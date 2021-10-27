function saludar(nombre, apellido) {
    console.log(`${nombre} ${apellido}`)
}

function despedir(nombre) {
    console.log(`Chau ${nombre}`)
}

const PALABRA_DESPIDO = 'chau'
const PALABRA_SALUDO = 'hola'

/* module.exports = {
    saludar,
    despedir,
}
 */
module.exports = {
    saludar: saludar,
    despedir: despedir,
    PALABRA_DESPIDO: PALABRA_DESPIDO,
    PALABRA_SALUDO: PALABRA_SALUDO,
}