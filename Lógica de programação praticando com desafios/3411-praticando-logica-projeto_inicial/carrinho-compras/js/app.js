let carrinho;
let total;
let produto;
let preco;
let quantidade;
let precoProduto;
let valorTotal = 0;
let listaCarrinho = [];

function adicionar(){
    produto = document.getElementById('produto').value;
    if (produto == 'Fone de ouvido - R$100'){
        preco = 100;
    }
    else if(produto == 'Celular - R$1400'){
        preco = 1400;
    }
    else if(produto == 'Oculus VR - R$5000'){
        preco = 5000;
    }
    quantidade = parseInt(document.getElementById('quantidade').value);
    precoProduto = preco * quantidade;
    valorTotal = valorTotal + precoProduto;;
    listaCarrinho.push(`<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">${preco}</span><br>`);
    carrinho = document.querySelector('.carrinho__produtos__produto');
    carrinho.innerHTML = listaCarrinho;
    total = document.querySelector('.carrinho__total');
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">${valorTotal}</span>`;

}

function limpar(){
carrinho = document.querySelector('.carrinho__produtos__produto');
carrinho.innerHTML = '<span class="texto-azul"></span>  <span class="texto-azul"></span>';
total = document.querySelector('.carrinho__total');
total.innerHTML = 'Total: <span class="texto-azul" id="valor-total"></span>';
}