// Selectores
const registerButton = document.querySelector("a.registro")
const sectionRegister = document.querySelector("section.register-form")
const sectionLogin = document.querySelector("section.login-form")
const loginButton = document.querySelector("a.login")

const registerFormRenderData = [
    {
        type: 'text',
        name: 'nombre',
        id: 'nombre',
        className: 'nombre',
        placeholder: 'Nombre',
    },
    {
        type: 'text',
        name: 'apellido',
        id: 'apellido',
        className: 'apellido',
        placeholder: 'Apellido',
    },
    {
        type: 'email',
        name: 'email',
        id: 'email',
        className: 'email',
        placeholder: 'Correo Electrónico',
    },
    {
        type: 'password',
        name: 'password',
        id: 'password',
        className: 'password',
        placeholder: 'Contraseña',
    },
];

const loginFormRenderData = [
    {
        type: 'email',
        name: 'email',
        id: 'email',
        className: 'email',
        placeholder: 'Correo Electrónico',
    },
    {
        type: 'password',
        name: 'password',
        id: 'password',
        className: 'password',
        placeholder: 'Contraseña',
    }
];

// Eventos
registerButton.addEventListener("click", () => {
    sectionRegister.style.display = "block"
    sectionLogin.style.display = "none"

    renderRegisterForm("#", "Crear Usuario");
    const form = createForm(registerFormRenderData);
    REGISTER_FORM.appendChild(form);

    watchValidations();

})

loginButton.addEventListener("click", () => {
    sectionLogin.style.display = "block"
    sectionRegister.style.display = "none"
})