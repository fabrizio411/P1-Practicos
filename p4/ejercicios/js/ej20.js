document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let temperatura = Number(document.querySelector("#temperatura").value)

    document.querySelector("#temperatura").value = ''

    let result = celsiusToFarenheit(temperatura)
    
    document.querySelector('#result').innerHTML = result
}

function celsiusToFarenheit(temperatura) {
    let farenheit = 1.8 * temperatura + 32 
    return Math.round(farenheit)
}