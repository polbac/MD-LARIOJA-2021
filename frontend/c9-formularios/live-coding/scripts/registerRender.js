// Buscamos donde montar nuestro formulario
const REGISTER_FORM = document.querySelector('.register-form');

const createAnInput = ({ type, name, id, className, placeholder }) => {
    const inputContainer = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('class', className);
    inputContainer.appendChild(input);

    if (!!placeholder) {
        input.setAttribute('placeholder', placeholder);
    } else {
        const span = document.createElement('span');
        span.innerText = "Acepto los terminos y condiciones";
        inputContainer.appendChild(span);
    }
    return input;
}

const createALabelForError = (text) => {
    const labelError = document.createElement('div');
    labelError.classList.add(`label${text}`);
    return labelError;
}

function renderRegisterForm(endpoint = 'http://localhost:3000/', title) {
    // Creamos un formulario
    const formTitle = `<h2>${title}</h2>`;

    const form = createForm(registerFormRenderData);

    // append my label checkbox with my input checkbox inside form
    const labelCheckbox = document.createElement('label');
    labelCheckbox.classList.add('checkbox');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.setAttribute('name', 'terminos');
    inputCheckbox.setAttribute('id', 'terminos');
    inputCheckbox.classList.add('terminos');

    labelCheckbox.appendChild(inputCheckbox);

    const span = document.createElement('span');
    labelCheckbox.appendChild(span);
    span.innerText = "Acepto los terminos y condiciones";
    labelCheckbox.appendChild(span);

    labelCheckbox.appendChild(inputCheckbox);
    form.appendChild(labelCheckbox);

    const inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Registrarme');
    inputSubmit.setAttribute('class', 'submit');
    form.appendChild(inputSubmit);

    REGISTER_FORM.innerHTML = formTitle + form;

}

const createForm = (formRenderData) => {
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    form.setAttribute('autocomplete', 'off');

    formRenderData.forEach(inputData => {
        const input = createAnInput(inputData);
        form.appendChild(input);
    });

    return form;
}