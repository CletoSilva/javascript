const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const btn = document.getElementById("btn_copiar");
const btnRemover = document.getElementById("btn_remover");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map( (element) => {
    element.addEventListener("click", (evt) => {
        const el = evt.target;
        el.classList.toggle("selecionado");
    })
});

btn.addEventListener("click", () => {
    const cursoselecionados = [...document.querySelectorAll(".selecionado")];
    cursoselecionados.map( (element) => {
        caixa2.appendChild(element);
    })
});

btnRemover.addEventListener("click", () => {
    const cursoNaoselecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];
    cursoNaoselecionados.map( (element) => {
        caixa1.appendChild(element);
    })
});