import React, { useState } from "react";
import Titulo from "./components/Titulo/Titulo";
import SaludarAMuchos from "./components/SaludarAMuchos/SaludarAMuchos";
import { Counter } from "./components/Counter";

import Componente from "./components/Componente/Componente";

function App() {
  const [algoAMostrar, setAlgoAMostrar] = useState(false);

  return (
    <>
      <Titulo title={"Hola Mundo"} />
      <Titulo title={"Soy un link"} isLink={true} />
      <SaludarAMuchos />
      <Counter />
      <Componente> SOY EL CONTENIDO </Componente>
      <button onClick={() => setAlgoAMostrar(true)}>Mostrame</button>
      {algoAMostrar ? (
        <>
          <div>Mostrandome</div>
          <input type="text" />
          <button onClick={() => setAlgoAMostrar(false)}>Ocultame</button>
        </>
      ) : (
        <div>No se esta mostrando</div>
      )}
      <Counter />
    </>
  );
}

export default App;
