document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let txt1 = document.querySelector('#txt1').value
    let txt2 = document.querySelector('#txt2').value

    document.querySelector('#txt1').value = ''
    document.querySelector('#txt2').value = ''

    let result = 'NO es una subcadena'

    if (txt1.includes(txt2)) {
        result = 'Es una subcadena'
    }

    document.querySelector('#result').innerHTML = result
}