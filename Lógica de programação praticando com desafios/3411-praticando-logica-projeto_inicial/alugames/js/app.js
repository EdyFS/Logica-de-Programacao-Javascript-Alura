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
    //let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //alert(nomeJogo.textContent);
    if (imagem.classList.contains('dashboard__item__img--rented')){
        let confirmacao = prompt('Para devolver digite "DEVOLVER": ').toUpperCase();
        console.log(confirmacao);
        //if (confirm(`Você tem certeza que deseja devolver o jofo ${nomeJogo.textContent}?`))
        if (confirmacao == "DEVOLVER"){
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            //contador--;
        }
    }
    else{
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        //contador++;
    }
    /*if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
    }*/
   contarAlugados()
}

function contarAlugados(){
    let contador = 0;
    for (id = 1; id <= 3; id++){
        gameClicado = document.getElementById(`game-${id}`);
        imagem = gameClicado.querySelector('.dashboard__item__img');
        if (imagem.classList.contains('dashboard__item__img--rented')){
            contador = contador + 1;
        }
    }
    console.log(`${contador} jogos estão alugados`);
}

document.addEventListener('DOMContentLoaded', function() {
    contador = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarAlugados();
});
