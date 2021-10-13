# Introducción a Node

## Qué es Node

<img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/middlewares-en-nodejs-t1.jpg"
width="680" />


## Ejecución de archivo node

```
node nombre_archivo
```
El .js (extensión del archivo) no es necesario

## Inicialización de proyecto npm

```
npm init
```

## Scripts
Podemos definir dentro de package.json los scripts que querramos y luego los ejecutamos.
```
"scripts": {
    "start": "node app.js",
  },
```
El script `start` lo ejecutamos como:
```
npm run start
```