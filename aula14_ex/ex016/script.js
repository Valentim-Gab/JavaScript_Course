//VAR
let conta = document.getElementById('contar')
let preparaCont = document.getElementById('preparaCont')
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')

let ini = null
let fm = null
let pas = null

//EVENTS
conta.addEventListener('click', contar)

//FUNCTION
function contar() {
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        window.alert('[ERRO] Preencha todos os campos')
        preparaCont.innerHTML = 'Impossível contar'

    } else {

        preparaCont.innerHTML = 'Contando: '
        ini = Number(inicio.value)
        fm = Number(fim.value)
        pas = Number(passo.value)

        if (pas <= 0) {
            window.alert('Passo inválido! Considerando PASSO igual a 1')
            pas = 1
        }

        if (ini < fm) {
            
            for(let c = ini; c <= fm; c += pas) {
                preparaCont.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {

            for(let c = ini; c >= fm; c -= pas) {
                preparaCont.innerHTML += `${c} \u{1F448}  `
            }
            
        }

        preparaCont.innerHTML += `\u{1F3C1}`
    }
}