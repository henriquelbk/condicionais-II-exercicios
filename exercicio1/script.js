const numero = Number(prompt('Digite um número'))

/*
if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log('é divisivel por 2 e 3')
    } else {
        console.log('é divisível apenas por 2')
    }
} else {
    console.log('não é divisível por 2')
}
*/

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('é divisivel por 2 e 3')
} else {
    console.log('não é divisível por 2 e 3')
}