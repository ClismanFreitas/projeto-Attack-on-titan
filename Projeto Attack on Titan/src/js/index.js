const botao = document.querySelector(".btn-temporadas");
const elementoPlataformas = document.querySelector(".btn-temporadas .temporadas");

botao.addEventListener("click", () => {

    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    if (botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    } else {
        elementoPlataformas.classList.add("ativo");
    }
});