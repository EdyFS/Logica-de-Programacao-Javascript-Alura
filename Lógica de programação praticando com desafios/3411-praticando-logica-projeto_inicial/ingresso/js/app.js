let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;

function comprar(){
    // receber valores
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    //verificar quantidades disponíveis
    if (quantidade < 0){
        alert('Valor inválido');
    }
    else{
        //subtrair ingressos comprados
        if (ingresso == 'inferior' && quantidade <= qtdInferior){
            qtdInferior = qtdInferior - quantidade;
        }
        else if( ingresso == 'superior' && quantidade <= qtdSuperior){
            qtdSuperior = qtdSuperior - quantidade;
        }
        else if( ingresso == 'pista' && quantidade<= qtdPista){
            qtdPista = qtdPista - quantidade;
        }
        else{
            alert('Quantidade de ingressos insuficiente');
        }
    }
    console.log(ingresso);
    //mostrar total
    let pista = document.getElementById('qtd-pista');
    pista.innerHTML = `<span id="qtd-pista">${qtdPista}</span>`;
    let superior = document.getElementById('qtd-superior');
    superior.innerHTML = `<span id="qtd-superior">${qtdSuperior}</span>`;
    let inferior = document.getElementById('qtd-inferior');
    inferior.innerHTML = `<span id="qtd-inferior">${qtdInferior}</span>`;
}

/*
//Solução Alura
function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }
    else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }
    else if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}

function comprarPista(){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert('Quantidade indisponível para tipo pista');
    }
    else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizado com sucesso');

    }
}

function comprarSuperior(){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior){
        alert('Quantidade indisponível para tipo superior');
    }
    else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizado com sucesso');

    }
}

function comprarInferior(){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior){
        alert('Quantidade indisponível para tipo inferior');
    }
    else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizado com sucesso');

    }
}
    */