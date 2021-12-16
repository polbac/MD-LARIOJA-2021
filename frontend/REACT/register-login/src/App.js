import React, { useState } from "react";
import FormContainer from "./containers/FormContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleShowForm = ({ target }) => {
    const { name } = target;
    if (name === "register-button") {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
    setShowForm(true);
  };

  return (
    <>
      <button name="register-button" onClick={handleShowForm}>
        Registrate
      </button>
      <button name="login-button" onClick={handleShowForm}>
        Login
      </button>
      {showForm && (
        <FormContainer isRegister={isRegister} handleClose={setShowForm} />
      )}
    </>
  );
}

export default App;
