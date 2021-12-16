import React, { useState } from "react";

export const Input = ({ inputField, handleChange }) => {
  const errorInitialValue = {
    showError: false,
    msg: "",
  };
  const [error, setError] = useState(errorInitialValue);
  const { label, type, name } = inputField;

  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5px",
  };

  const handleOnChange = ({ target }) => {
    const newValue = target.value;
    if (type === "text") {
      if (newValue === "" || newValue.length > 10) {
        setError({
          showError: true,
          msg: "Llena más texto",
        });
      } else {
        setError(errorInitialValue);
        handleChange(target.name, newValue);
      }
    } else if (type === "number") {
      newValue > 0
        ? setError(errorInitialValue)
        : setError({
            showError: true,
            msg: "Llena más texto",
          });
    } else if (type === "email") {
      if (newValue.includes("@")) {
        const valueArray = newValue.split("@");
        // if sobre un string vacio ("") === falso , if sobre un string con cosas ("asdasd") === verdadero
        if (valueArray[0]) {
          setError(errorInitialValue);
        } else {
          setError({
            showError: true,
            msg: "Llena más texto",
          });
        }
        // doble signo de exclamación > obtengo booleano de el string, si es un string vacio ("") === falso, si tiene data ("asdasd") === verdadero
        if (!!valueArray[1]) {
          if (valueArray.includes(".")) {
            // TODO: revisar porque no se incluye el punto
            const newArray = valueArray.split(".");
            if (!!newArray[1]) {
              setError(errorInitialValue);
            } else {
              setError({
                showError: true,
                msg: "Llena más texto",
              });
            }
          }
          setError(errorInitialValue);
        } else {
          setError({
            showError: true,
            msg: "Llena más texto",
          });
        }
      } else {
        setError({
          showError: true,
          msg: "Llena más texto",
        });
      }
    } else if (type === "password") {
      if (!!newValue && newValue.length < 8) {
        setError(errorInitialValue);
      } else {
        setError({
          showError: true,
          msg: "Llena más texto",
        });
      }
    }
  };

  return (
    <div style={inputStyle}>
      <label>{label}</label>
      <input type={type} onChange={handleOnChange} name={name} />
      {error.showError && <label>{error.msg}</label>}
    </div>
  );
};
