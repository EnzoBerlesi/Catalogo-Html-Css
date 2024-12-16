// Seleciona os elementos necessários
const searchInput = document.querySelector(".searchbar input"); // Input da barra de busca
const mainContainer = document.querySelector(".main-container"); // Container principal
const blocks = document.querySelectorAll(".block-container .block"); // Todos os blocos de carros
const carrosselSlides = document.querySelectorAll(".carrossel .slide"); // Slides do carrossel
const blackOffer = document.querySelector(".black"); // Oferta black

// Adiciona o evento 'input' para capturar o que o usuário digita
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase(); // Texto digitado, convertido para minúsculas

    // Primeiramente, oculta a main-container toda
    mainContainer.style.display = "none";

    // Caso o campo de pesquisa esteja vazio, exibe todos os itens e a main-container
    if (query === "") {
        mainContainer.style.display = "block"; // Exibe toda a main-container
        blocks.forEach((block) => {
            block.style.display = "block"; // Exibe todos os blocos
        });

        carrosselSlides.forEach((slide) => {
            slide.style.display = "block"; // Exibe todos os slides do carrossel
        });

        blackOffer.style.display = "block"; // Exibe a oferta black
        return; // Sai da função para evitar filtragem desnecessária
    }

    let hasResults = false; // Variável para verificar se há resultados

    // Filtra os blocos de carros com base no texto digitado
    blocks.forEach((block) => {
        const content = block.textContent.toLowerCase();
        if (content.includes(query)) {
            block.style.display = "block"; // Exibe o bloco correspondente
            hasResults = true;
        } else {
            block.style.display = "none"; // Oculta o bloco que não corresponde
        }
    });

    // Filtra os slides do carrossel
    carrosselSlides.forEach((slide) => {
        const carLink = slide.querySelector("a").getAttribute("href").toLowerCase();
        if (carLink.includes(query)) {
            slide.style.display = "block"; // Exibe o slide correspondente
            hasResults = true;
        } else {
            slide.style.display = "none"; // Oculta o slide que não corresponde
        }
    });

    // Filtra a oferta black
    const blackOfferText = blackOffer.querySelector("p").textContent.toLowerCase();
    if (blackOfferText.includes(query)) {
        blackOffer.style.display = "block"; // Exibe a oferta black
        hasResults = true;
    } else {
        blackOffer.style.display = "none"; // Oculta a oferta black
    }

    // Se houver resultados, exibe a main-container
    if (hasResults) {
        mainContainer.style.display = "block"; // Exibe toda a main-container
    }
});
