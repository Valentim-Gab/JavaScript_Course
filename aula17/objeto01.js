console.log(`======================================\n`)
//BEGIN

//objeto
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}
 
amigo.engordar(2)

console.log(`${amigo.nome.toUpperCase()}. pesa ${amigo.peso} Kg`)
//END
console.log(`\n======================================`)