# POST

- Crear entidades
- JSON: parse() y stringify()

```
// configuramos en app configuracion para poder utilizar req.body
app.use(express.urlencoded());
app.use(express.json()); 
```


```
// utilizamos en el controller el body
(req, body) => {
    console.log(req. body)
}
```


```
// escribimos un archivo
// primero pasamos el JSON a formato String
const fs = require('fs')
const nuevaVersionDelArchivo = JSON.stringify(productsJSON)
fs.writeFileSync('./archivo.json', nuevaVersionDelArchivo)
```