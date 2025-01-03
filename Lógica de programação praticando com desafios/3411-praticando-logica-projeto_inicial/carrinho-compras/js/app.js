let carrinho;
let total;
let produto;
let nomeProduto;
let preco;
let quantidade;
let precoProduto;
let valorTotal = 0;
let listaCarrinho = [];
limpar();

function adicionar(){
    produto = document.getElementById('produto').value;
    if (produto == 'Fone de ouvido - R$100'){
        preco = 100;
        nomeProduto = 'Fone de ouvido';
    }
    else if(produto == 'Celular - R$1400'){
        preco = 1400;
        nomeProduto = 'Celular';
    }
    else if(produto == 'Oculus VR - R$5000'){
        preco = 5000;
        nomeProduto = 'Óculos VR';
    }
    else{
        alert('Produto Inválido')
    }
    quantidade = parseInt(document.getElementById('quantidade').value);
    if (quantidade > 100 || quantidade < 1){
        alert('Quantidade inválida');
        //limpar();
    }
    else{
    precoProduto = preco * quantidade;
    valorTotal = valorTotal + precoProduto;;
    listaCarrinho.push(`<br><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>`);
    carrinho = document.querySelector('.carrinho__produtos__produto');
    carrinho.innerHTML = listaCarrinho;
    total = document.querySelector('.carrinho__total');
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">${valorTotal}</span>`;
    }
}

function limpar(){
carrinho = document.querySelector('.carrinho__produtos__produto');
carrinho.innerHTML = '<span class="texto-azul"></span>  <span class="texto-azul"></span>';
total = document.querySelector('.carrinho__total');
total.innerHTML = 'Total: <span class="texto-azul" id="valor-total"></span>';
for (let i = 0; i <= listaCarrinho.length; i++){
    listaCarrinho.pop(i);
}
valorTotal = 0;
}

/*
//Solução Alura
let totalGeral;
limpar();
//document.getElementById('lista-produtos').innerHTML = '';
//document.getElementById('valor-total').textContent = 'R$ 0';
function adicinoar(){
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span><br></br>`
    
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar(){
    totalGeral;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
*/