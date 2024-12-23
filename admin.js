document.addEventListener("DOMContentLoaded", () => {
    // Elementos de Adicionar
    const nomeInput = document.querySelector("#nome-carro");
    const anoInput = document.querySelector("#ano-carro");
    const valorInput = document.querySelector("#valor-carro");
    const addCarButton = document.querySelector("#add-car");

    // Referência ao campo de visualização de carros
    const carList = document.querySelector("#car-list");

    // Referência aos campos de edição
    const editIdInput = document.querySelector("#edit-id");
    const editNomeInput = document.querySelector("#edit-nome");
    const editAnoInput = document.querySelector("#edit-ano");
    const editValorInput = document.querySelector("#edit-valor");
    const editCarButton = document.querySelector("#edit-car");

    // Referência ao campo de deletar
    const deleteIdInput = document.querySelector("#delete-id");
    const deleteCarButton = document.querySelector("#delete-car");

    // Lógica de Adicionar Carro
    addCarButton.addEventListener("click", () => {
        const nome = nomeInput.value;
        const ano = anoInput.value;
        const valor = valorInput.value;

        if (!nome || !ano || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Adicionar carro ao localStorage
        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        const novoCarro = {
            id: Date.now(),
            nome,
            ano,
            valor
        };
        carros.push(novoCarro);
        localStorage.setItem("adminCarros", JSON.stringify(carros));

        alert("Carro adicionado com sucesso!");

        // Resetar os campos
        nomeInput.value = "";
        anoInput.value = "";
        valorInput.value = "";

        // Recarregar a lista de carros
        carregarCarros();
    });

    // Lógica de Visualizar Carros
    function carregarCarros() {
        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        carList.innerHTML = carros.map(carro => 
            `<div>
                <p>ID: ${carro.id}, Nome: ${carro.nome}, Ano: ${carro.ano}, Valor: ${carro.valor}</p>
            </div>`
        ).join("");
    }

    // Carregar carros na inicialização
    carregarCarros();

    // Lógica de Editar Carro
    editCarButton.addEventListener("click", () => {
        const id = parseInt(editIdInput.value);
        const nome = editNomeInput.value;
        const ano = editAnoInput.value;
        const valor = editValorInput.value;

        if (!id || !nome || !ano || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        const carroIndex = carros.findIndex(carro => carro.id === id);

        if (carroIndex === -1) {
            alert("Carro não encontrado.");
            return;
        }

        carros[carroIndex] = {
            ...carros[carroIndex],
            nome,
            ano,
            valor
        };

        localStorage.setItem("adminCarros", JSON.stringify(carros));

        alert("Carro editado com sucesso!");

        // Resetar os campos
        editIdInput.value = "";
        editNomeInput.value = "";
        editAnoInput.value = "";
        editValorInput.value = "";

        // Recarregar a lista de carros
        carregarCarros();
    });

    // Lógica de Deletar Carro
    deleteCarButton.addEventListener("click", () => {
        const id = parseInt(deleteIdInput.value);

        if (!id) {
            alert("Por favor, forneça um ID válido.");
            return;
        }

        let carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        const novosCarros = carros.filter(carro => carro.id !== id);

        if (carros.length === novosCarros.length) {
            alert("Carro não encontrado.");
            return;
        }

        localStorage.setItem("adminCarros", JSON.stringify(novosCarros));

        alert("Carro deletado com sucesso!");

        // Resetar o campo de ID
        deleteIdInput.value = "";

        // Recarregar a lista de carros
        carregarCarros();
    });
});
