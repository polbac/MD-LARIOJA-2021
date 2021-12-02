const watchValidations = () => {

    // Seleccionamos los elementos que vamos a validar
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const email = document.querySelector('#email');
    const checkbox = document.querySelector('#terminos');
    const submit = document.querySelector(".submit");
    const div = document.querySelector(".div");

    // Seleccionamos los elementos para renderizar errores
    const labelName = document.querySelector(".labelName")
    const labelApellido = document.querySelector(".labelApellido")
    const labelEmail = document.querySelector(".labelEmail")
    const labelPassword = document.querySelector(".labelPassword")
    const labelCheckbox = document.querySelector(".labelCheckbox")

    // Validaciones
    /* submit.setAttribute("cursor", "not-allowed"); */

    /**
     * Nombre y apellido
     * Validar que el nombre ingresado posea un mínimo de 2 caracteres*
     * Validar que el nombre no tenga números*
     * Validar que no tenga simbolos @ # /
     * Validar que el número máximo 15
     * 
     * Email 
     * Validar que el email tenga un arroba, un punto y un mínimo de 30 caracteres
     * 
     * Password
     * Validar que el password tenga un mínimo de 8 caracteres y máximo de 30
     * 
     * Checkbox
     * Validar que el checkbox esté tildado
     */

    // Simbolos que no pueden estar en el nombre ni apellido
    const arrayOfSymbols = ["@", "#", "/", "!"]

    /*-----------------------VALIDACIONES REGISTRO -----------------------*/

    let valoresDelFormulario = {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        checkbox: false
    }


    nombre.addEventListener("input", (event) => {
        const value = event.target.value
        // Validamos los length deconstruyendo la respuesta de la función validateLength
        const { minLength, maxLength } = validateLength(value)
        // Validamos numeros o simbolos deconstruyendo la respuesta de la función validateNumberOrSymbol
        const { numberFlag, symbolFlag } = validateNumberOrSymbol(value)

        if (minLength && !numberFlag && !symbolFlag && maxLength) {
            hideError(nombre, labelName)
            valoresDelFormulario.nombre = value
        } else {
            if (valoresDelFormulario.nombre !== "") clearValue(valoresDelFormulario, nombre)
            showError(nombre)
            if (!minLength) {
                renderMyError(labelName, "El nombre debe tener un mínimo de 2 caracteres")
            } else if (numberFlag) {
                renderMyError(labelName, "El nombre no puede tener números")
            } else if (symbolFlag) {
                renderMyError(labelName, "El nombre no puede tener simbolos")
            } else if (!maxLength) {
                renderMyError(labelName, "El nombre no puede tener más de 15 caracteres")
            }
        }
    })

    apellido.addEventListener("input", (event) => {
        const value = event.target.value
        const { numberFlag, symbolFlag } = validateNumberOrSymbol(value)
        const { minLength, maxLength } = validateLength(value)

        if (minLength && !numberFlag && !symbolFlag && maxLength) {
            hideError(apellido, labelApellido)
            valoresDelFormulario.apellido = value
        } else {
            showError(apellido)
            if (valoresDelFormulario.apellido !== "") clearValue(valoresDelFormulario, apellido)
            if (!minLength) {
                renderMyError(labelApellido, "El apellido debe tener un mínimo de 2 caracteres")
            } else if (numberFlag) {
                renderMyError(labelApellido, "El apellido no puede tener números")
            } else if (symbolFlag) {
                renderMyError(labelApellido, "El apellido no puede tener simbolos")
            } else if (!maxLength) {
                renderMyError(labelApellido, "El apellido no puede tener más de 15 caracteres")
            }
        }
    })

    email.addEventListener("input", (event) => {
        const value = event.target.value
        const { maxLength } = validateLength(value, 1, 30)
        if (value.includes("@") && value.includes(".") && maxLength) {
            hideError(email, labelEmail)
            valoresDelFormulario.email = value
        } else {
            showError(email)
            if (valoresDelFormulario.email !== "") clearValue(valoresDelFormulario, email)
            if (!value.includes("@") || !value.includes(".")) {
                renderMyError(labelEmail, "Ingresa un email válido")
            } else if (!maxLength) {
                renderMyError(labelEmail, "No te pases de listo muchacho")
            }
        }
    })

    password.addEventListener("input", (event) => {
        const value = event.target.value
        const { minLength, maxLength } = validateLength(value, 8, 30)
        if (minLength && maxLength) {
            hideError(password, labelPassword)
            valoresDelFormulario.password = value
        } else {
            showError(password)
            if (valoresDelFormulario.password !== "") clearValue(valoresDelFormulario, password)
            if (!minLength) {
                renderMyError(labelPassword, "La contraseña debe tener un mínimo de 8 caracteres")
            } else if (!maxLength) {
                renderMyError(labelPassword, "La contraseña no puede tener más de 15 caracteres")
            }
        }
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        if (!checkbox.checked) {
            showError(checkbox)
            renderMyError(labelCheckbox, "Debes aceptar los términos y condiciones")
        } else {
            hideError(checkbox, labelCheckbox)
            valoresDelFormulario.checkbox = true

            console.log("submiteando", valoresDelFormulario)
            localStorage.setItem("formulario", JSON.stringify(valoresDelFormulario))
        }
    })

}