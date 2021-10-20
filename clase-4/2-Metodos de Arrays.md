## forEach

- Recorre un array permitiendo realizar acciones por cada elemento de la lista
- _array.forEach( function(unElementoDelArray) => { código a ejecutar })_

```
let miArray = [0, 1, 2, 3, 4, 5]
miArray.forEach(function (element) {
    console.log("Este es mi elemento: ", element);
})
```

---

## map

- Similar al forEach pero devuelve un nuevo array
- _array.map( function(unElementoDelArray) => { código a ejecutar })_

```
let miArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
console.log("Mi lista: ", miArray)
let nuevoArray = miArray.map(function (element, index) {
    console.log(element, "index", index)
    return element.id = index;
});
console.log("Mi nueva lista: ", nuevoArray)
```

---

## find

- _array.find( function(unElementoDelArray) => { condición para encontrar un elemento })_
- devuelve un elemento que cumpla la condición

```
let miArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
let resultado = miArray.find(function (element) {
    return element.id === 1;
});
console.log("Resultado: ", resultado)
```

## filter

- _array.filter( function(unElementoDelArray) => { condición para filtrar listado })_
- devuelve un nuevo array con los elementos que cumplan la condición filtrada

```
let miArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
let resultado = miArray.filter(function (element) {
    return element.id !== 2;
});
console.log("Resultado: ", resultado)
```
