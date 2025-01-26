function gerar() {
    let numero = Number(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada");

    if (numero == "") {
        alert("Por favor, digite um número!");
    } else {
        tabuada.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option");
            item.text = `${numero} x ${i} = ${numero*i}`;
            tabuada.appendChild(item); 
        }
    }
}