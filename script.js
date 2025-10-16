function Orcamento() {
  document.getElementById("orcamentoModal").style.display = "block";
}

function fecharOrcamento() {
  document.getElementById("orcamentoModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("orcamentoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("formOrcamento").addEventListener("submit", function() {
  alert("Formulário enviado com sucesso!");
  fecharOrcamento();
});