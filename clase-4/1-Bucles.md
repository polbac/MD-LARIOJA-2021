## while

- _while (condición) { código a ejecutar }_

```
let miContador = 0;

while ( miContador < 7 ) {
  console.log("Voy por el número", miContador);
  miContador++;
}
```

---

## for

- _for (declaración; condición; incrementador) { código a ejecutar }_

```
for ( let miContador = 0; miContador < 7 ; miContador++ ) {
  console.log("Voy por el número", miContador);
}
```

---

## for in

- Recorre las propiedades dentro de un objeto
- _for (propiedad in objeto) { código a ejecutar }_

```
let persona = { nombre: "John", apellido: "Doe" };
let contador = 0;
for (propiedadDePersona in persona) {
    contador++
    console.log(`Propiedad n° ${contador}> ${propiedadDePersona}:${persona[propiedadDePersona]}`);
}
```

---

## for of

- Recorre objetos iterables
- _for (nombreDeVariableAUtilizar of objeto) { código a ejecutar }_

```
let personas = [
    { nombre: "John", apellido: "Doe" },
    { nombre: "Esteban", apellido: "Quito" },
    { nombre: "John", apellido: "Bonachon" },
]
let contador = 0
for (nombreDeVariableAUtilizar of personas) {
    contador++
    console.log("Vuelta nro", contador, nombreDeVariableAUtilizar)
}
```
