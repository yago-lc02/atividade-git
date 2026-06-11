// Lógica do Cardápio da Lanchonete do Bairro

document.addEventListener('DOMContentLoaded', () => {
    console.log('Lanchonete do Bairro inicializada com sucesso!');
    
    // Adiciona evento de clique aos botões de pedir
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemCard = e.target.closest('.cardapio-item');
            const itemName = itemCard.querySelector('h3').textContent;
            alert(`Obrigado pelo seu pedido! Preparando o seu delicioso ${itemName}.`);
        });
    });
});
