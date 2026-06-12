// Lógica do Cardápio da Lanchonete do Bairro

// Array de itens do cardápio (Modelo de Dados)
const itensCardapio = [
    {
        id: 1,
        nome: "X-Burguer",
        preco: 18.90,
        categoria: "Lanches",
        icone: "🍔"
    },
    {
        id: 2,
        nome: "X-Bacon",
        preco: 21.90,
        categoria: "Lanches",
        icone: "🥓"
    },
    {
        id: 3,
        nome: "Combo Família",
        preco: 45.90,
        categoria: "Combos",
        icone: "🍟"
    }
];

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
