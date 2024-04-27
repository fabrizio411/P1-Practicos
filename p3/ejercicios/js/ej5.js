let result = ''
for (let i = 1; i <= 450; i++) {
    if (i % 5 === 0) {
        result += i + '<br>'
    }
}

document.querySelector('#result').innerHTML = result
