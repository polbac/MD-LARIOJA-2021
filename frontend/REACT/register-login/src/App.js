import React, { useState, useEffect } from "react";
import FormContainer from "./containers/FormContainer";
import { UserCard } from './components/UserCard'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [users, setUsers] = useState([])

  const handleShowForm = ({ target }) => {
    const { name } = target;
    if (name === "register-button") {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
    setShowForm(true);
  };

  useEffect( () => 
    // GET
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data =>setUsers(data))
  , [])


  const handleUpdateUser = (data, values, field) => {
    console.log(data, values, field)
  }

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
      { !!users &&
      <div>
        <h4>Listado de usuarios</h4>
        { users.map(
          ( data ) =>  <UserCard key={data.id} data={data} handleUpdate={handleUpdateUser}/> )
        }
      </div>
      }
    </>
  );
}

export default App;
