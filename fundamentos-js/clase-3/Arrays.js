// Creando Array Literal

let persona = {
  nombre: 'luisa',
  telefono: '319565776'
}

let persona2 = {
  nombre: 'martin',
  telefono: '3195657762'
}

let agendaSoloNumeros = [1, 2, 3, 4, 5]
let agendaConVariosTipos = [1, true, false, 'carlos', persona]
console.log(agendaSoloNumeros, agendaConVariosTipos)

// Creando Array Con el contructor

let creandoAgendaConElcontructor = new Array(2, 3, persona)
console.log(creandoAgendaConElcontructor)


let agenda = [persona, persona2]
console.log(agenda)
// Consulta
console.log(agendaSoloNumeros[0])

// Modifico
agendaSoloNumeros[0] = 9
console.log(agendaSoloNumeros[0])

// Modifico un objeto dentro de un array
console.log(agenda[0])
agenda[0].telefono = '611'
console.log(agenda[0])

delete agendaSoloNumeros[1]
console.log(agendaSoloNumeros)
console.log(agendaSoloNumeros.length)

let agendaSoloNumerosConOtroArray = [agendaSoloNumeros, [3, 6,4]]
console.log(agendaSoloNumerosConOtroArray)
console.log(agendaSoloNumerosConOtroArray[0][0])
