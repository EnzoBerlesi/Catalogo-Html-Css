document.getElementById('comprar').addEventListener('click', (event) => {
    const carroId = event.target.getAttribute('data-id');
    const carroNome = event.target.getAttribute('data-nome');
    const carroPreco = event.target.getAttribute('data-preco');
    const carroImagem = event.target.getAttribute('data-imagem');
    
    const carro = {
        id: carroId,
        nome: carroNome,
        preco: carroPreco,
        imagem: carroImagem
    };
    
    adicionarCarrinho(carro);
});

function adicionarCarrinho(carro) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    carrinho.push(carro);
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    alert('Carro adicionado ao carrinho!');
    window.location.href = '../index.html';  
}
