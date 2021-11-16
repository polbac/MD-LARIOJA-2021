# DOM \_ Document Object Model

<img src='./dom.jpg' width='400px'>

Documentacion: https://dom.spec.whatwg.org/

## Que es el Modelo de Objetos del Documento?

- Es una representación/modelo de un documento HTML que consiste en una estructura de arbol de nodos
- Es generado por el navegador
- Nos permite acceder dinámicamente al documento y crear/manipular nodos, o capturar eventos

## Como hacemos eso?

## Etiqueta script

    Agregaremos la etiqueta <script> a nuestro HTML.

    Sobre la misma podremos escribir dentro

        <script>
            ... code
        </script>

    O hacer uso del atributo src :

        <script src="miArchivo.js" />

    E importarla desde un archivo externo
    La misma puede ser agregada en el <head> o al final de nuestro archivo dentro del <body>

    NOTA: tendremos que contemplar que si esta agregada en el head, cargará nuestro script al iniciar la página, si el mismo es muy pesado, nuestra experiencia no será muy buena, en ese caso podemos agregar el atributo defer a la etiqueta para que cargue posteriormente a la carga de nuestro dom

    <script defer src="miArchivo.js" />

### Seleccion de nodo

- Para seleccionar algún elemento haremos uso de:

  El método _querySelector()_ del objeto _document_ que en sus propiedades recibe una clase, un id, o un elemento, la sintaxis para nombrar estos selectores es idéntica a la del css (.class || #id || element )

        document.querySelector('elementoASeleccionar')

  NOTA: Esta ejecución nos devolverá el primer elemento encontrado

  Utilizaremos para seleccionar todos los elementos:

        document.querySelectorAll('elementoASeleccionar')

  Esto nos devolverá una lista de nodos _NodeList_, no es un array, pero podremos loopear a traves de ellos.

  _NO PODREMOS_ utilizar metodos como push(), pop()

  A saber: hay otros selectores como `getElementById`, pero utilizaremos el querySelector que es más universal.

### Modificación de elementos

- Al tener un elemento del DOM podremos modificar sus atributos, por ejemplo:

        const myImage = document.querySelector('img')
        myImage.src = 'http://pathANuestraImagen'

- Podemos agregar atributos
  const myButton = document.querySelector('.myButtonClass')
  myButton.setAttribute("disabled")

- Podemos remover atributos

        myButton.removeAttribute("disabled")

- Podemos aplicar estilos, a saber: las propiedades serán escritas en camelCase

        myButton.style.color = "red";
        myButton.style.backgroundColor = "salmon";

- Podemos agregar y remover clases:

        myButton.classList.add('warning');
        myButton.classList.remove('warning');

  - Verificar si existen

    myButton.classList.contains('warning');

  - Agregar/remover una clase

    myButton.classList.toggle('warning')

- Podemos obtener el interior de un elemento HTML

        const miDiv = document.querySelector('div')
        const elContenidoDeUnDiv = miDiv.innerHTML

  - Modificarlo tambien !

    const elContenidoDeUnDiv = miDiv.innerHTML = "<div>hola<div>"

  - O solo sus texto y mantener sus estilos !!

    miDiv.innerText = 'nuevo string'

- Podemos tambien crear elementos !!!

        const body = document.querySelector('body');
        const miNuevoDiv = document.createElement("div");

        miNuevoDiv.style.position = 'absolute';
        miNuevoDiv.style.top = '250px';
        miNuevoDiv.style.right = '250px';
        miNuevoDiv.style.width = '250px';
        miNuevoDiv.style.height = '250px';
        miNuevoDiv.style.backgroundColor = 'black';

        body.appendChild(miNuevoDiv);

  - NOTA: deberemos anexarselos a algo

## DOCUMENTACION

etiqueta script: https://developer.mozilla.org/es/docs/Web/SVG/Element/script
querySelector: https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
querySelectorAll: https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
style: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
classList: https://developer.mozilla.org/es/docs/Web/API/Element/classList
innerHTML: https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
innerText: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
