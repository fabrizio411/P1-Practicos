document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let texto = document.querySelector('#text').value

    let result = ''

    for (let i = texto.length - 1; i >= 0; i--) {
        result += texto[i]
    }


    document.querySelector('#result').innerHTML = result
}