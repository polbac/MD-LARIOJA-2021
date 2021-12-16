import React from "react";

function Componente({ children = "Soy el componente" }) {
  console.log("soy el componente");

  return <div>{children}</div>;
}

export default Componente;
