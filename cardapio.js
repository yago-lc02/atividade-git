// Lógica do Cardápio - Beco do Hambúrguer

// Array de itens do cardápio (Modelo de Dados)
const itensCardapio = [
    {
        id: 1,
        nome: "Beco Burguer",
        descricao: "Nosso clássico. Blend bovino de 150g grelhado no fogo, cheddar derretido e maionese defumada de bacon no pão brioche macio.",
        preco: 18.90,
        categoria: "Lanches",
        icone: "🍔"
    },
    {
        id: 2,
        nome: "Duplo Cheddar Smash",
        descricao: "Para os fortes. Dois smash blends de 80g na chapa bem prensados, cheddar duplo cremoso e picles artesanal da casa.",
        preco: 24.90,
        categoria: "Lanches",
        icone: "🥓"
    },
    {
        id: 3,
        nome: "Beco Especial (Combo)",
        descricao: "O campeão de vendas. Beco Burguer acompanhado de batatas fritas rústicas salpicadas de páprica e refrigerante lata gelado.",
        preco: 34.90,
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
                <p class="description">${item.descricao}</p>
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
    console.log('Beco do Hambúrguer inicializado com sucesso!');
    renderizarCardapio();
});
