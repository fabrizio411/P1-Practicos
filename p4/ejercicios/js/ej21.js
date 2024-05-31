document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let temperatura = Number(document.querySelector("#temperatura").value)
    let nuevaUnidad = document.querySelector("#unidad").value

    document.querySelector("#temperatura").value = ''
    document.querySelector("#unidad").value = ''

    let result = `${convertirUnidades(temperatura, nuevaUnidad)}${nuevaUnidad.toUpperCase()}`
    
    document.querySelector('#result').innerHTML = result
}

function convertirUnidades(temperatura, nuevaUnidad) {
    let result
    switch (nuevaUnidad) {
        case 'c':
            result = (temperatura - 32) / 1.8
            break;
        case 'k':
            result = (temperatura + 459.67) / 1.8
            break;
        case 'ra':
            result = temperatura + 459.67
            break;
        case 're':
            result = (temperatura - 32) / 2.25
            break;
    }

    return Math.round(result)
}