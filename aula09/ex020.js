let num = [3,6,2,5,4];

console.log(num);

/* Mostrando um array na tela
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}
*/

// Maneira simplificada de mostrar um array na tela.
for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}