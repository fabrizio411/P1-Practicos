let azucar = 1
let harina = 100
let aceite = 1
let agua = 1

document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let userAzucar = Number(document.querySelector("#azucar").value)
    let userHarina = Number(document.querySelector("#harina").value)
    let userAceite = Number(document.querySelector("#aceite").value)
    let userAgua = Number(document.querySelector("#agua").value)

    
    if (!userAzucar || !userAceite || !userHarina || !userAgua) {
        return
    }

    let cantAzucar = Math.floor(userAzucar / azucar)
    let cantHarina = Math.floor(userHarina / harina)
    let cantAceite = Math.floor(userAceite / aceite)
    let cantAgua = Math.floor(userAgua / agua)

    let result = 0

    if (cantAzucar >= 1 
        && cantHarina >= 1 
        && cantAceite >= 1 
        && cantAgua >= 1) 
    {
        result = Math.min(cantAzucar, cantHarina, cantAceite, cantAgua)
    }

    document.querySelector('#result').innerHTML = result
}