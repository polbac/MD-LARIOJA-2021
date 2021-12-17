/* PUT VS PATCH */

/*   const object = {
    nombre: "",
    email: "",
  }

  PUT > update campo nombre ->
    object = {
      nombre: "actualizado",
      email: "",
    } 

  PATCH > update campo nombre ->
    object = {
      nombre: "actualizado",
    } */

/*   
    /usuarios/algo < GET | POST
  GET > OBTIENE (no es un metodo seguro)
  POST > ENVIA (metodo seguro) 
*/

/* const URL_TO_FETCH = 'http://example.com/movies.json'
fetch(URL_TO_FETCH)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))


  REQUEST > PEDIDO

  PEDIDO EN EL SERVER < EN TRABAJO. << PROMESA

  RESPONSE > DATA */

/*   try (intentar) {

  }
  catch (exepcion) {
    
  } */

/* -------------- FETCH JS ------------------ */

https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch


/* ------------- JSON SERVER ---------------- */
/*
GET    /{nombreDelArray} // obtiene info
POST   /{nombreDelArray} // creación
PUT    /{nombreDelArray}/${id} // update/actualizacion de valores
PATCH  /{nombreDelArray}/${id} // update/actualización de objeto completo
DELETE /{nombreDelArray}/${id} // borrado de un objeto del array
*/
/* Para correr un JSON SERVER */
/*
1. instalación: npm instal -g json-server
2. correrlo (4000 es el puerto): json-server -p 4000 --watch db.json << (debemos estar parados en la consola en el mismo directorio donde se encuentra el archivo db.json o creará un archivo nuevo)


/* GET */

fetch("http://localhost:4000/users")
  .then((res) => res.json())
  .then((data) => setUsers(data));

/* POST */

fetch("http://localhost:4000/users", {
  method: "POST",
  body: JSON.stringify({
    nombre,
    apellido,
    email,
    password,
    edad,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

/* PUT */

fetch(`http://localhost:4000/users/${id}`, {
  method: "POST",
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

/* PATCH */

fetch(`http://localhost:4000/users/${id}`, {
  method: "POST",
  body: JSON.stringify({
    nombre,
    apellido,
    email,
    password,
    edad,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

/* DELETE */

fetch(`http://localhost:4000/users/${id}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => console.log(json));
