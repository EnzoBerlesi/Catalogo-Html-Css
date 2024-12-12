// header.js
function createHeader2() {
    const header = document.createElement("header");

    // HTML do header
    header.innerHTML = `


        <div class="Titulo">
            <a href="../index.html"><h1>Clássicos Brasileiros</h1></a>
        </div>

        <div class="icones da direita">
            <img src="../icones/search.png" alt="Lupa" class="icon">
            <a href="../login/telalogin.html"><img src="../icones/circle-user.png" alt="Perfil" class="icon" /></a>
            <img src="../icones/shopping-cart.png" alt="Carrinho" class="icon" />
        </div>
        </div>
    `;

    // CSS do header
    const style = document.createElement("style");
    style.textContent = `

    /* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #fff;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #000;
    color: #fff;
}

.botaosidebar {
    display: flex;
    align-items: center;
}

.Titulo h1 {
    font-family: 'Kablammo', cursive;
    font-size: 2rem;
    color: #fff;
    margin: 0;
}

.icones-direita {
    display: flex;
    gap: 1rem;
}

.icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .Titulo h1 {
        font-size: 1.5rem;
    }

    .icones-direita {
        gap: 0.5rem;
    }
}
    `;

    // Adiciona o estilo e o header ao documento
    document.head.appendChild(style);
    document.body.prepend(header);
}

// Executa a criação do header
createHeader2();
