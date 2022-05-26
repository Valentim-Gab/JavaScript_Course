console.log(`======================================\n`)

//BEGIN
/*
let res = parImpar(11)
console.log(res)
*/

console.log(parImpar(11))
console.log(parImpar(4))

//FUNTION
function parImpar(n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

//END
console.log(`\n======================================`)