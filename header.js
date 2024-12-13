// header.js
function createHeader() {
    const header = document.createElement("header");

    // HTML do header
    header.innerHTML = `
    
        <div class="Titulo">
            <a href="index.html">
                <h1>Clássicos Brasileiros</h1>
            </a>
        </div>

        <div class="icones-direita">
            <img src="icones/search.png" alt="Lupa" class="icon">
            <a href="login/telalogin.html"><img src="icones/circle-user.png" alt="Perfil" class="icon" /></a> 

        </div>
    `;

    // CSS do header
    const style = document.createElement("style");
    style.textContent = `

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
createHeader();
