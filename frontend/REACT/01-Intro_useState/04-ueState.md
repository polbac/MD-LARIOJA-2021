## useState : hook de estado

    - Por lo visto hasta el momento podemos tener componentes que reciban propiedades y las rendericen, los mismos cambiarán cuando cambien sus propiedades.. pero y si necesitamos que cambién por acciones del usuario? Y si necesitamos sostener en cada componente información?
    - En React podemos usar el hook useState para esto, el cual nos permite mantener un estado en cada componente.
    - Un estado es una variable que se mantiene en cada componente, y se puede cambiar a través de una función.
    - El hook useState nos permite crear un estado, y también una función que se ejecuta cuando el estado cambia.

Sintaxis:

```
import React, { useState } from 'react';
.....
const [state, setState] = useState(initialState);
```

Ejemplo:

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
