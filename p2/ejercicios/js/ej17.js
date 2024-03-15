function displayResult() {
    const chPerMin = parseInt(document.querySelector('#chPerMin').value)

    if (!chPerMin) {
        return
    }

    const tempF = (50 + ((chPerMin - 40) / 4)).toFixed(1)
    const tempC = ((tempF - 32) / 1.8).toFixed(1)
    const tempC_direct = (10 + ((chPerMin - 40) / 7)).toFixed(1)

    document.querySelector('#resultF').innerHTML = tempF
    document.querySelector('#resultC').innerHTML = tempC
}