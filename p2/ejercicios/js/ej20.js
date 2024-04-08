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

    document.querySelector("#azucar").value = ''
    document.querySelector("#harina").value = ''
    document.querySelector("#aceite").value = ''
    document.querySelector("#agua").value = ''
    
    let cantAzucar = Math.floor(userAzucar / azucar)
    let cantHarina = Math.floor(userHarina / harina)
    let cantAceite = Math.floor(userAceite / aceite)
    let cantAgua = Math.floor(userAgua / agua)

    let minRecetas = cantAzucar

    if (cantHarina < minRecetas) {
        minRecetas = cantHarina 
    }
    if (cantAceite < minRecetas) {
        minRecetas = cantAceite
    }
    if (cantAgua < minRecetas) {
        minRecetas = cantAgua
    }

    document.querySelector('#result').innerHTML = minRecetas
}