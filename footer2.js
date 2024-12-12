// footer.js
function createFooter2() {
    const footer = document.createElement("footer");

    // HTML do footer
    footer.innerHTML = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="texto-esquerda">
                <a href="quemsomosnos.html">
                    <p>Quem somos nós</p>
                </a>
                <a href="https://www.reclameaqui.com.br">
                    <p>Entre em Contato</p>
                </a>
                <a href="https://www.bne.com.br/jobs/bne-tech">
                    <p>Trabalhe Conosco</p>
                </a>
            </div>

            <div class="logo-carro">
                <img src="../icones/logo.png" alt="Logo">
            </div>

            <div class="redes-sociais">
                <h1>Redes Sociais</h1>
                <div>
                    <a href="https://www.facebook.com"><img src="../icones/facebook.png" class="social-icon" /></a>
                    <a href="https://www.instagram.com"><img src="../icones/instagram.png" class="social-icon" /></a>
                    <a href="https://x.com/?lang=pt-br"><img src="../icones/twitter.png" class="social-icon" /></a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // CSS do footer
    const style = document.createElement("style");
    style.textContent = `
.site-footer {
    background-color: #000;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 0.9rem;
    border-top: 2px solid #444;
    position: fixed; /* Fixa o footer na parte inferior */
    bottom: 0; /* Define a posição inferior */
    width: 100%;
    height: 120px; /* Altura fixa */
    z-index: 100; /* Garante que fique acima de outros elementos */
}


.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;
}

.texto-esquerda p {
    margin: 0.5rem 0;
    text-align: left;
}

.logo-carro img {
    width: 150px;
}

.redes-sociais h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
}

.social-icon {
    width: 30px;
    margin-right: 0.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .site-footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-container {
        margin-bottom: 1rem;
    }

    .texto-esquerda {
        align-items: center;
    }

    .social-icon {
        margin-bottom: 0.5rem;
    }
}

a {
    color: inherit; /* Usa a mesma cor do texto ao redor */
    text-decoration: none; /* Remove o sublinhado */
    cursor: default; /* Remove o indicador de que é um link */
}
    `;
    
    // Adiciona o estilo e o footer ao documento
    document.head.appendChild(style);
    document.body.appendChild(footer);
}

// Executa a criação do footer
createFooter2();
