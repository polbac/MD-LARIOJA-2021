// Objetos Creación

// De forma literal
let persona = {
  altura: 1.70,
  edad: 28,
  nombre: 'Pepito'

}
persona.cabello = 'negro'
// altura = atributo
// 1.70 = valor

console.log(typeof(persona))
console.log(persona)

// Usando New Objeto.
let persona2 = new Object({
  altura: 1.6,
  edad: 23,
  nombre: 'Camila',
  ojos: {
    color: 'azul'
  },
  hablar: function () {
    console.log('bla bla bla bla bla bla bla blabla bla')
  }
})

persona2.edad = '25'
persona2['sexo'] = 'F'

console.log(typeof(persona2))
console.log(persona2)
console.log(`Color de ojos ${persona2.ojos.color}`)
console.log(`sexo ${persona2.sexo}`)

persona2.hablar()

const hablar2 = persona2.hablar
hablar2()



//Clonar 

// La referencia en memoria.
// viaja forma let persona3 = Object.assign(persona2)
let persona3 = {...persona2}
console.log(`Color de ojos ${persona2.nombre.color}`)
persona3.ojos.nombre = 'Andrea'
console.log(`Color de ojos ${persona2.nombre.color}`)
console.log(persona2)

