/*let numero;

function alterarStatus(id){
    selecionarBotao();
    let botao = document.querySelector('a');
    let imagem = document.getElementsByClassName('dashboard__item__img');
    if (botao.classList.contains('dashboard__item__button--return' )){
        //botao.classList.remove('dashboard__item__button');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    }
    else{
        botao.classList.add('dashboard__item__button--return');
        //botao.classList.add('dashboard__item__button');
        botao.innerHTML = 'Devolver';
    }
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
    }

}

function selecionarBotao(){
    let num = document.querySelector('li');

    let numero;
    if (num.document.contains(id== 'game-1')){
        return numero = 1;
    }
    else if (num.document.contains(id == 'game-2')){
        return numero = 2;
    }
    else if (num.document.contains(id == 'game-3')){
        return numero = 3;
    }
}
*/

//Resolução Alura
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //alert(nomeJogo.textContent);
    if (botao.classList.contains('dashboard__item__button--return' )){
        //botao.classList.remove('dashboard__item__button');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    }
    else{
        botao.classList.add('dashboard__item__button--return');
        //botao.classList.add('dashboard__item__button');
        botao.innerHTML = 'Devolver';
    }
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
    }
}
