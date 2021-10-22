// Sumar el siguiente array
/* let array = [10, 20, 55, 321321, 312, 4043, 4341, 0, 312321, 1]
let sumaTotal = 0;
for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i]
}

console.log(sumaTotal) */

// Promedio del siguiente array
/* let array2 = [2, 5, 22, 43124, 32321, 12, 321312, 10, 1]
let sumaTotal = 0;

for (let i = 0; i < array2.length; i++) {
    sumaTotal += array2[i]
}

let promedio = sumaTotal / array2.length

console.log(promedio) */

////////////////////////////////////////////////////////////////
let personas = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },
]

let mayoresDeEdad = 0;
let menoresDeEdad = 0;

personas.forEach(function (persona) {
    if (persona.age >= 18) return mayoresDeEdad++
    else { return menoresDeEdad++ }
})

console.log("mayores de edad: ", mayoresDeEdad, "menores de edad", menoresDeEdad)