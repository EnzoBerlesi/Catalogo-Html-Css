document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.style.display = "none";
            });

            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            const activeContent = document.getElementById(tabId);
            activeContent.classList.add("active");
            activeContent.style.display = "block";
        });
    });

    const firstTab = document.querySelector(".tab-button.active");
    if (firstTab) {
        const tabId = firstTab.getAttribute("data-tab");
        const firstContent = document.getElementById(tabId);
        firstContent.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded", () => {

    const idInput = document.querySelector("#id-carro");
    const nomeInput = document.querySelector("#nome-carro");
    const valorInput = document.querySelector("#valor-carro");
    const addCarButton = document.querySelector("#add-car");

    const deleteIdInput = document.querySelector("#delete-id");
    const deleteNomeInput = document.querySelector("#delete-nome");
    const deleteCarButton = document.querySelector("#delete-car");

    const carList = document.querySelector("#car-list");

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

    carregarCarros();

    addCarButton.addEventListener("click", () => {
        const id = idInput.value.trim();
        const nome = nomeInput.value.trim();
        const valor = valorInput.value.trim();

        if (!id || !nome || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];

        if (carros.some((carro) => carro.id === id)) {
            alert("Já existe um carro com este ID.");
            return;
        }

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

    editIdInput.addEventListener("input", () => {
        const id = editIdInput.value.trim();
        if (!id) {
            editNomeInput.value = "";
            editValorInput.value = "";
            return;
        }

        const carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
        const carro = carros.find(carro => carro.id === id);

        if (!carro) {
            editNomeInput.value = "";
            editValorInput.value = "";
            return;
        }

        editNomeInput.value = carro.nome;
        editValorInput.value = carro.valor;
    });

    editCarButton.addEventListener("click", () => {
        const id = editIdInput.value.trim();
        const nome = editNomeInput.value.trim();
        const valor = editValorInput.value.trim();
    
        if (!id || !nome || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
    
        let carros = JSON.parse(localStorage.getItem("adminCarros")) || [];
    
        const carroIndex = carros.findIndex(carro => carro.id === id);
    
        if (carroIndex === -1) {
            alert("Carro não encontrado.");
            return;
        }
    
        carros[carroIndex].nome = nome;
        carros[carroIndex].valor = valor;
    
        localStorage.setItem("adminCarros", JSON.stringify(carros));
    
        alert("Carro editado com sucesso!");
    
        carregarCarros();
    
        editIdInput.value = "";
        editNomeInput.value = "";
        editValorInput.value = "";
    });
    

});
