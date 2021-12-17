import React, { useState, useEffect } from "react";
import { UserValue } from "../UserValue";

export const UserCard = ( { data, handleUpdate } ) => {
    const [ isEditing, setIsEditing ] = useState(false)
    const [userInputValue, setUserInputValue] = useState({})

    const { nombre, apellido, id } = data

    useEffect(() => {
        setUserInputValue({nombre, apellido})
    }, [nombre, apellido])

    const handleUpdateUser = () => {
        setIsEditing(true)
    }

    const handleSubmitChanges = () => {
        setIsEditing(false)
        handleUpdate(id, userInputValue)
    }

  return (
    <React.Fragment>  
     <>
        <UserValue value={userInputValue.nombre} setUserInputValue={setUserInputValue} field={"Nombre"} isEditing={isEditing}/>
        <UserValue value={userInputValue.apellido} setUserInputValue={setUserInputValue} field={"Apellido"} isEditing={isEditing}/>
     </>
    { isEditing ? <button onClick={handleSubmitChanges}> Guardar cambios </button> : <button onClick={handleUpdateUser}> Editar usuario </button> }
    </React.Fragment>
  );
};
