// Declara um array vazio chamado 'numeros' para armazenar os números digitados.
let numeros = [];

// Define uma função chamada 'gerar' que é executada quando o usuário tenta adicionar um número.
function gerar() {
    // Obtém o valor numérico digitado pelo usuário no campo com id "numero".
    const numero = Number(document.getElementById("numero").value);

    // Limpa os resultados anteriores
    document.getElementById("res").innerHTML = "";

    // Verifica se o campo de número está vazio.
    if (numero == "") {
        // Exibe um alerta de erro se o campo estiver vazio.
        alert("[ERRO] Por favor, digite um número!");
    } else if (numero < 1 || numero > 100) {
        // Exibe um alerta de erro se o número estiver fora do intervalo de 1 a 100.
        alert("[ERRO] Por favor, digite um número entre 1 a 100!")
    } else {
        // Se o número for válido, adiciona-o ao array 'numeros'.
        numeros.push(numero);
        // Cria um novo elemento <option> para exibir o número na lista.
        let item = document.createElement("option");
        // Define o valor do elemento <option> com o número.
        item.value = numero;
        // Define o texto do elemento <option> com uma mensagem informando o valor adicionado.
        item.text = `Valor ${numero} adicionado.`;
        // Adiciona o elemento <option> à lista com id "tabuada".
        tabuada.appendChild(item);

        // Limpar o campo de entrada.
        document.getElementById("numero").value = "";
    }
}

// Define uma função chamada 'finalizar' que é executada quando o usuário clica no botão "Finalizar".
function finalizar() {
    // Obtém o elemento da lista com id "tabuada".
    const resulNum = document.getElementById("tabuada");
    // Obtém o elemento que exibirá os resultados com id "res".
    const resultado = document.getElementById("res");
    
    // Inicializa as variáveis para calcular a soma, o maior valor, o menor valor e a média.
    let soma = 0;
    let maior = -Infinity; // Valor inicial para garantir que qualquer número seja maior
    let menor = Infinity; // Valor inicial para garantir que qualquer número seja menor
    let media = 0

    // Itera sobre os elementos <option> da lista 'resulNum'.
    for (let i = 0; i < resulNum.length; i++) {
        // Obtém o valor numérico do elemento <option> atual.
        const valor = Number(resulNum[i].value);
        // Adiciona o valor à soma.
        soma += valor;

        // Atualiza o maior/menor valor se o valor atual for maior/menor.
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }

    // Calcula a média se houver números na lista.
    if (numeros.length > 0) {
        media = soma / numeros.length;
    }

    // Exibe os resultados no elemento com id "res".
    resultado.innerHTML = `
    <p>Ao todo temos ${resulNum.length} números informado</P>
    <p>A soma dos valores é: ${soma}</p>
    <p>O maior valor é: ${maior}</p>
    <p>O menor valor é: ${menor}</p>
    <p>A média é: ${media.toFixed(2)}</p>
    `
}