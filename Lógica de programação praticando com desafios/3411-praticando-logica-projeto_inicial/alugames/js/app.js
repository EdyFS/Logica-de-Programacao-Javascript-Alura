//let numero;

function selecionarBotao(){
    let num = document.querySelector('li');

    let numero;
    if (num.document.id == 'game-1'){
        return numero = 1;
    }
    else if (num.document.id == 'game-2'){
        return numero = 2;
    }
    else if (num.document.id == 'game-3'){
        return numero = 3;
    }
}

function alterarStatus(selecionarBotao){
    selecionarBotao();
    let botao = document.querySelector('a');
    let imagem = document.getElementsByClassName('dashboard__item__img');
    if (botao.classList.contains('dashboard__item__button--return' ) && imagem.classList.contains('dashboard__item__img--rented')){
        //botao.classList.remove('dashboard__item__button');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
    }
    else{
        botao.classList.add('dashboard__item__button--return');
        //botao.classList.add('dashboard__item__button');
        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
    }

}