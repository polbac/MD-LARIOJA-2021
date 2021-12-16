import React from "react";
import Saludo from "../Saludo/Saludo";

import Componente from "../Componente/Componente";

function SaludarAMuchos() {
  return (
    <>
      <Saludo nombre={"Juan"} apellido={"Perez"} edad={"32"} />
      <Componente />
      <Saludo nombre={"Roque"} apellido={"Perez"} edad={"132"} />
    </>
  );
}

export default SaludarAMuchos;
