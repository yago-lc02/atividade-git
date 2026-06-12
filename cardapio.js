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

// Função para renderizar os itens na tela
function renderizarCardapio() {
    const grid = document.getElementById('cardapio-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Limpa o conteúdo estático

    itensCardapio.forEach(item => {
        const itemHTML = `
            <div class="cardapio-item">
                <div class="item-img-placeholder">${item.icone}</div>
                <h3>${item.nome}</h3>
                <p class="price">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                <button class="btn-order" onclick="fazerPedido('${item.nome}')">Pedir</button>
            </div>
        `;
        grid.innerHTML += itemHTML;
    });
}

// Função para processar o pedido
function fazerPedido(nomeItem) {
    alert(`Obrigado pelo seu pedido! Preparando o seu delicioso ${nomeItem}.`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Lanchonete do Bairro inicializada com sucesso!');
    renderizarCardapio();
});
