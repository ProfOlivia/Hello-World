let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");
let modal = document.querySelector("#modal");
let inputNome = document.querySelector("#input-nome");
let btnConfirmar = document.querySelector("#btn-confirmar");

function mostrarModal() {
    modal.style.display = "flex"; 
}

function fecharModal() {
    modal.style.display = "none"; 
}

btnConfirmar.addEventListener("click", function() {
    nomeUsuário = inputNome.value.trim(); 
    if (nomeUsuário !== "") {
        elemento.textContent = nomeUsuário;
        fecharModal(); 
    } else {
        alert("Por favor, digite um nome válido.");
    }
});


mostrarModal();
