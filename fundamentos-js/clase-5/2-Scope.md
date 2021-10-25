### Scope
 _alcance_
 _Scope local & Scope global_
- Las variables van a estar disponibles únicamente dentro de su scope
- Veremos que al declarar una variable la misma se encontrará disponible unicamente en el bloque de codigo que fue declarada.
- Si necesitamos variables globales las declararemos en el bloque principal de codigo de nuestra aplicacion


```
const sumar(num1,num2) // global

const miFuncion = (parametro1, parametro2, tuNombre) => {
    // Scope de funcion
    function saludaMisNumeros(numero){
        console.log(`Hola ${tuNombre}, tu suma da: ${numero}`)
    }

    const miSuma = sumar(parametro1,parametro2) // invocamos una función global

    saludaMisNumeros(miSuma) // invocamos una función de scope local
}
```