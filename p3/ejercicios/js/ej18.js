document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let val = Number(document.querySelector("#val").value)

    document.querySelector("#val").value = ''

    let result = ''
    
    for (let i = 30; i <= 200; i++) {
        if (i % val === 0) {
            result += i + ' '
        }
    }

    document.querySelector('#result').innerHTML = result
}