function displayResult() {
    const wins = parseInt(document.querySelector('#wins').value)
    const ties = parseInt(document.querySelector('#ties').value)

    if (!wins || !ties) {
        return
    }

    const result = wins * 3 + ties

    document.querySelector('#result').innerHTML = result
}