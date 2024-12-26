// Lógica para alternar entre abas
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todas as abas e botões
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.style.display = "none"; // Ocultar as seções
            });

            // Adiciona a classe 'active' para o botão e seção selecionados
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            const activeContent = document.getElementById(tabId);
            activeContent.classList.add("active");
            activeContent.style.display = "block"; // Mostrar a seção selecionada
        });
    });

    // Mostra a primeira aba por padrão ao carregar a página
    const firstTab = document.querySelector(".tab-button.active");
    if (firstTab) {
        const tabId = firstTab.getAttribute("data-tab");
        const firstContent = document.getElementById(tabId);
        firstContent.style.display = "block";
    }
});






document.addEventListener("DOMContentLoaded", () => {




    // Elementos de Adicionar
    const idInput = document.querySelector("#id-carro");
    const nomeInput = document.querySelector("#nome-carro");
    const valorInput = document.querySelector("#valor-carro");
    const addCarButton = document.querySelector("#add-car");

    // Elementos de Deletar
    const deleteIdInput = document.querySelector("#delete-id");
    const deleteNomeInput = document.querySelector("#delete-nome");
    const deleteCarButton = document.querySelector("#delete-car");

    // Lista de Carros
    const carList = document.querySelector("#car-list");

    // Função para carregar carros
    function carregarCarros() {
        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        carList.innerHTML = carros
            .map(
                (carro) =>
                    `<div>
                        <p><strong>ID:</strong> ${carro.id}</p>
                        <p><strong>Nome:</strong> ${carro.nome}</p>
                        <p><strong>Valor:</strong> ${carro.valor}</p>
                    </div>`
            )
            .join("");
    }

    // Carregar carros na inicialização
    carregarCarros();

    // Adicionar Carro
    addCarButton.addEventListener("click", () => {
        const id = idInput.value.trim();
        const nome = nomeInput.value.trim();
        const valor = valorInput.value.trim();

        if (!id || !nome || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];

        // Verificar se o ID já existe
        if (carros.some((carro) => carro.id === id)) {
            alert("Já existe um carro com este ID.");
            return;
        }

        // Adicionar carro
        const novoCarro = { id, nome, valor };
        carros.push(novoCarro);
        localStorage.setItem("adminCarros", JSON.stringify(carros));

        alert("Carro adicionado com sucesso!");
        idInput.value = "";
        nomeInput.value = "";
        valorInput.value = "";
        carregarCarros();
    });

    // Deletar Carro
    deleteCarButton.addEventListener("click", () => {
        const id = deleteIdInput.value.trim();
        const nome = deleteNomeInput.value.trim();

        if (!id && !nome) {
            alert("Por favor, forneça um ID ou Nome para deletar.");
            return;
        }

        let carros = JSON.parse(localStorage.getItem("adminCarros")) || [];

        const carrosFiltrados = carros.filter(
            (carro) => carro.id !== id && carro.nome !== nome
        );

        if (carros.length === carrosFiltrados.length) {
            alert("Nenhum carro encontrado com o ID ou Nome fornecido.");
            return;
        }

        localStorage.setItem("adminCarros", JSON.stringify(carrosFiltrados));

        alert("Carro deletado com sucesso!");
        deleteIdInput.value = "";
        deleteNomeInput.value = "";
        carregarCarros();
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const editIdInput = document.getElementById("edit-id");
    const editNomeInput = document.getElementById("edit-nome");
    const editValorInput = document.getElementById("edit-valor");
    const editCarButton = document.getElementById("edit-car");

    // Detecta mudanças no campo de ID e carrega os dados automaticamente
    editIdInput.addEventListener("input", () => {
        const id = editIdInput.value.trim();
        if (!id) {
            editNomeInput.value = "";
            editValorInput.value = "";
            return;
        }

        // Obter a lista de carros do localStorage
        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        const carro = carros.find(carro => carro.id === id);

        if (!carro) {
            editNomeInput.value = "";
            editValorInput.value = "";
            return;
        }

        // Preenche os campos com os dados do carro encontrado
        editNomeInput.value = carro.nome;
        editValorInput.value = carro.valor;
    });

    // Lógica de edição do carro

    editCarButton.addEventListener("click"), () => {
        // Obtendo os valores inseridos
        const id = editIdInput.value.trim();
        const nome = editNomeInput.value.trim();
        const valor = editValorInput.value.trim();
    }
    
    // Verificar se todos os campos estão preenchidos
    if (!id || !nome || !valor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Obter a lista de carros do localStorage
    let carros = JSON.parse(localStorage.getItem("adminCarros"));

    // Verifica se o ID existe
    const carroIndex = carros.findIndex(carro => carro.id === id);

    if (carroIndex === -1) {
        alert("Carro não encontrado.");
        return;
    }

    // Atualizar os dados do carro
    carros[carroIndex].nome = nome;
    carros[carroIndex].valor = valor;

    // Salvar as alterações no localStorage
    localStorage.setItem("adminCarros", JSON.stringify(carros));

    alert("Carro editado com sucesso!");
    // Atualizar a lista de carros na aba "Visualizar"
    carregarCarros();

    // Resetar os campos
    editIdInput.value = "";
    editNomeInput.value = "";
    editValorInput.value = "";


});
