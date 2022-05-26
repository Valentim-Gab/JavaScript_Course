let txtNum = document.getElementById('txtNum')
let numeros = document.getElementById('numeros')
let paragrafos = document.getElementById('paragrafos')

/*
let txtNum = document.querySelector('input#txtNum')
let numeros = document.querySelector('select#numeros')
let paragrafos = document.querySelector('div#paragrafos')
*/

let num = []
let saida = true
let posicao = 0
let maiorNum = null
let menorNum = null
let totalSoma = null
let totalMedia = null
let valor = null

function addNum () {
    paragrafos.innerHTML = null

    valor = Number(txtNum.value)

    if (!inLista(num, valor) && isNumero(valor)) {
        num.push(valor) 
        totalSoma += valor
        numeros.innerHTML += `<option>Valor ${txtNum.value} adicionado</option>`
        
        /*
        let item = document.createElement('option')
        item.text = `Valor ${txtNum.value} adicionado`
        numeros.appendChild(item)
        */
       
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    txtNum.value = ''
    txtNum.focus()
}

function finalizar() {
    
    if (num.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        maiorNum = Math.max.apply(null, num);
        menorNum = Math.min.apply(null, num);
        totalMedia = totalSoma/num.length

        /*
        let maior = num[0]
        let menor = num[0]
        for (let pos in num) {
            soma += num[pos]
            if (num[pos] > maior) {
                maior = num[pos]
            }
            if (num[pos] < menor) {
                menor = num[pos]
            }
        }
        */

        paragrafos.innerHTML += `
            <p>Ao todo temos ${num.length} números cadastrados.</p>
            <p>O maior valor informado foi ${maiorNum}.</p>
            <p>O menor valor informado foi ${menorNum}.</p>
            <p>Somando todos os valores, temos ${totalSoma}.</p>
            <p>A média dos valores digitados é ${totalMedia.toFixed(2)}.</p>
        `
    }
}

function isNumero(valor) {
    if (valor >= 1 && valor <= 100 && txtNum.length != '') {
        return true
    } else {
        return false
    }
}

function inLista(num, valor) {
    
    if (num.indexOf(Number(valor)) != -1) {
        return true
    } else {
        return false
    }

    /*
    for (let c = 0; c<num.length; c++) {
        if (num[c] == valor) {
            return true
            break
        } else {
            return false
        }
    }
    */
}