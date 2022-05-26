//VAR
let num = document.getElementById('num')
let gerarTabuada = document.getElementById('gerarTabuada')
let tabuada = document.getElementById('tabuada')
let n = null
let resp = null

//EVENT
gerarTabuada.addEventListener('click', calcular)

//FUNCTION
function calcular() {
    if (num.value.length > 0) {
        
        n = Number(num.value)
        tabuada.innerHTML = null
        tabuada.style = "width: 40%; height: 170px;"

        for(let c = 1; c<=10; c++) {
            resp = n * c
            tabuada.innerHTML += `<option value="${c}"> ${n} x ${c} = ${resp} </option>`

            /*
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${resp}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            */
        }
    } else {
        window.alert('Por favor, digite um número!')
        tabuada.style = "width: 50%;"
        tabuada.innerHTML = '<option>Digite um número acima</option>'
    }
}