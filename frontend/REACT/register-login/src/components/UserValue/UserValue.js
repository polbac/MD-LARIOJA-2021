import React from "react";

export const UserValue = ({ value, isEditing = false, field,  setUserInputValue }) => {

  const handleChange = (event) => {
    setUserInputValue(event.target.value)
  }
  
  return (
    <>
      {!isEditing ? (
        <div>
          <label>{field}: </label>
          <i>{value}</i>
        </div>
      ) : (
        <input onChange={handleChange} defaultValue={value} type={"text"}/>
      )}
    </>
  );
};
