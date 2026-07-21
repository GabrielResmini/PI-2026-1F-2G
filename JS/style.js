const barraPesquisa = document.getElementById("barraPesquisa");
const cards = document.querySelectorAll(".card-aula");

if (barraPesquisa) {
    barraPesquisa.addEventListener("input", function () {

        const pesquisa = this.value.toLowerCase().trim();

        cards.forEach(card => {
            const texto = card.textContent.toLowerCase();

            if (texto.includes(pesquisa)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
}


const btnExplorar = document.querySelector(".botao-principal");

if (btnExplorar) {
    btnExplorar.addEventListener("click", () => {
        document.querySelector(".aulas-disponiveis")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}


const btnMateriais = document.querySelector(".botao-secundario");

if (btnMateriais) {
    btnMateriais.addEventListener("click", () => {
        window.location.href = "materiais.html";
    });
}

const botoesMetodologias = document.querySelectorAll(".botao-pequeno");

botoesMetodologias.forEach(botao => {

    botao.addEventListener("click", () => {

        const modalidade = botao.parentElement.querySelector("strong").textContent;

        alert("Abrindo metodologias de " + modalidade);

        // Depois você pode trocar o alert por:
        // window.location.href = "futsal.html";
    });

});