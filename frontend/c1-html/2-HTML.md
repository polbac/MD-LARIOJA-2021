# Estructura de un sitio web

<img width="350" src="https://media.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif" />

Tags, Estructura principal, partes del head y del body, live server, titulos, párrafo, imágen, hipervínculos internos y externos

## Introducción HTML

 - Hyper Text Markup Language
 - Será la estructura de nuestro sitio, estará constituida por bloques

## Etiquetas y atributos


Doctype -> nos indica el tipo de documento
```
    <!DOCTYPE html>
```

Sintaxis Etiqueta/atributo
```
    <html lang="en"> </html> 
    <meta charset="UTF-8" />

    <section id="pepito"> </section>
    <div class="pepito"> </div>
```
Estructura HTML
```
<!DOCTYPE html>
<html>
    <head>
        <meta ...>
        ...
        <link ...>
        <script ...> ... <script>
        <title>Titulo de nuestra pestaña en el navegador</title>
    </head>
    <body>
        <header>
            <!-- Contenido -->
        </header>
        <main>
            <!-- Contenido -->
        </main>
        <footer>
            <!-- Contenido -->
        </footer>
    </body>
</html> 
```
Comentarios -> documentación sobre el código
```
    <!-- Hola, soy un comentario -->
```

Veamos un ejemplo en código
---
---

## Dev Tool -> F12
## Live server -> https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
---
---


## Elementos de bloque & línea

    - Diferencia
    - <div/>
    - <span/>
    - block, inline, inline-block, none [display]

## Texto

    - meta charset
    - <hN/> - encabezados
    - <p/> - parrafos
    - <b/> & <strong /> & <i /> & <u>

## Listas

    - ordenadas <ol>
    - desordenadas <ul>
    - type
    - listas anidadas

## Hipervículos

    - <a>
        - href
        - target
        - #
        - mailto:
    - rutas
        - absolutas
            - <a href=”http://www.misitio.com/index.html”>Index</a>
        - relativas
            - <a href=”../index.html”>Index</a>

## Imágenes

    - <img />
    - src
    - alt
    - size

## Etiquetas semánticas

    - header
    - nav
    - main
    - section
    - article
    - overlay


## Elementos HTML Docs Mozilla https://developer.mozilla.org/es/docs/Web/HTML/Element