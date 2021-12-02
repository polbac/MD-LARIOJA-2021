/* ---- UTILS ---- */
/* ---- Podemos aprovechar que hacemos cosas similares y refactorizar un poco el código con algunos utils que nos ayudarán a sostener el código limpio ---- */

/* ------------------Deprecado----------------- */
/* Refactor en validateNumberOrSymbol */
/* const doesStringHasNumber = (string) => {
    let myNewArray = string.split("")
    let myNumberFlag = false
    myNewArray.forEach(element => {
        if (!isNaN(element)) {
            myNumberFlag = true
        }
    })
    return myNumberFlag
}

const stringWithOddSymbols = (string) => {
    const newString = string.split("")
    let myOddFlag = false
    arrayOfSymbols.forEach(symbol => {
        if (newString.includes(symbol))
            return myOddFlag = true
    })
    return myOddFlag
} */
/* --------------------------------------------- */

/**
 * @param {*} string > string a validar
 * @returns numberFlag:bool, symbolFlag:bool
 */
const validateNumberOrSymbol = (string) => {
    let numberFlag = false
    let symbolFlag = false
    let myNewArray = string.split("")
    myNewArray.forEach(element => {
        if (!isNaN(element)) {
            numberFlag = true
        }
        if (arrayOfSymbols.includes(element)) {
            symbolFlag = true
        }
    })
    return { numberFlag, symbolFlag }
}

/**
 * 
 * @param {*} elemento:HTMLElement > donde renderizar el error
 * @param {*} error:string > mensaje de error
 */
const renderMyError = (elemento, error) => {
    const myError = `<label class="error">${error}</label>`
    elemento.innerHTML = myError
}

/**
 * @param {*} value:string > valor a verificar
 * @param {*} min:number > mínimo de caracteres
 * @param {*} max:number > máximo de caracteres
 * @returns minLength:boolean, maxLength:boolean
 */
const validateLength = (value, min = 2, max = 15) => {
    const minLength = value.length >= min
    const maxLength = value.length <= max

    return { minLength, maxLength }
}

const showError = (elemento) => {
    submit.setAttribute("pointer-events", "none");
    elemento.style.border = "1px solid red"
}

const hideError = (elemento, label) => {
    submit.removeAttribute("pointer-events")
    elemento.style.border = "1px solid green"
    label.innerHTML = ""
}

const clearValue = (object, key) => {
    return {
        ...object,
        key: ""
    }
}
