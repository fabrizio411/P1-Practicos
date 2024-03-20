document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let a = Number(document.querySelector("#a").value)

    document.querySelector("#a").value = ''
    
    if (!a) {
        return
    }

    if (!(a >= 0 && a <= 10)) {
        document.querySelector('#result').innerHTML = "A está fuera de rango"
    }
}