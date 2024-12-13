(function () {
    const carrinhoLateral = document.getElementById('carrinho-lateral');

    document.getElementById('carrinho-botao').addEventListener('click', () => {
        carregarCarrinho();
        carrinhoLateral.classList.toggle('aberto');
    });

    function carregarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinhoLateral.innerHTML = '<h2>Seu Carrinho</h2>';

        if (carrinho.length === 0) {
            carrinhoLateral.innerHTML += '<p>O carrinho está vazio.</p>';
            return;
        }

        carrinho.forEach((item, index) => {
            carrinhoLateral.innerHTML += `
                <div class="item-carrinho">
                    <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; object-fit: cover;">
                    <p>${item.nome} - R$ ${item.preco}</p>
                    <button class="remover-item" data-index="${index}">
                        <img src="icones/trash-2.png" alt="Remover" class="icone-lixeira">
                    </button>
                </div>
            `;
        });

        carrinhoLateral.innerHTML += '<a href="../concluircompra.html" id="finalizar-compra">Finalizar Compra</a>';

        const botoesRemover = document.querySelectorAll('.remover-item');
        botoesRemover.forEach(botao => {
            botao.addEventListener('click', removerItem);
        });
    }

    function removerItem(event) {
        const index = event.target.closest('.remover-item').getAttribute('data-index');
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        carregarCarrinho();
    }
})();
