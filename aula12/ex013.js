console.log(`======================================\n`)

//BEGIN
var agora = new Date()
var diaSem = agora.getDay() 

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;

    case 2:
        console.log('Segunda')
        break;

    case 3:
        console.log('Terça')
        break;

    case 4:
        console.log('Quarta')
        break;

    case 5:
        console.log('Quinta')
        break;

    case 6:
        console.log('Sexta')
        break;
    
    default:
        console.log('[ERRO] Dia Inválido!')
        break;
}

//END
console.log(`\n======================================`)