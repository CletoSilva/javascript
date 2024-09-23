/* Outra forma de fazer usando Array..

let diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

let dia = new Date();
let diaSemana = dia.getDay();

console.log(diasDaSemana[diaSemana]);
*/

let dia = new Date();
let diaSemana = dia.getDay()

switch (diaSemana) {
    case 0: 
        console.log('Domingo') 
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Dia inválido.')
}