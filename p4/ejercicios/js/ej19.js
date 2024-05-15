document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let base = Number(document.querySelector("#base").value)
    let altura = Number(document.querySelector("#altura").value)

    document.querySelector("#base").value = ''
    document.querySelector("#altura").value = ''

    let result = areaTriangulo(base, altura)
    
    document.querySelector('#result').innerHTML = result
}

function areaTriangulo(base, altura) {
    if (base <= 0 || altura <= 0) {
        return -1
    }

    let area = base * altura / 2

    return area
}