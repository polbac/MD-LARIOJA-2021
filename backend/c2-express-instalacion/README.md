# Instalación y configuración básica de Express

<img src="https://media.giphy.com/media/IwTWTsUzmIicM/giphy.gif" width="300" />

## Instalacion

```
npm install express
```

## Iniciar express

```
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hola mundo!')
})
app.listen(3000, () => {
    console.log('servicor iniciado')
})
```

## Rutas parametrizadas

```
app.get('/blog/:idBlog', (req, res) => {

    res.send('Blog id ' + req.params.idBlog)
})
```

## Bonus: nodemon

https://www.npmjs.com/package/nodemon

```
npm install -g nodemon

nodemon [your node app]

```