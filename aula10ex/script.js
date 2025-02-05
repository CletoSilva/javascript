let numeros = [];

function gerar() {
    const numero = Number(document.getElementById("numero").value);
   
    if (numero == "") {
        alert("[ERRO] Por favor, digite um número!");
    } else if (numero < 1 || numero > 100) {
        alert("[ERRO] Por favor, digite um número entre 1 a 100!")
    } else {
        numeros.push(numero);
        let item = document.createElement("option");
        item.value = numero;
        item.text = `Valor ${numero} adicionado.`;
        tabuada.appendChild(item);
    }
}

function finalizar() {
    const resulNum = document.getElementById("tabuada");
    const resultado = document.getElementById("res");
    let soma = 0;
    let maior = -Infinity; // Valor inicial para garantir que qualquer número seja maior
    let menor = Infinity; // Valor inicial para garantir que qualquer número seja menor
    let media = 0

    for (let i = 0; i < resulNum.length; i++) {
        const valor = Number(resulNum[i].value);
        soma += valor;

        if (valor > maior) {
            maior = valor;
        } 
        if (valor < menor) {
            menor = valor;
        }
    }

    if (numeros.length > 0) {
        media = soma / numeros.length;
    }

    resultado.innerHTML = `
    <p>Ao todo temos ${resulNum.length} números informado</P>
    <p>A soma dos valores é: ${soma}</p>
    <p>O maior valor é: ${maior}</p>
    <p>O menor valor é: ${menor}</p>
    <p>A média é: ${media.toFixed(2)}</p>
    `
}  