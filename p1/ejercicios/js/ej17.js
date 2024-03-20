document.querySelector('#btn').addEventListener('click', displayResult)

function displayResult() {
    let chPerMin = Number(document.querySelector('#chPerMin').value)

    document.querySelector('#chPerMin').value = ''

    let tempF = 50 + ((chPerMin - 40) / 4)
    let tempC = (tempF - 32) / 1.8
    let tempC_direct = 10 + ((chPerMin - 40) / 7)

    document.querySelector('#resultF').innerHTML = tempF
    document.querySelector('#resultC').innerHTML = tempC
}