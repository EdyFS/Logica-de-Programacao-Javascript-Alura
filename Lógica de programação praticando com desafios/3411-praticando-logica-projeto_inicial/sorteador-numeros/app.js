function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resposta = [];
    let diferenca = (ate - de + 1);
    if (de >= ate){
        alert('O primeiro número deve ser menor que o segundo');
        
    }
    else if(quantidade > diferenca){
        alert('Quantidde de números sorteados maior que o intervalo escolhido');
    }
    else{
    for(let i = 0; i < quantidade; i++){
        let numero = parseInt(Math.random() * (ate - de + 1)+ de);
        while(resposta.includes(numero)){
            numero = parseInt(Math.random() * (ate - de + 1)+ de);
        }
        console.log(numero);
        resposta.push(numero);
    }
    //let texto = `Números sorteados: ${resposta = [i]}`;
    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class = "texto__paragrafo">Números sorteados: ${resposta}</label>`;
    console.log(resposta);
    //console.log(texto);
    alterarStatusBotao();
}
}

function reiniciar(){
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    de = document.getElementById('de');
    de.value = '';
    ate = document.getElementById('ate');
    ate.value = '';
    texto = document.getElementById('resultado');
    texto.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

/*Resposta da ALURA

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //alert(`Quantidade: ${quantidade}`);
    //alert(`Do número: ${de}`);
    //alert(`Até o número: ${ate}`);

    let sorteados = [];
    
    let numero;
    //alert(numero);
    
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
        alert(sorteados)
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class = "texto_paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate = document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>;
    alterarStatusBotao();
}
    */
