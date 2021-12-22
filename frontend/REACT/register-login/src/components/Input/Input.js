import React, { useState } from "react";
import {
  validateLength,
  validateEmail,
  validatePassword,
} from "../../utils/validations";

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
      const error = validateLength(newValue, 1, 25);
      setError(error);
    } else if (type === "number") {
      const error = validateLength(newValue, 1, 99);
      setError(error);
    } else if (type === "email") {
      const error = validateEmail(newValue);
      setError(error);
    } else if (type === "password") {
      const error = validatePassword(newValue);
      setError(error);
    }
    !error.showError && handleChange(target.name, newValue);
  };

  return (
    <div style={inputStyle}>
      <label>{label}</label>
      <input type={type} onChange={handleOnChange} name={name} />
      {error.showError && <label>{error.msg}</label>}
    </div>
  );
};
