function displayResult() {
    const char = document.querySelector('#char').value

    if (!char) {
        return
    }

    let result = 'No'
    if ('aeiou'.includes(char)) {
        result = 'Si'
    }

    document.querySelector('#result').innerHTML = result
}