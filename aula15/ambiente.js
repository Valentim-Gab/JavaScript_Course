console.log(`======================================\n`)

//VAR
let num = [5, 8, 2, 9, 3]

//BEGIN
console.log(num) //vetor

num[2] = null //troca o valor da posição 3 por null
console.log(num) //console.log(`Nosso vetor é o ${num}`)

num.sort() //organiza o vetor
console.log(num)

num.push(0) //num[5] = 0 (adiciona um novo elemento com valor 0)
console.log(num)

console.log(`\nTamanho do vetor: ${num.length}`)
console.log(`\nPrimeiro valor do vetor: ${num[0]}\n`)

/*
for (let c=0; c<num.length; c++) {
    console.log(`A posição [${c}] tem o valor [${num[c]}]`)
}
*/

for (let c in num) {
    console.log(`A posição [${c}] tem o valor [${num[c]}]`)
}

procurar(9)
procurar(7)

//END
console.log(`\n======================================`)

function procurar(valor) {
    if (num.indexOf(valor) != -1) {
        console.log(`\nO valor [${valor}] está na posição [${num.indexOf(valor)}]`)
    } else {
        console.log(`\nO valor [${valor}] não existe nesta lista`)
    }
}