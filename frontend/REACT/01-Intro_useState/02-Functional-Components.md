## Componentes funcionales

    - Disponible desde React 16.8

[Docs](https://es.reactjs.org/docs/components-and-props.html)

    - Sintaxis: nuestros componentes funcionales serán funciones que retornen una sintaxis similar a la de las etiquetas de HTML llamada JSX.

[JSX](https://es.reactjs.org/docs/introducing-jsx.html#why-jsx)

```
    function Saludo() {
        return <h1>Hola!</h1>
    }

    export default Saludo
```

## Reutilización de componentes

    - Podemos reutilizar componentes para crear componentes que se repiten en nuestra aplicación.
    - Al ser funciones comprendemos que podemos recibir propiedades y utilizarlas

```

import Saludo from './Saludo'

    function SaludarAMuchos() {
        return (
            <div>
                <Saludo nombre="Juan" />
                <Saludo nombre="Pedro" />
                <Saludo nombre="Luis" />
            </div>
        )
    }
```

```
    function Saludo({nombre}) {
        return <h1>Hola ${nombre}!</h1>
    }

    export default Saludo

```

## Estilos

    - Para estilos CSS en linea, podemos utilizar la propiedad `style` en una etiqueta y con sintaxis de CSS en JS establecer los estilos requeridos

    - Dado que para Javascript la palabra clave `class` es reservada, podemos utilizar la palabra clave `className` para referirnos a una clase dentro de una etiqueta en el JSX.

```
    const inLineStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem'
    }

    const function App() {
        return (
            <div className="App__estilos" style={style}>
                <h1 className="App__estilos_h1">Hola mundo!</h1>
            </div>
        )
    }
```

# Planteos al momento de generar componentes

    - ¿Qué partes de la interfaz pueden ser componentes?
    - ¿Cuántos componentes se deben generar?
    - Si un componente se parece mucho a otro, ¿hay alguna manera de hacer un solo componente y definir su aspecto visual de alguna forma?
