# Storage en el browser

<img src="https://media.giphy.com/media/ZFuwwNQkNnI7Af9Lae/giphy.gif" width="350" />

## localStorage

```
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
```

## sessionStorage (solo vive dentro de la tab del browser)

```
sessionStorage.setItem(key, value)
sessionStorage.getItem(key)
sessionStorage.removeItem(key)
sessionStorage.clear()
```

## JSON

JSON (JS Object Notation) >> Formato ligero

Sintaxis

    {
        “key”: “value”
    }

    > Todo en string < También acepta NUMBER y BOOLEAN

Para transformar un objeto a JSON > : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

    JSON.stringify(value[, replacer[, space]])

    value: mi objeto
    replacer: una función que altere el comportamiento (que seleccione algunas de las cosas del objeto que le paso para convertir el JSON), pongamos NULL
    space: nos sirve para hacer más legible nuestro archivo de salida, agreguemos un string de espacio > “ “ < o un numero (1)

    const myObjectJSON = JSON.stringify(object, null, “”)

Para devolver el formato original de un JSON > : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

    const myObject = JSON.parse(myObjectJson)
    JSON.parse(text[, reviver])

    text: objeto JSON a transformar
    reviver: no entremos ahi
