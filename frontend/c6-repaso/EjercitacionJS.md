# Ejercitacion javascript

```
    const autosDisponibles = [
        {marca: 'Chevrolet', modelo: 'Camaro', puertas: 2},
        {marca: 'Chevrolet', modelo: 'Cruze', puertas: 4},
        {marca: 'Ford', modelo: 'Fiesta', puertas: 4},
        {marca: 'Ford', modelo: 'Focus', puertas: 4},
        {marca: 'Ford', modelo: 'Mustang', puertas: 4},
        {marca: 'Ford', modelo: 'Fusion', puertas: 4},
        {marca: 'Ford', modelo: 'Ka', puertas: 2},
        {marca: 'Audi', modelo: 'A4', puertas: 5},
        {marca: 'Audi', modelo: 'A5', puertas: 5},
        {marca: 'Audi', modelo: 'A6', puertas: 5},
        {marca: 'Audi', modelo: 'A7', puertas: 5},
        {marca: 'Audi', modelo: 'A8', puertas: 5},
        {marca: 'Audi', modelo: 'Q5', puertas: 5},
        {marca: 'BMW', modelo: 'Serie 3', puertas: 5},
        {marca: 'BMW', modelo: 'Serie 5', puertas: 5},
        {marca: 'BMW', modelo: 'Serie 7', puertas: 5},
        {marca: 'Mercedes Benz', modelo: 'Clase A', puertas: 5},
        {marca: 'Mercedes Benz', modelo: 'Clase C', puertas: 5},
        {marca: 'Mercedes Benz', modelo: 'Clase E', puertas: 5},
    ];
```

```
    1) Jorge tiene una consecionaria de autos, y desea mostrar en su página web el listado de autos que tiene disponibles.
        - Crear una función que tome un listado de autos e imprima por consola el modelo y la marca de *cada auto* con la leyenda `Tenemos disponible un ${modelo}`. Utilizar el método `for` o `forEach` para recorrer el array.
        - Ejecutar dicha función pasando por parámetros el array autosDisponibles.
```

```
    2) Un día entro Genaro a comprar un auto, y le solicito a Jorge que le muestre que autos tiene disponibles que sean de 4 o menos puertas
        -Crear una función que reciba por parametros
            a) el listado de autos disponibles
            b) la cantidad de puertas requeridas por parámetros.
        -Verificar que vehículos cumplen la condición de puertas requeridas.
        -Ejecutar la función, devolviendo el resultado a una nueva lista llamada autosPuertaGenaro. Utilizaremos el método map() para recorrer el array de autosDisponibles y devolver una nueva lista con los autos que cumplen la condición.
        -Imprimir autosPuertaGenaro utilizando la funcion del punto (1).
```

```
    3) A Genaro le gustaron todos los autos de Ford, y le pidió a Jorge que le muestre los autos de Ford que tiene en su listado.
        - Refactorizar la función del punto dos para que reciba por parametros:
            a) un array de autos
            b) una propiedad a comparar (por ejemplo marca, puerta, modelo, etc.)
            c) una condición a cumplir (cantidad de puertas, marca o modelo). NOTA: Se puede usar el operador ==, no es obligatorio utilizar ===.
        - Ingresar el listado de autos que cumplen la condición N°2 (autosPuertaGenaro) y devolver un nuevo listado llamado autosMarcaPuertaGenaro.
        - Imprimir por consola el listado de autos con la leyenda `Tenemos disponibles los autos ${marca} ${modelo} que tienen ${puertas} puertas`.
```

```
    4) Genaro decidió comprar un Mustang
        - Tomar el listado de autos que cumplen la condición N°3 (autosMarcaPuertaGenaro) y devolver un objeto llamado autoComprado. Utilizaremos el método filter sobre la propiedad modelo. Es obligatorio utilizar una comparación estricta (===) para que el objeto sea el que cumpla la condición.
        - Imprimir por pantalla el objeto autoComprado, con la leyenda `Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`.
```

```
    5) Jorge necesita tener su listado actualizado.
        - Crear una función que reciba el listado de autos original (autosDisponibles) y filtre el autoComprado que compro Genaro, devolviendo un nuevo array sin ese auto. Podemos utilizar el método que querramos.
        - Imprimir en pantalla el nuevo listado de autos utilizando la función del punto (1).
```
