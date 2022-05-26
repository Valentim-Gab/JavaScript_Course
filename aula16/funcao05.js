console.log(`======================================\n`)

//BEGIN

//COM HTML:
    //let txtNum = document.getElementById('txtNum')
    //let txtSaida = document.getElementById('txtSaida')
    //let numFat = Number(txtNum.value)

//SEM HTML:
let numFat = 7
let saida = `${numFat}! = `
let result = fatorial(numFat)
saida += result

//COM HTML:
    //txtSaida.innerHTML = `${saida}`

//SEM HTML:
console.log(saida); 

//FUNTION
    //RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        saida += `${n} = `
        return 1
    } else {
        saida += `${n} x `
        return n * fatorial(n-1)
    }
}
    
//END
console.log(`\n======================================`)