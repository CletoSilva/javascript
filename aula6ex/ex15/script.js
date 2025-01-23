function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let anoDeNasc = document.getElementById("ano").value;
    let resul = document.querySelector("div#res");

    if (anoDeNasc.length == 0 || Number(anoDeNasc) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        let sex = document.getElementsByName("sexo");
        let idade = ano - Number(anoDeNasc);
        let genero = "";
        let img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (sex[0].checked) {
            genero = "Homem";
           
            if (idade >= 0 && idade <= 2) {
                // Bebe
                img.setAttribute("src", "bebe.png")
            } else if (idade < 13) {
                // Criança
                img.setAttribute("src", "criançaM.png")
            } else if (idade < 18) {
                // Adolecente
                img.setAttribute("src", "adolecenteM.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "adulto.png")
            } else {
                // Idoso
                img.setAttribute("src", "idoso.png")
            }
        } else if (sex[1].checked){
            genero = "Mulher";

            if (idade >= 0 && idade <= 2) {
                // Bebe
                img.setAttribute("src", "bebe.png")
            } else if (idade < 13) {
                // Criança
                img.setAttribute("src", "criançaF.png")
            } else if (idade < 18) {
                // Adolecente
                img.setAttribute("src", "adolecenteF.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "adulta.png")
            } else {
                // Idoso
                img.setAttribute("src", "idosa.png")
            }
        }
        resul.style.textAlign = "center"
        resul.innerHTML = `Resultado é ${genero} com ${idade} anos.`;
        resul.appendChild(img);
    }
}