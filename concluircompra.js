(function() {
    const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalElement = document.getElementById('total');
    const itensCarrinhoElement = document.getElementById('itens-carrinho');

    if (itensCarrinho.length === 0) {
        itensCarrinhoElement.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalElement.innerText = "0,00";
        return;
    }

    let total = 0;
    itensCarrinho.forEach(item => {
        itensCarrinhoElement.innerHTML += `
            <p>${item.nome} - R$ ${item.preco}</p>
        `;
        total += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    });

    totalElement.innerText = total.toFixed(3).replace('.', ',');

    document.getElementById('finalizar-compra').addEventListener('click', function() {
        alert('Compra finalizada com sucesso!');
        localStorage.removeItem('carrinho');
        window.location.href = 'index.html';
    });
})();
