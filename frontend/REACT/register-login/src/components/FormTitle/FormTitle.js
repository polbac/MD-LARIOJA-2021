import React from 'react'

export const FormTitle = ({isRegister}) => {
    const title = isRegister ? "Registrate!" : "Ingresa"
    return <h2>{title}</h2>
}