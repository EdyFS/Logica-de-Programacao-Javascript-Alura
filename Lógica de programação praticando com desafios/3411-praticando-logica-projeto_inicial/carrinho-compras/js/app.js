let carrinho;
let total;

function adicionar(){
    
}

function limpar(){
carrinho = document.querySelector('.carrinho__produtos__produto');
carrinho.innerHTML = '<span class="texto-azul"></span>  <span class="texto-azul"></span>';
total = document.querySelector('.carrinho__total');
total.innerHTML = 'Total: <span class="texto-azul" id="valor-total"></span>';
}