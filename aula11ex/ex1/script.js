const cursos = [...document.querySelectorAll(".curso")];

cursos.map( (elemento) => {
    elemento.addEventListener("click", (evt) => {
        const el = evt.target;
        el.classList.add("destaque");
    })

})
