// function Orcamento() {
//     window.location.href = "orcamento.html";
// }


function Orcamento() {
  document.getElementById("orcamentoModal").style.display = "block";
}

function fecharOrcamento() {
  document.getElementById("orcamentoModal").style.display = "none";
}

// Fecha ao clicar fora do modal
window.onclick = function(event) {
  const modal = document.getElementById("orcamentoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Exemplo de envio (pode substituir por integração real)
document.getElementById("formOrcamento").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
  fecharOrcamento();
});
