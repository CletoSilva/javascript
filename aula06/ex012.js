let data = new Date()
let dia = data.getDate()
let mes = data.getMonth() + 1 // O +1 serve para o indice começar com 1 ao invés de 0.
let ano = data.getFullYear()
let hora = data.getHours()
let minutos = data.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
console.log(`${dia}/${mes}/${ano}`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}