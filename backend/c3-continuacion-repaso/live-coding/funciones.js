
// declarar funcion


/* sayHi('Franco', 'Rodriguez')
sayHi('Mili', 'Perez') */

// esta sintaxis hace que se vaya para arriba
function sayHi(name, lastName){
    console.log(`Buenas! ${name} ${lastName} como estas?`)
}

// esta sintaxis no permite su ejecución antes de su declaración
const sayBye = () => {
    console.log('Chau! nos vemos!')
}


//sayBye()

function register(email, password) {
    console.log(`Guardamos en la BD y creamos el usuario ${email}`)
    // aca ya estamos registrados
    login(email)
}

function login(email) {
    console.log(`Autentica y nos crea la sesión ${email}`)
}


//register('polbac@gmail.com', '12345')

// retornar
function suma(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

/* const resultadoSuma = suma(1, 2)
const resultadoResta = restar(1, 2) */

// callback
function operacion(cb, a, b) {
    return cb(a, b)
}

const resultadoSuma = operacion(suma, 10, 20)
const resultadoResta = operacion(restar, 10, 20)
console.log('resultadoSuma',resultadoSuma)

function registerUser(email, onRegister) {
    console.log(`Registrar usuario ${email} en BD (500ms)`)
    
    onRegister()    
}

registerUser('polbac@gmail.com', () => {
    console.log('Ya nos registramos')
})