# Métodos array

## forEach (hacer acciones con un array)

```
array.forEach(function (element) {
    console.log("Este es mi elemento: ", element);
})
```

---

## map (retornar un nuevo array)

```
const doble = array.map( function(element) { 
    return element * 2
 })
```

## filter

```
const pairs = array.filter(function(element) { 
    return element % 2 === 0
 })
```


## find

```
const elementId1 = miArray.find(function (element) {
    return element.id === 1;
});
```

