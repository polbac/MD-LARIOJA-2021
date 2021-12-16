import React from "react";

function Saludo({ nombre, apellido, edad }) {
  let hola = "Hola";

  const inLineStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
  };

  return (
    <h1 style={inLineStyle} className="saludo__h1">
      {hola} {nombre} {apellido}, de edad {edad}!
    </h1>
  );
}

export default Saludo;
