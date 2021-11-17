/* console.log("hola estoy en otro lado");*/

const body = document.querySelector('body')

body.innerHTML = `
<h1 id="h1">Hola</h1>
<div class="class">Soy un div</div>
<div>soy otro div</div>
<div>soy uno mas</div>

<img class="myImage" />
<div class="btn">
  <a class="btn-anchor" href="#">boton</a>
</div>

<button>soy un boton</button>
`

const h1Id = document.querySelector('#h1')
const divClass = document.querySelector('.class')

const myImage = document.querySelector('.myImage')

// modificar atributos

myImage.src = '../dom.jpg'

// modificar estilos 
/*
    camelCase (lower)
    PascalCase
    kebab-case
    snake_case
*/

myImage.style.width = "100px"

// agregar y remover atributos

const divButton = document.querySelector(".btn")
const anchorBtn = document.querySelector(".btn a")

anchorBtn.style.textDecoration = "none"

anchorBtn.setAttribute("target", "_blank")

const newButton = document.querySelector("button")

console.log("antes del setAtt", newButton.disabled)

newButton.setAttribute("disabled", "true")
console.log("despues del sett", newButton.disabled)

newButton.removeAttribute("disabled")
console.log("al final", newButton.disabled)

anchorBtn.removeAttribute("href")


// agregar y remover clases

anchorBtn.classList.add("warning")

/* if (anchorBtn.classList.contains("warning")) {
    anchorBtn.style.border = "none"
}
 */
anchorBtn.classList.remove("warning")

/* anchorBtn.classList.toggle("warning") */

// obtener/modificar el interior del html

/* divButton.innerHTML = "hola" */
/* const innerAnchor = anchorBtn.innerHTML
anchorBtn.innerHTML = innerAnchor + "<div>dentro de un anchor</div>" */
/* anchorBtn.innerHTML = "log-in" */

anchorBtn.innerText = "no more boton"

/* const input = document.querySelector("input")
h1Id.innerText = input.innerText */

const miNuevoDiv = document.createElement("div");
/* 
miNuevoDiv.style.position = 'absolute';
miNuevoDiv.style.top = '250px';
miNuevoDiv.style.right = '100px';
miNuevoDiv.style.width = '250px';
miNuevoDiv.style.height = '250px';
miNuevoDiv.style.backgroundColor = 'cyan'; */
/* 
body.appendChild(miNuevoDiv);
 */

anchorBtn.style.position = "relative";
miNuevoDiv.style.position = 'absolute';

miNuevoDiv.style.top = '15px';
miNuevoDiv.style.right = '30px';

miNuevoDiv.style.width = '5px';
miNuevoDiv.style.height = '5px';
miNuevoDiv.style.borderRadius = '50%';

miNuevoDiv.style.backgroundColor = 'red';
anchorBtn.appendChild(miNuevoDiv)