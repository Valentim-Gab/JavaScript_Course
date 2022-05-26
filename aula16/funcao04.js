console.log(`======================================\n`)

//BEGIN
console.log(fatorial(5))

//FUNTION
function fatorial(n) {
    let fat = 1

    for(let c=n; c>1; c--) {
        fat *=c
    }
    return fat
}
    
//END
console.log(`\n======================================`)