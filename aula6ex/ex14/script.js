function carregar() {
    let msg = document.getElementById("msg");
    let image = document.getElementById("image");
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `Agora sao ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // Manhã
        image.src = 'manha2.png'
        document.body.style.backgroud = "#e2cd9f";
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        image.src = 'tarde2.png'
        document.body.style.background = "#ca5b0e";
    } else {
        image.src = 'noite2.png'
        document.body.style.background = "#515154"
    }
}