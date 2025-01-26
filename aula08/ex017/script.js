function contar() {
    let inicio = Number(document.getElementById("inicio").value);
    let passo = Number(document.getElementById("passo").value);
    let fim = Number(document. getElementById("fim").value);
    let resul = document.getElementById("res");

    if (inicio == 0 || fim == 0 || passo == 0) {
        resul.innerHTML = `Impossivel contar!`
        // alert("[ERRO] Está faltando dados")
    } else {
        resul.innerHTML = `Contando: <br>`

        if (passo <= 0) {
            alert("Passo inválido! Considerando PASSO 1");
            passo = 1
        }

        if (inicio < 0) {
            // Contagem decrescente
            for (let i = inicio; i >= fim; i -= passo) {
                resul.innerHTML += `${i} &#x1F449`
            }
        } else {
            // Contagem crescente
            for (let i = inicio; i <= fim; i += passo) {
                resul.innerHTML += `${i} &#x1F449`
            }
        }

        resul.innerHTML += `&#x1F3C1`
        
    }
}