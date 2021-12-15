
// Son asincrónicas
function funcionQueDevueveUnaPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Funcion ejecutada luego de 2 segundos')
        }, 2000)
    })
}

console.log(1)

const ejecutarPromesa = async () => {
    const resutadoPromesa = await funcionQueDevueveUnaPromesa()    
    console.log(resutadoPromesa)
}

ejecutarPromesa()

/* funcionQueDevueveUnaPromesa()
    .then(resp => {
        console.log(resp)
    }) */

console.log(2)