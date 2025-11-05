/* Script do Modal de Orçamento */
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
    // Você pode adicionar uma lógica de envio aqui antes de fechar
    // Por exemplo, usando fetch() para o formspree e tratando a resposta
    alert("Formulário enviado com sucesso!");
    fecharOrcamento();
});

/* ADICIONADO: Script do Menu Hambúrguer */
document.getElementById("menuHamburger").addEventListener("click", function() {
    document.getElementById("menuPrincipal").classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um item
document.querySelectorAll('.menu a, .menu button').forEach(item => {
    item.addEventListener('click', () => {
        // Verifica se o botão de orçamento foi clicado, pois ele não deve fechar o menu, mas abrir o modal
        if (!item.classList.contains('sol_orcamento') && !item.classList.contains('portfolio')) {
             document.getElementById("menuPrincipal").classList.remove("active");
        }
        // Se for o botão de orçamento, o menu principal é fechado pela própria função Orcamento()
        // Mas vamos garantir que ele feche caso o usuário só abra o modal
        if(item.classList.contains('sol_orcamento') || item.classList.contains('portfolio')) {
             document.getElementById("menuPrincipal").classList.remove("active");
        }
    });
});

// Função de Portfólio (placeholder, já que estava no seu HTML)
function Portfolio() {
    alert("Página de Portfólio em breve!");
    // Adicione a lógica para ir para a página de portfólio se necessário
    // window.location.href = "/portfolio.html";
}