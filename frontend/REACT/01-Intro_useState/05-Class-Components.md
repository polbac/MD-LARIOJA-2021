## Componentes de clase

    - Los componentes de clase en React son una forma de crear componentes que se pueden reutilizar en diferentes partes de la aplicación. Tal como las clases de Javascript, los mismos tienen un método constructor que se ejecuta cuando se crea una instancia de la clase.
    - En dicho método declaramos las variables que querramos que el componente sostenga
    - En el método render() declaramos el código que se ejecutará cuando el componente sea renderizado.

    - Los componentes de clase son muy parecidos a los componentes funcionales.. encontraremos diferencias en las formas en las que ejecutamos acciones sobre los mismos, y comodidades sobre el manejo de estos

Sintaxis:

```

import React, { Component } from 'react';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    function handleClick({ sumar, restar}) {
        if (sumar) {
            this.setState({
                counter: this.state.counter + 1,
            });
        }
        if (restar) {
            this.setState({
                counter: this.state.counter - 1,
            });
        }
    }

    render() {
        return (
            <h1>
                {this.props.counter}
            </h1>

            <button onClick={handleClick({sumar: true})}>
                +
            </button>
            <button onClick={handleClick({restar: true})}>
                -
            </button>


            );
        }
}

```
