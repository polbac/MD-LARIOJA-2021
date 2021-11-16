## Javascript

    Tipos de datos:
        - Number
        - String
        - Boolean
        - Null
        - Undefined
        - Object
        - Function
        - Array

    Condicionales e iteraciones:
        - if
        - else if
        - else
        - switch
            case n°:
                action
            break;
        - for
        - for of
        - forEach

    Metodos de arrays:
        - push()
        - pop()
        - splice()
            array.splice(posicion, cantidadDeElementosAReemplazar, elementoAInsertar)
        - slice()
            const nuevoArray = array.slice(posicionInicial, posicionFinal)
        - indexOf()
            array.indexOf(elemento, arrancandoDesdeElIndice*) >> * es opcional, si no se especifica arranca desde el índice 0
            Utiliza comparador de igualdad estricta (===)
        - lastIndexOf()
            array.lastIndexOf(elemento)
        - forEach()
        - map()
        - filter()
        - some()
            array.some(elemento => condicional) >> devuelve true si algun elemento cumple la condición
        - concat()
            array.concat(array2, array3, ...) >> devuelve un nuevo array con los elementos de los otros arrays
    Metodos de strings:
        - concat()
            Igual que array.concat()
        - indexOf()
            Igual que array.indexOf()
        - split()
            string.split(separadorAUtilizarEntreComillas, cantidadDeStringsDevueltos)
        - toLowerCase()
            string.toLowerCase() devuelve el valor en minúscula
        - toUpperCase()
            string.toUpperCase() devuelve el valor en mayuscula
        - trim()
            string.trim() devuelve el string pasado sin espacios en blanco antes y despues
                .trimStart() solo antes
                .trimEnd() solo despues

    Declaracion de funciones:
        - declarada > function nombreFuncion(parametros) {
            codigo
        }
        - anonima > function(parametros) {
            codigo
        }
        - expresada > const nombreFuncion = function(parametros) {
            codigo
        }
        - arrow function > const nombreFuncion = (parametros) => {
            codigo
        }
