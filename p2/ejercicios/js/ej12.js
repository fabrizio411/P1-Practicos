document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let char = document.querySelector('#char').value

    document.querySelector('#char').value = ''

    if (!char) {
        return
    }

    let result = 'No'
    // Revisar si se hace asi
    if ('aeiou'.includes(char)) {
        result = 'Si'
    }

    document.querySelector('#result').innerHTML = result
}