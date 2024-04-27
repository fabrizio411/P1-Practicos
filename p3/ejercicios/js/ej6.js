let result = ''
for (let i = -33; i <= 230; i++) {
    if (i % 4 === 0) {
        result += i + '<br>'
    }
}

document.querySelector('#result').innerHTML = result