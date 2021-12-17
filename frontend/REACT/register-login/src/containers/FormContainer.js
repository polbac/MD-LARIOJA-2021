import React, { useState, useEffect } from "react";
import { Form } from "../components/layouts/Form";
import { FormTitle } from "../components/FormTitle";
import { Input } from "../components/Input";

const REGISTER_LABELS = [
  {
    label: "Ingresa tu nombre",
    type: "text",
    name: "nombre",
  },
  {
    label: "Ingresa tu apellido",
    type: "text",
    name: "apellido",
  },
  {
    label: "Ingresa tu email",
    type: "email",
    name: "email",
  },
  {
    label: "Ingresa tu password",
    type: "password",
    name: "password",
  },
  {
    label: "Ingresa tu edad",
    type: "number",
    name: "edad",
  },
];

const LOGIN_LABELS = [
  {
    label: "Ingresa tu email",
    type: "email",
    name: "email",
  },
  {
    label: "Ingresa tu password",
    type: "password",
    name: "password",
  },
];

const registerFormInitialValue = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  edad: "",
};

const loginFormInitialValue = {
  email: "",
  password: "",
};

export default function FormContainer({ isRegister, handleClose }) {

  const [optionsToMap, setOptionsToMap] = useState([]);
  const [formValues, setFormValues] = useState(
    isRegister ? registerFormInitialValue : loginFormInitialValue
  );

  useEffect(() => {
    if (isRegister) {
      setOptionsToMap(REGISTER_LABELS);
    } else {
      setOptionsToMap(LOGIN_LABELS);
    }
  }, [isRegister]);

  const handleChangeValues = (field, value) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    createUser(formValues)
  };

  const createUser = (data) => {

    const { nombre, apellido, email, password, edad } = data

      fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        edad,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => console.log(json));

  }

  return (
    <Form>
      <FormTitle isRegister={isRegister} />
      {optionsToMap.map((inputField, index) => (
        <Input
          inputField={inputField}
          key={index}
          handleChange={handleChangeValues}
        />
      ))}
      <button onClick={handleOnClick}>Submit</button>
    </Form>
  );
}
